document.addEventListener("DOMContentLoaded", () => {
  let currentStatusFilter = "All";
  let currentSortOption = "recent";

  const libraryGrid = document.getElementById("library-grid");
  const emptyState = document.getElementById("library-empty-state");
  const countBadge = document.getElementById("library-count-badge");
  const sortSelect = document.getElementById("library-sort-select");

  // Render the library grid
  function renderLibraryGrid() {
    if (!libraryGrid) return;

    let library = {};
    try {
      library = JSON.parse(localStorage.getItem("rh_library") || "{}");
    } catch {
      library = {};
    }

    let mangaList = Object.values(library);

    // Filter by Status
    if (currentStatusFilter !== "All") {
      mangaList = mangaList.filter((m) => m.status === currentStatusFilter);
    }

    // Sort by Option
    if (currentSortOption === "recent") {
      mangaList.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    } else if (currentSortOption === "az") {
      mangaList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSortOption === "za") {
      mangaList.sort((a, b) => b.title.localeCompare(a.title));
    } else if (currentSortOption === "progress") {
      mangaList.sort((a, b) => {
        const progressA = (a.readChaptersCount || 0) / (a.maxChapters || 1);
        const progressB = (b.readChaptersCount || 0) / (b.maxChapters || 1);
        return progressB - progressA;
      });
    }

    // Update count badge
    if (countBadge) countBadge.textContent = mangaList.length;

    if (mangaList.length === 0) {
      libraryGrid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    // Render card elements
    libraryGrid.innerHTML = mangaList
      .map((m) => {
        const maxCh = m.maxChapters || 12;
        const readCh = m.readChaptersCount || 0;
        const percent = Math.min(100, Math.round((readCh / maxCh) * 100));

        // Status Badge styling & translation key
        let badgeClass = "bg-accent/20 text-accent";
        if (m.status === "Plan") badgeClass = "bg-blue-500/20 text-blue-400";
        if (m.status === "Completed")
          badgeClass = "bg-green-500/20 text-green-400";
        if (m.status === "Hold")
          badgeClass = "bg-yellow-500/20 text-yellow-400";
        if (m.status === "Dropped") badgeClass = "bg-red-500/20 text-red-400";
        if (m.status === "Rereading")
          badgeClass = "bg-purple-500/20 text-purple-400";

        const statusKey = "library.status" + m.status;
        const statusText = window.RH_i18n
          ? window.RH_i18n.t(statusKey)
          : getStatusFallback(m.status);

        const chReadWord = window.RH_i18n
          ? window.RH_i18n.t("library.chRead")
          : "ch read";

        return `
            <div class="group bg-card rounded-2xl overflow-hidden border border-gray-800/60 hover:border-accent/40 shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:translate-y-[-4px]" data-title="${m.title.replace(/"/g, "&quot;")}">
                <!-- Cover Image Container -->
                <div class="relative aspect-portrait overflow-hidden bg-surface">
                    <img src="${m.img}" alt="${m.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    
                    <!-- Top Gradient overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    
                    <!-- Quick action bar -->
                    <div class="absolute top-2 right-2 flex gap-1.5 z-10">
                        <button class="btn-quick-remove w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow" title="Remove" data-title="${m.title.replace(/"/g, "&quot;")}">
                            <i class="fa-regular fa-trash-can text-xs"></i>
                        </button>
                    </div>

                    <!-- Status overlay badge -->
                    <div class="absolute top-2 left-2 z-10">
                        <span class="px-2 py-0.5 rounded text-[9px] font-black tracking-wider uppercase shadow-md ${badgeClass}">
                            ${statusText}
                        </span>
                    </div>

                    <!-- Reading Progress Bar overlay -->
                    <div class="absolute bottom-2 left-2 right-2 z-10 flex flex-col">
                        <div class="flex justify-between items-center text-[10px] font-bold text-white mb-1 drop-shadow">
                            <span>${readCh} / ${maxCh} ${chReadWord}</span>
                            <span>${percent}%</span>
                        </div>
                        <div class="w-full bg-white/20 h-1 rounded-full overflow-hidden shadow">
                            <div class="bg-accent h-full transition-all duration-300" style="width: ${percent}%"></div>
                        </div>
                    </div>
                </div>

                <!-- Info Section -->
                <div class="p-3.5 flex flex-col flex-grow justify-between bg-card/50">
                    <h3 class="font-bold text-xs text-white line-clamp-1 group-hover:text-accent transition-colors mb-1 truncate" title="${m.title.replace(/"/g, "&quot;")}">${m.title}</h3>
                    <p class="text-muted text-[10px] font-medium truncate">${m.author || "Unknown Author"}</p>
                </div>
            </div>
            `;
      })
      .join("");

    // Attach Card detail modal triggers
    libraryGrid.querySelectorAll(".group[data-title]").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-quick-remove")) return;

        const title = card.getAttribute("data-title");
        const savedManga = library[title];
        if (!savedManga) return;

        const allManga = [
          ...(window.MangaData?.gridData || []),
          ...(window.MangaData?.carouselData || []),
        ];
        let manga = allManga.find(
          (m) => m.title.toLowerCase() === title.toLowerCase(),
        );
        if (!manga) {
          manga = savedManga;
        }

        if (window.__openDetail) {
          window.__openDetail(manga);
        }
      });
    });

    // Attach quick remove actions
    libraryGrid.querySelectorAll(".btn-quick-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const title = btn.getAttribute("data-title");
        if (library[title]) {
          delete library[title];
          localStorage.setItem("rh_library", JSON.stringify(library));
          renderLibraryGrid();
          if (window.showToast) {
            window.showToast(`Removed "${title}" from library.`);
          }
        }
      });
    });
  }

  function getStatusFallback(status) {
    const map = {
      Reading: "Reading",
      Plan: "Plan to Read",
      Completed: "Completed",
      Hold: "On Hold",
      Dropped: "Dropped",
      Rereading: "Re-Reading",
    };
    return map[status] || status;
  }

  // Handle Tab filters
  document.querySelectorAll(".library-filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".library-filter-tab").forEach((t) => {
        t.classList.remove("active", "border-accent", "text-accent");
        t.classList.add("border-transparent", "text-muted");
      });

      tab.classList.add("active", "border-accent", "text-accent");
      tab.classList.remove("border-transparent", "text-muted");

      currentStatusFilter = tab.getAttribute("data-status");
      renderLibraryGrid();
    });
  });

  // Handle Sorting
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSortOption = e.target.value;
      renderLibraryGrid();
    });
  }

  // Check language localization updates
  const langSelectOptions = document.querySelectorAll(".lang-option");
  langSelectOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      setTimeout(() => {
        renderLibraryGrid();
      }, 100);
    });
  });

  // Initial grid render
  setTimeout(() => {
    renderLibraryGrid();
  }, 200);

  window.renderLibraryGrid = renderLibraryGrid;
});
