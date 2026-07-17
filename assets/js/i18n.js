/* Reader's Haven — i18n (English / Khmer) for navbar & sidebar */

(function () {
  const translations = {
    en: {
      "nav.browse": "BROWSE CATALOG",
      "nav.manhwa": "Manhwa",
      "nav.manga": "Manga",
      "nav.novel": "Novel",
      "nav.history": "MY HISTORY",
      "nav.genres": "GENRE FILTERS",
      "nav.newReleases": "NEW RELEASES",
      "nav.searchPlaceholder": "Search manga...",

      "genre.action": "Action",
      "genre.romance": "Romance",
      "genre.fantasy": "Fantasy",
      "genre.horror": "Horror",
      "genre.scifi": "Sci-Fi",
      "genre.comedy": "Comedy",
      "genre.drama": "Drama",
      "genre.sliceOfLife": "Slice of Life",
      "genre.adventure": "Adventure",
      "genre.mystery": "Mystery",
      "genre.sports": "Sport",
      "genre.thriller": "Thriller",

      "sidebar.home": "Home",
      "sidebar.explore": "Explore",
      "sidebar.library": "My Library",
      "sidebar.profile": "Profile Settings",
      "sidebar.theme": "Dark / Light Theme",
      "sidebar.themeLightActive": "Light Mode Active",
      "sidebar.themeDarkActive": "Dark Mode Active",
      "sidebar.support": "Support",
      "sidebar.login": "Login / Sign Up",
      "sidebar.contact": "Contact Us",
      "sidebar.about": "About Us",
      "sidebar.community": "Community",

      "home.trending": "Trending Updates",
      "home.latest": "Latest Updates",
      "home.discover": "Discover",
      "home.latestReleased": "Latest Released",
      "home.latest_updates": "Latest Updates",

      "filter.latest": "LATEST RELEASES",
      "filter.popular": "TOP POPULAR",
      "filter.completed": "COMPLETED",
      "filter.upcoming": "UPCOMING",
      "filter.search": "Search",
      "filter.shounen": "Shounen",
      "filter.shoujo": "Shoujo",
      "filter.seinen": "Seinen",
      "filter.josei": "Josei",
      "filter.join": "Join",
      "filter.status": "Status",
      "filter.ongoing": "Ongoing",
      "filter.hiatus": "Hiatus",
      "filter.cancelled": "Cancelled",
      "filter.sort": "Sort By",
      "filter.relevance": "Relevance",
      "filter.az": "A - Z",
      "filter.za": "Z - A",
      "filter.ongoing": "Ongoing First",
      "filter.completed": "Completed First",
      "filter.advanced-genres": "Advanced Genres Filters",
      "filter.reset": "Reset Filters",
      "filter.target": "Target Demographic",

      "main.manhwa": "Manhwa",
      "main.hotupdate": "Hot Updates",

      "contact.title": "Contact Us",

      "footer.copyright":
        "Your ultimate destination for manga, manhwa, and novels. Read, discover, and follow your favorite series.",
      "footer.quickLinks": "Quick Links",
      "footer.newReleases": "New Releases",
      "footer.community": "Community",
      "footer.stayUpdated": "Stay Updated",
      "footer.text": "Get notified about new releases and updates.",
      "footer.join": "Join",
      "footer.contact": "Contact",
      "footer.aboutUs": "About Us",

      youremailPlaceholder: "Your email",

      "header.new-releases": "New Releases",
      "header.new-releases.description":
        "The freshest titles added to the catalog",
      "header.searchPlaceholder": "Search by title...",
      "new-releases.results-prefix": "Showing",
      "new-releases.results-suffix": "New Titles",

      "name.soaphea": "Loeng ChanSoaphea",
      "name.wathana": "Sam SereyWathana ",
      "name.somsak": "Leap Soksomsak",
      "name.lida": "Chamroeun Pagnalida",

      "bio.team": "Meet the Team",
      "bio.lida":
        "Built the login, signup, and password reset system. Handles user sessions.",
      "bio.soaphea":
        "The JavaScript wizard keeping everything smooth and interactive. Responsible throughout the site.",
      "bio.wathana":
        "Drives the vision for Reader's Haven from concept to launch. Loves clean interfaces, dark themes, and anything with a good plot twist.",
      "bio.somsak":
        "Curates the manga catalog and ensures every title has the right genres, covers, and chapters. The team's resident manga with 30+ titles read.",

      "tag.lida": "Project Developer",
      "tag.soaphea": "Frontend Developer",
      "tag.wathana": "Project and fronted Developer, Researcher",
      "tag.somsak": "Content & Research",

      "box.misson": "Our Mission",
      "box.read": "Reading should feel like home",
      "box.read1":
        "We built Reader's Haven because we believe great stories deserve a great stage. No clutter, no distractions — just you and the story.",
      "box.number": "500+",
      "box.title": "Titles",
      "box.number1": "10k+",
      "box.title1": "Readers",
      "box.number2": "4",
      "box.title2": "Dreamers",
      "box.des":
        "A passionate team of four building the ultimate manga, manhwa & novel reading experience — one chapter at a time.",
      "box.des1": "We Are",
      "box.des2": "The Team Behind the Magic",

      "section.dc": "What We Stand For",
      "section.dc1": "Reader First",
      "section.dc2":
        "Every design decision is made with the reader in mind. Clean, distraction-free, and intuitive.",
      "section.dc3": "Speed & Polish",
      "section.dc4":
        "Fast loads, smooth animations, and pixel-perfect UI. We don't ship until it feels right.",
      "section.dc5": "Passion Driven",
      "section.dc6":
        "We're fans ourselves. This project exists because we wanted a reader we'd actually use every day.",
      "section.dc7": "Start Reading Today",
      "section.dc8":
        "Join thousands of readers already enjoying Reader's Haven.",
      "section.dc9": "Browse Catalog",

      "span.home": "Back to Home",
      "span.page": "Page",
      "span.team": "The Team Behind the Magic",

      // Signup page
      "sign.acc": "Create Account",
      "sign.join": "Join the community and start reading today",
      "sign.username": "Username",
      "sign.email": "Email Address",
      "sign.phone": "Phone Number",
      "sign.password": "Password",
      "sign.confirm": "Confirm Password",
      "ign.confirm": "Confirm Password",
      "sign.agree": "I agree to the Terms of Service and Privacy Policy",
      "sign.terms": "Terms of Service",
      "sign.privacy": "Privacy Policy",
      "sign.createacc": "CREATE ACCOUNT",
      "sign.or": "OR",
      "sign.already": "Already have an account?",
      "sign.login": "Log In",

      // Login page
      login: "LOG IN",
      signup: "SIGN UP",
      logout: "LOG OUT",
      "sign.welcomeback": "Welcome Back",
      "sign.log": "Log in to continue your reading journey",
      "sign.rememberme": "Remember me",
      "sign.forgotpw": "Forgot Password?",
      "sign.dont": "Don't have an account?",
      "sign.enteremial": "Enter your email to reset password",
      "sign.fillpw": "Fill in your email",
      "sign.resetpassword": "Reset Password",
      "sign.verification": "Verification Code",
      "sign.code": "Enter the 6-digit code sent to your email",
      "sign.code1": "Enter 6-digit code",
      sendcode: "VERIFY CODE",
      "sign.veritycode": "Verify Code",
      "sign.changepw": "Change Password",
      "sign.newpassword": "New Password",
      "sign.condirmnew": "Confirm New Password",

      // Contact page
      "contact.text":
        " Got a question, feedback, or a report? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.",
      "contact.address": "Our Address",
      "contact.address1":
        "#160, St 315, Sangkat Boeung Kok 2, Khan Tuol Kouk, Phnom Penh, 12152",
      "contact.phone": "Phone",
      "contact.number": "095600913",
      "contact.email": "Email",
      "contact.email1": "support@readershaven.com",
      "contact.suppport": "Support Hours",
      "contact.time": "Mon - Fri: 8 AM - 4 PM (ICT)",
      "contact.followus": "Follow Us",
      "contact.msg": "Send a Message",
      "contact.topic": "Topic",
      "contact.general": "General",
      "contact.bug": " Bug Report",
      "contact.content": "Content Request",
      "contact.partnership": "Partnership    ",
      "contact.acc": " Account Issue",
      "contact.name": "Full Name",
      "contact.email2": "Email Address",
      "contact.subject": "Subject",
      "contact.message": "Your Message",
      "contact.send": "Send Message",
      "contacttext2.": "We typically respond within 24-48 hours.",

      // Community page
      "community.createThread": "Create Thread",
      "community.topicPlaceholder":
        "Topic Heading (e.g., Solo Leveling Ep. 14 thoughts...)",
      "community.contentPlaceholder":
        "Break down your theories, reviews, or queries...",
      "community.publish": "PUBLISH",
      "community.hourAgo": "1 hour ago",
      "community.theories": "THEORIES",
      "community.samplePostTitle":
        "The Eminence in Shadow: Did Cid actually realize the cult was real in Chapter 140?",
      "community.samplePostBody":
        "Based on his latest interactions and how he skipped the main internal monologue sequences from the novel, I'm starting to wonder if he's actually dropping his act or just running entirely on pure luck.",
      "community.comments": "48 COMMENTS",
      "community.save": "SAVE",
      "community.rules": "Haven Rules",
      "community.rule1": "Be civil. Keep structural comments constructive.",
      "community.rule2":
        "Use explicit <strong>[SPOILER]</strong> headings when referencing raw chapters.",
      "community.trending": "Trending Tags",
      "community.tagEminence": "#EminenceInShadow",
      "community.tagSolo": "#SoloLeveling",
      "community.tagNovels": "#Novels",

      // Profile page
      "profile.myProfile": "My Profile",
      "profile.premiumReader": "✦ PREMIUM READER",
      "profile.navInfo": "Profile Info",
      "profile.navHistory": "Reading History",
      "profile.navSettings": "Settings",
      "profile.logOut": "Log Out",
      "profile.monthlyGoal": "Monthly Goal",
      "profile.titles": "titles",
      "profile.titlesRead": "Titles Read",
      "profile.sessions": "Sessions",
      "profile.dayStreak": "Day Streak 🔥",
      "profile.memberSince": "Member Since",
      "profile.accountDetails": "Account Details",
      "profile.editProfile": "Edit Profile",
      "profile.username": "Username",
      "profile.emailLabel": "Email",
      "profile.countryCode": "Country Code",
      "profile.phoneLabel": "Phone",
      "profile.bio": "Bio",
      "profile.bioPlaceholder": "Tell readers about yourself...",
      "profile.favoriteGenres": "Favorite Genres",
      "profile.saveChanges": "Save Changes",
      "profile.cancel": "Cancel",
      "profile.changePassword": "Change Password",
      "profile.currentPassword": "Current Password",
      "profile.newPassword": "New Password",
      "profile.updatePassword": "Update Password",
      "profile.readingHistory": "Reading History",
      "profile.clearAll": "Clear All",
      "profile.noHistory": "No reading history yet.",
      "profile.browseManga": "Browse manga →",
      "profile.preferences": "Preferences",
      "profile.darkLightMode": "Dark / Light Mode",
      "profile.switchAppearance": "Switch the site appearance",
      "profile.chapterNotif": "Chapter Notifications",
      "profile.chapterNotifDesc": "Alert when new chapters drop",
      "profile.autoplayCarousel": "Autoplay Carousel",
      "profile.autoplayDesc": "Auto-advance hero slides",
      "profile.scrollMode": "Default Scroll Mode",
      "profile.scrollModeDesc": "Use vertical scroll reader by default",
      "profile.dangerZone": "Danger Zone",
      "profile.deleteAccount": "Delete My Account",

      "library.title": "My Library",
      "library.saved": "Saved",
      "library.gridView": "Grid view",
      "library.listView": "List view",
      "library.totalManga": "Total Manga",
      "library.currentlyReading": "Currently Reading",
      "library.chaptersRead": "Chapters Read",
      "library.tabAll": "ALL",
      "library.tabReading": "READING",
      "library.tabPlan": "PLAN TO READ",
      "library.tabCompleted": "COMPLETED",
      "library.tabHold": "ON HOLD",
      "library.tabDropped": "DROPPED",
      "library.tabRereading": "RE-READING",
      "library.results": "results",
      "library.sort": "Sort",
      "library.sortRecent": "Recently Added",
      "library.sortAZ": "A → Z",
      "library.sortZA": "Z → A",
      "library.sortProgress": "Progress",
      "library.sortChapters": "Chapters Read",
      "library.emptyTitle": "Your library is empty",
      "library.emptyText": "Save manga from the catalog and they'll show up here.",
      "library.browseCatalog": "BROWSE CATALOG",
      "library.continue": "CONTINUE",
      "library.remove": "Remove from library",
      "library.chRead": "ch read",
      "library.chaptersReadCount": "chapters read",
      "library.outOf": "out of",

      "library.statusReading": "Reading",
      "library.statusPlan": "Plan to Read",
      "library.statusCompleted": "Completed",
      "library.statusHold": "On Hold",
      "library.statusDropped": "Dropped",
      "library.statusRereading": "Re-Reading",

      "sidebar.browseCatalog": "Browse Catalog",
      "sidebar.genres": "Genres",

      "hero.weeklyFeatured": "Weekly Featured Selection",
      "hero.readNow": "READ NOW",

      "detail.addToLibrary": "Add to library",
      "detail.share": "Share",
      "detail.addToList": "Add to List",
      "detail.startReading": "Start Reading",
      "detail.tabChapters": "Chapters",
      "detail.tabComments": "Comments",
      "detail.tabArt": "Art",
      "detail.tabRelated": "Related",
      "detail.tabRecommendations": "Recommendations",
      "detail.descending": "Descending",
      "detail.markAllRead": "Mark all as read",
      "detail.index": "Index",
      "detail.noComments": "No comments yet.",
      "detail.firstComment": "Be the first to share your thoughts.",
      "detail.noArt": "No art submissions yet.",
      "detail.noRelated": "No related titles found.",
      "detail.author": "Author",
      "detail.artist": "Artist",
      "detail.demographic": "Demographic",
      "detail.track": "Track",
      "detail.publication": "Publication",
      "detail.by": "by",
      "detail.noDesc": "No description available for this manga.",

      "reader.switchMode": "Switch Reading Mode",
      "reader.settings": "Reader Settings",
      "reader.prevCh": "Previous Chapter",
      "reader.nextCh": "Next Chapter",
      "reader.close": "Close Reader",
      "reader.bgColor": "Background Color",
      "reader.themeDark": "Dark",
      "reader.themeGray": "Gray",
      "reader.themeSepia": "Sepia",
      "reader.themeLight": "Light",
      "reader.maxWidth": "Max Page Width",
      "reader.widthNarrow": "Narrow",
      "reader.widthDefault": "Default",
      "reader.widthWide": "Wide",
      "reader.widthFull": "Full",
      "reader.pageZoom": "Page Zoom",
      "reader.prevPage": "PREV PAGE",
      "reader.nextPage": "NEXT PAGE",
      "reader.switchToScroll": "Switch to Webtoon Scroll View",
      "reader.switchToPage": "Switch to Slide View",
      "search.noResults": "No results found",
      "filter.noManga": "No manga found for this filter.",
      "filter.nothingToShow": "Nothing to show yet.",

      "genre.system": "System",
      "genre.isekai": "Isekai",
      "genre.historical": "Historical",
      "genre.supernatural": "Supernatural",
    },

    km: {
      "nav.browse": "មើលកាតាឡុក",
      "nav.manhwa": "មានហ្វា",
      "nav.manga": "មង្តា",
      "nav.novel": "ប្រលោមលោក",
      "nav.history": "ប្រវត្តិអាន",
      "nav.genres": "ច្រោះប្រភេទ",
      "nav.newReleases": "ការចេញថ្មី",
      "nav.searchPlaceholder": "ស្វែងរកមង្តា...",

      "genre.action": "សកម្មភាព",
      "genre.romance": "ស្នេហា",
      "genre.fantasy": "និទានកថា",
      "genre.horror": "រន្ធត់",
      "genre.scifi": "វិទ្យាសាស្ត្រប្រឌិត",
      "genre.comedy": "កំប្លែង",
      "genre.drama": "ឌ្រាមា",
      "genre.sliceOfLife": "ផ្ទៃរយៈជីវិត",
      "genre.adventure": "ការផ្សងព្រេង",
      "genre.mystery": "អាថ៌កំបាំង",
      "genre.sports": "កីឡា",
      "genre.thriller": "រំភើប",

      "sidebar.home": "ទំព័រដើម",
      "sidebar.explore": "រុករក",
      "sidebar.library": "បណ្ណាល័យខ្ញុំ",
      "sidebar.profile": "ការកំណត់គណនី",
      "sidebar.theme": "ប្រធានបទងងឹត / ភ្លឺ",
      "sidebar.themeLightActive": "របៀបភ្លឺសកម្ម",
      "sidebar.themeDarkActive": "របៀបងងឹតសកម្ម",
      "sidebar.support": "ជំនួយ",
      "sidebar.login": "ចូល / ចុះឈ្មោះ",
      "sidebar.contact": "ទំនាក់ទំនងយើង",
      "sidebar.about": "អំពីយើង",
      "sidebar.community": "សហគមន៍",

      "home.trending": "ការអាប់ដេតពេញនិយម",
      "home.latest": "ការអាប់ដេតថ្មីបំផ្លាស់",
      "home.discover": "រុករក",
      "home.latestReleased": "ចេញថ្មីបំផ្លាស់",
      "home.latest_updates": "ការអាប់ដេតថ្មី",

      "filter.latest": "ចេញថ្មីបំផ្លាស់",
      "filter.popular": "ពេញនិយម",
      "filter.completed": "បានបញ្ចប់",
      "filter.upcoming": "នឹងមកដល់",
      "filter.search": "ស្វែងរក",
      "filter.join": "ចូលរួម",
      "filter.shounen": "ស៊ូណេន",
      "filter.shoujo": "ស៊ូជូ",
      "filter.seinen": "ស៊ីណេន",
      "filter.josei": "ជូសេអ៊ី",
      "filter.status": "ស្ថានភាព",
      "filter.ongoing": "កំពុងបន្ត",
      "filter.hiatus": "ឈប់បន្ត",
      "filter.cancelled": "បានលុបចោល",
      "filter.sort": "តម្រៀបតាម",
      "filter.relevance": "សមាសភាព",
      "filter.az": "A - Z",
      "filter.za": "Z - A",
      "filter.ongoing": "កំពុងបន្តជាមុន",
      "filter.completed": "បានបញ្ចប់ជាមុន",
      "filter.advanced-genres": "ច្រោះប្រភេទកម្រិតខ្ពស់",
      "filter.reset": "កំណត់ឡើងវិញ",
      "filter.target": "ប្រជាសាស្រ្តគោលដៅ",

      "contact.title": "ទាក់ទងមកយើងខ្ញុំ",

      "main.manhwa": "មានហ្វា",
      "main.hotupdate": "ការអាប់ដេតថ្មីៗ",

      "footer.copyright":
        "គោលដៅចុងក្រោយរបស់អ្នកសម្រាប់មង្តា, មានហ្វា, និងប្រលោមលោក។ អាន, រកឃើញ, និងតាមដានស៊េរីដែលអ្នកចូលចិត្ត។",
      "footer.quickLinks": "តំណភ្ជាប់រហ័ស",
      "footer.newReleases": "ចេញថ្មី",
      "footer.community": "សហគមន៍",
      "footer.stayUpdated": "ទទួលបានព័ត៌មានថ្មីៗ",
      "footer.text": "ទទួលបានការជូនដំណឹងអំពីការចេញថ្មី និងការអាប់ដេត។",
      "footer.join": "ចូលរួម",
      "footer.contact": "ទំនាក់ទំនង",
      "footer.aboutUs": "អំពីយើង",

      youremailPlaceholder: "អ៊ីមែលរបស់អ្នក",

      "header.new-releases": "ចេញថ្មី",
      "header.new-releases.description": "ចេញថ្មីបំផ្លាស់ដែលបានបន្ថែមទៅកាតាឡុក",
      "header.searchPlaceholder": "ស្វែងរកតាមចំណងជើង...",
      "new-releases.results-prefix": "កំពុងបង្ហាញ",
      "new-releases.results-suffix": "ចំណងជើងថ្មី",

      "name.soaphea": "ឡឹង ចន្ទ័ សោភា",
      "name.wathana": "សម សិរីវឌ្ឍនា",
      "name.somsak": "លាប សុក្រសមសក្តិ",
      "name.lida": "ចំរើន បញ្ញាលីដា",

      "bio.team": "ជួបជាមួយក្រុម",
      "bio.lida":
        "បានបង្កើតប្រព័ន្ធចូល ចុះឈ្មោះ និងកំណត់ពាក្យសម្ងាត់ឡើងវិញ។ គ្រប់គ្រងវគ្គអ្នកប្រើប្រាស់។",
      "bio.soaphea":
        "អ្នកជំនួយការ JavaScript រក្សាអ្វីៗគ្រប់យ៉ាងឱ្យរលូន និងមានអន្តរកម្ម។ ទទួលខុសត្រូវនៅ ទូទាំងគេហទំព័រ។",
      "bio.wathana":
        "ជំរុញចក្ខុវិស័យសម្រាប់ Reader's Haven ពីគំនិតរហូតដល់ការចាប់ផ្តើម។ ចូលចិត្តចំណុចប្រទាក់ស្អាត ស្បែកងងឹត និងអ្វីទាំងអស់ដែលមានគ្រោងល្អ។",
      "bio.somsak":
        "រៀបចំកាតាឡុកម៉ាំងហ្គា ហើយធានាថាចំណងជើងនីមួយៗមានប្រភេទ គម្រប និងជំពូក ត្រឹមត្រូវ។ ម៉ាំងហ្គាប្រចាំក្រុមដែលមានចំណងជើងជាង 30 ត្រូវបានអាន។",

      "tag.lida": "អ្នកអភិវឌ្ឍន៍គម្រោង",
      "tag.soaphea": "អ្នកអភិវឌ្ឍន៍ Frontend",
      "tag.wathana": "អ្នកអភិវឌ្ឍន៍គម្រោង និងអ្នកស្រាវជ្រាវ",
      "tag.somsak": "ខ្លឹមសារ និងស្រាវជ្រាវ",

      "box.misson": "បេសកកម្មរបស់យើង",
      "box.read": "ការអានគួរតែមានអារម្មណ៍ថានៅផ្ទះ",
      "box.read1":
        "យើងបានបង្កើត Reader's Haven ពីព្រោះយើងជឿថារឿងរ៉ាវល្អៗសមនឹងទទួល បានឆាកដ៏អស្ចារ្យមួយ។ គ្មានភាពរញ៉េរញ៉ៃ គ្មានការរំខាន - គ្រាន់តែអ្នក និងរឿង ប៉ុណ្ណោះ។",
      "box.number": "៥០+",
      "box.title": "ចំណងជើង",
      "box.number1": "១០ពាន់+",
      "box.title1": "អ្នកអាន",
      "box.number2": "៤",
      "box.title2": "អ្នកសុបិន",
      "box.des":
        "ក្រុមដែលមានចំណង់ចំណូលចិត្តចំនួន 4 បង្កើតបទពិសោធន៍នៃការអានរឿង Manga ចុងក្រោយ និងប្រលោមលោក — មួយជំពូកក្នុងពេលតែមួយ។",
      "box.des1": "ពួកយ់ើងជា",

      "section.dc": "អ្វីដែលយើងឈរសម្រាប់",
      "section.dc1": "អ្នកអានដំបូង",
      "section.dc2":
        "ការសម្រេចចិត្តរចនានីមួយៗត្រូវបានធ្វើឡើងដោយគិតគូរពីអ្នកអាន។ ស្អាត ងាយស្រួលរកឃើញ និងងាយស្រួលយល់។",
      "section.dc3": "ល្បឿន & ប៉ូឡូញ",
      "section.dc4":
        "ការផ្ទុកលឿន ចលនារលូន និងភីកសែល UI ល្អឥតខ្ចោះ។ យើង​មិន​បញ្ជូន​រហូត​ដល់​វា​មាន​អារម្មណ៍​ត្រឹមត្រូវ។",
      "section.dc5": "ជំរុញទឹកចិត្ត",
      "section.dc6":
        "យើងជាអ្នកគាំទ្រខ្លួនឯង។ គម្រោង​នេះ​មាន​ព្រោះ​យើង​ចង់​បាន​អ្នក​អាន​ដែល​យើង​ពិត​ជា​នឹង​ប្រើ​ជា​រៀង​រាល់​ថ្ងៃ។",
      "section.dc7": "ចាប់ផ្តើមអានថ្ងៃនេះ",
      "section.dc8":
        "ចូលរួមជាមួយអ្នកអានរាប់ពាន់នាក់ដែលកំពុងរីករាយនឹង Reader's Haver។",
      "section.dc9": "រកមើលកាតាឡុក",

      "span.home": "ត្រឡប់ទៅទំព័រដើម",
      "span.page": "ទំព័រ",
      "span.team": "ក្រុមនៅពីក្រោយវេទមន្ត",

      // Signup page  
      "sign.acc": "បង្កើតគណនី",
      "sign.join": "ចូលរួមសហគមន៍ ហើយចាប់ផ្ដើមអានថ្ងៃនេះ",
      "sign.username": "ឈ្មោះអ្នកប្រើ",
      "sign.email": "អ៊ីម៉ែល",
      "sign.phone": "លេខទូរស័ព្ទ",
      "sign.password": "ពាក្យសម្ងាត់",
      "sign.confirm": "បញ្ជាក់ពាក្យសម្ងាត់",
      "ign.confirm": "បញ្ជាក់ពាក្យសម្ងាត់",
      "sign.agree": "ខ្ញុំយល់ព្រមនឹងលក្ខខណ្ឌ និងគោលការណ៍ភាពឯកជន",
      "sign.terms": "លក្ខខណ្ឌសេវាកម្ម",
      "sign.privacy": "គោលការណ៍ភាពឯកជន",
      "sign.createacc": "បង្កើតគណនី",
      "sign.or": "ឬ",
      "sign.already": "មានគណនីរួចហើយ?",
      "sign.login": "ចូលគណនី",

      // Login page
      login: "ចូលគណនី",
      signup: "ចុះឈ្មោះ",
      logout: "ចាកចេញ",
      "sign.welcomeback": "សូមស្វាគមន៍មកវិញ",
      "sign.log": "ចូលដើម្បីបន្តការអានរបស់អ្នក",
      "sign.rememberme": "ចងចាំខ្ញុំ",
      "sign.forgotpw": "ភ្លេចពាក្យសម្ងាត់?",
      "sign.dont": "មិនទាន់មានគណនី?",
      "sign.enteremial": "បញ្ចូលអ៊ីម៉ែលដើម្បីកំណត់ពាក្យសម្ងាត់ឡើងវិញ",
      "sign.fillpw": "បំពេញអ៊ីម៉ែលរបស់អ្នក",
      "sign.resetpassword": "កំណត់ពាក្យសម្ងាត់ឡើងវិញ",
      "sign.verification": "លេខកូដផ្ទៀងផ្ទាត់",
      "sign.code": "បញ្ចូលលេខកូដ ៦ ខ្ទង់ដែលបានផ្ញើទៅអ៊ីម៉ែលរបស់អ្នក",
      "sign.code1": "បញ្ចូលលេខកូដ ៦ ខ្ទង់",
      sendcode: "ផ្ទៀងផ្ទាត់លេខកូដ",
      "sign.veritycode": "ផ្ទៀងផ្ទាត់លេខកូដ",
      "sign.changepw": "ផ្លាស់ប្ដូរពាក្យសម្ងាត់",
      "sign.newpassword": "ពាក្យសម្ងាត់ថ្មី",
      "sign.condirmnew": "បញ្ជាក់ពាក្យសម្ងាត់ថ្មី",

      // Contact page
      "contact.text":
        "មានសំណួរ មតិកែលម្អ ឬរបាយការណ៍ទេ? យើងចង់ឮពីអ្នក។ បំពេញទម្រង់បែបបទ ហើយក្រុមការងាររបស់យើងនឹងតបទៅអ្នកវិញឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។",
      "contact.address": "អាស័យដ្ឋានរបស់យើង។",
      "contact.address1":
        "ផ្ទះលេខ 160 ផ្លូវ 315 សង្កាត់បឹងកក់ 2 ខណ្ឌទួលគោក ភ្នំពេញ ១២១៥២",
      "contact.phone": "លេខទូរស័ព្ទ",
      "contact.number": "០៩៥៦០០៩១៣",
      "contact.email": "អ៊ីមែល",
      "contact.email1": "support@readershaven.com",
      "contact.suppport": "ម៉ោងគាំទ្រ",
      "contact.time": "ច័ន្ទ - សុក្រ៖ ៨ ព្រឹក - ៤ ល្ងាច (ICT)",
      "contact.followus": "គាំទ្រពួកយើង",
      "contact.msg": "ផ្ញើសារ",
      "contact.topic": "ប្រធានបទ",
      "contact.general": "ទូទៅ",
      "contact.bug": "របាយការណ៍កំហុស",
      "contact.content": "សំណូមពរបន្ថែមរឿង",
      "contact.partnership": "ភាពជាដៃគូ",
      "contact.acc": "បញ្ហាគណនី",
      "contact.name": "ឈ្មោះពេញ",
      "contact.email2": "អាសយដ្ឋានអ៊ីមែល",
      "contact.subject": "ប្រធានបទ",
      "contact.message": "សាររបស់អ្នក",
      "contact.send": "ផ្ញើសារ",
      "contact.text2": "ជាធម្មតាយើងឆ្លើយតបក្នុងរយៈពេល ២៤-៤៨ ម៉ោង។",

      // Community page
      "community.createThread": "បង្កើតប្រធានបទ",
      "community.topicPlaceholder":
        "ចំណងជើងប្រធានបទ (ឧ. Solo Leveling Ep. 14 មតិយោបល់...)",
      "community.contentPlaceholder":
        "បកស្រាយទ្រឹស្តី ការវិភាគ ឬសំណួររបស់អ្នក...",
      "community.publish": "ផ្សាយ",
      "community.hourAgo": "១ម៉ោងមុន",
      "community.theories": "ទ្រឹស្តី",
      "community.samplePostTitle":
        "The Eminence in Shadow៖ តើ Cid បានដឹងថាសម័យជំនុំជម្រះពិតប្រាកដនៅជំពូក ១៤០ ដែរឬទេ?",
      "community.samplePostBody":
        "ផ្អែកលើអន្តរកម្មចុងក្រោយរបស់គាត់ និងរបៀបដែលគាត់រំលងលំដាប់គិតក្នុងចិត្តសំខាន់ៗពីប្រលោមលោក ខ្ញុំចាប់ផ្តើមឆ្ងល់ថាគាត់កំពុងបោះបង់សកម្មភាពរបស់គាត់ ឬគ្រាន់តែរត់ដោយសំណាងសុទ្ធសាធ។",
      "community.comments": "៤៨ មតិយោបល់",
      "community.save": "រក្សាទុក",
      "community.rules": "ច្បាប់របស់ Haven",
      "community.rule1": "សុភាពរាបសារ។ រក្សាមតិកែលម្អឱ្យមានប្រយោជន៍។",
      "community.rule2":
        "ប្រើចំណងជើង <strong>[SPOILER]</strong> ច្បាស់លាស់ពេលយោងទៅជំពូកថ្មីៗ។",
      "community.trending": "ស្លាកពេញនិយម",
      "community.tagEminence": "#EminenceInShadow",
      "community.tagSolo": "#SoloLeveling",
      "community.tagNovels": "#ប្រលោមលោក",

      // Profile page
      "profile.myProfile": "ប្រវត្តិរូបរបស់ខ្ញុំ",
      "profile.premiumReader": "✦ អ្នកអានពិសេស",
      "profile.navInfo": "ព័ត៌មានប្រវត្តិរូប",
      "profile.navHistory": "ប្រវត្តិអាន",
      "profile.navSettings": "ការកំណត់",
      "profile.logOut": "ចាកចេញ",
      "profile.monthlyGoal": "គោលដៅប្រចាំខែ",
      "profile.titles": "ចំណងជើង",
      "profile.titlesRead": "ចំណងជើងបានអាន",
      "profile.sessions": "វគ្គអាន",
      "profile.dayStreak": "ថ្ងៃជាប់គ្នា 🔥",
      "profile.memberSince": "ជាសមាជិកតាំងពី",
      "profile.accountDetails": "ព័ត៌មានគណនី",
      "profile.editProfile": "កែប្រែប្រវត្តិរូប",
      "profile.username": "ឈ្មោះអ្នកប្រើ",
      "profile.emailLabel": "អ៊ីមែល",
      "profile.countryCode": "កូដប្រទេស",
      "profile.phoneLabel": "លេខទូរស័ព្ទ",
      "profile.bio": "ប្រវត្តិសង្ខេប",
      "profile.bioPlaceholder": "ប្រាប់អ្នកអានអំពីខ្លួនអ្នក...",
      "profile.favoriteGenres": "ប្រភេទចូលចិត្ត",
      "profile.saveChanges": "រក្សាទុកការផ្លាស់ប្តូរ",
      "profile.cancel": "បោះបង់",
      "profile.changePassword": "ផ្លាស់ប្ដូរពាក្យសម្ងាត់",
      "profile.currentPassword": "ពាក្យសម្ងាត់បច្ចុប្បន្ន",
      "profile.newPassword": "ពាក្យសម្ងាត់ថ្មី",
      "profile.updatePassword": "ធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់",
      "profile.readingHistory": "ប្រវត្តិអាន",
      "profile.clearAll": "លុបទាំងអស់",
      "profile.noHistory": "មិនទាន់មានប្រវត្តិអាននៅឡើយទេ។",
      "profile.browseManga": "រកមើលមង្តា →",
      "profile.preferences": "ចំណូលចិត្ត",
      "profile.darkLightMode": "របៀបងងឹត / ភ្លឺ",
      "profile.switchAppearance": "ប្តូររូបរាងគេហទំព័រ",
      "profile.chapterNotif": "ការជូនដំណឹងជំពូកថ្មី",
      "profile.chapterNotifDesc": "Alert when new chapters drop",
      "profile.autoplayCarousel": "បន្តដោយស្វ័យប្រវត្តិ",
      "profile.autoplayDesc": "ប្តូររូបភាពស្វ័យប្រវត្តិ",
      "profile.scrollMode": "របៀបរំកិលលំនាំដើម",
      "profile.scrollModeDesc": "ប្រើកម្មវិធីអានរំកិលបញ្ឈរជាលំនាំដើម",
      "profile.dangerZone": "តំបន់គ្រោះថ្នាក់",
      "profile.deleteAccount": "លុបគណនីរបស់ខ្ញុំ",

      "library.title": "បណ្ណាល័យរបស់ខ្ញុំ",
      "library.saved": "បានរក្សាទុក",
      "library.gridView": "ទិដ្ឋភាពក្រឡា",
      "library.listView": "ទិដ្ឋភាពបញ្ជី",
      "library.totalManga": "មង្តាសរុប",
      "library.currentlyReading": "កំពុងអាន",
      "library.chaptersRead": "ជំពូកដែលបានអាន",
      "library.tabAll": "ទាំងអស់",
      "library.tabReading": "កំពុងអាន",
      "library.tabPlan": "គម្រោងនឹងអាន",
      "library.tabCompleted": "បានបញ្ចប់",
      "library.tabHold": "ផ្អាកទុក",
      "library.tabDropped": "បោះបង់",
      "library.tabRereading": "កំពុងអានឡើងវិញ",
      "library.results": "លទ្ធផល",
      "library.sort": "តម្រៀប",
      "library.sortRecent": "បន្ថែមថ្មីៗ",
      "library.sortAZ": "ក → អ",
      "library.sortZA": "អ → ក",
      "library.sortProgress": "ដំណើរការ",
      "library.sortChapters": "ជំពូកដែលបានអាន",
      "library.emptyTitle": "បណ្ណាល័យរបស់អ្នកនៅទទេ",
      "library.emptyText": "រក្សាទុកមង្តាពីកាតាឡុក ហើយវានឹងបង្ហាញនៅទីនេះ។",
      "library.browseCatalog": "មើលកាតាឡុក",
      "library.continue": "បន្ត",
      "library.remove": "លុបចេញពីបណ្ណាល័យ",
      "library.chRead": "ជំពូកបានអាន",
      "library.chaptersReadCount": "ជំពូកដែលបានអាន",
      "library.outOf": "ក្នុងចំណោម",

      "library.statusReading": "កំពុងអាន",
      "library.statusPlan": "គម្រោងនឹងអាន",
      "library.statusCompleted": "បានបញ្ចប់",
      "library.statusHold": "ផ្អាកទុក",
      "library.statusDropped": "បោះបង់",
      "library.statusRereading": "កំពុងអានឡើងវិញ",

      "sidebar.browseCatalog": "មើលកាតាឡុក",
      "sidebar.genres": "ប្រភេទ",

      "hero.weeklyFeatured": "ជម្រើសពិសេសប្រចាំសប្តាហ៍",
      "hero.readNow": "អានឥឡូវនេះ",

      "detail.addToLibrary": "រក្សាទុកក្នុងបណ្ណាល័យ",
      "detail.share": "ចែករំលែក",
      "detail.addToList": "បន្ថែមទៅបញ្ជី",
      "detail.startReading": "ចាប់ផ្តើមអាន",
      "detail.tabChapters": "ជំពូក",
      "detail.tabComments": "មតិយោបល់",
      "detail.tabArt": "សិល្បៈ",
      "detail.tabRelated": "រឿងពាក់ព័ន្ធ",
      "detail.tabRecommendations": "ការណែនាំ",
      "detail.descending": "លំដាប់ចុះ",
      "detail.markAllRead": "សម្គាល់ថាបានអានទាំងអស់",
      "detail.index": "លិបិក្រម",
      "detail.noComments": "មិនទាន់មានមតិយោបល់នៅឡើយទេ។",
      "detail.firstComment": "ក្លាយជាអ្នកដំបូងក្នុងការចែករំលែកគំនិតរបស់អ្នក។",
      "detail.noArt": "មិនទាន់មានការបង្ហោះសិល្បៈនៅឡើយទេ។",
      "detail.noRelated": "រកមិនឃើញចំណងជើងពាក់ព័ន្ធឡើយ។",
      "detail.author": "អ្នកនិពន្ធ",
      "detail.artist": "អ្នកគូរ",
      "detail.demographic": "ប្រជាសាស្ត្រ",
      "detail.track": "តាមដាន",
      "detail.publication": "ការបោះពុម្ព",
      "detail.by": "ដោយ",
      "detail.noDesc": "មិនទាន់មានការពិពណ៌នាសម្រាប់រឿងនេះនៅឡើយទេ។",

      "reader.switchMode": "ប្តូររបៀបអាន",
      "reader.settings": "ការកំណត់ការអាន",
      "reader.prevCh": "ជំពូកមុន",
      "reader.nextCh": "ជំពូកបន្ទាប់",
      "reader.close": "បិទកម្មវិធីអាន",
      "reader.bgColor": "ពណ៌ផ្ទៃខាងក្រោយ",
      "reader.themeDark": "ងងឹត",
      "reader.themeGray": "ប្រផេះ",
      "reader.themeSepia": "សេពៀ",
      "reader.themeLight": "ភ្លឺ",
      "reader.maxWidth": "ទទឹងទំព័រអតិបរមា",
      "reader.widthNarrow": "ចង្អៀត",
      "reader.widthDefault": "លំនាំដើម",
      "reader.widthWide": "ទូលាយ",
      "reader.widthFull": "ពេញអេក្រង់",
      "reader.pageZoom": "ពង្រីកទំព័រ",
      "reader.prevPage": "ទំព័រមុន",
      "reader.nextPage": "ទំព័របន្ទាប់",
      "reader.switchToScroll": "ប្តូរទៅរបៀបអានបែបអូសចុះ",
      "reader.switchToPage": "ប្តូរទៅរបៀបអានទំព័រ",
      "search.noResults": "រកមិនឃើញលទ្ធផលឡើយ",
      "filter.noManga": "រកមិនឃើញមង្តាសម្រាប់តម្រងនេះទេ។",
      "filter.nothingToShow": "មិនទាន់មានអ្វីបង្ហាញនៅឡើយទេ។",

      "genre.system": "ប្រព័ន្ធ",
      "genre.isekai": "អ៊ីសេកៃ",
      "genre.historical": "ប្រវត្តិសាស្ត្រ",
      "genre.supernatural": "អរូបី",
    },
  };

  const STORAGE_KEY = "rh_lang";

  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    // Title attributes
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key]) el.setAttribute("title", dict[key]);
    });

    // Update language button label
    const langCurrent = document.getElementById("lang-current");
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    // Highlight active option in dropdown
    document.querySelectorAll(".lang-option").forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("text-accent", isActive);
      btn.classList.toggle("bg-accent/5", isActive);
    });

    document.documentElement.setAttribute("lang", lang === "km" ? "km" : "en");
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    document.dispatchEvent(new CustomEvent("rh-lang-changed", { detail: { lang } }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Apply saved language immediately on load
    applyTranslations(getCurrentLang());

    // Dropdown toggle
    const btnLang = document.getElementById("btn-lang");
    const dropdownLang = document.getElementById("dropdown-lang");

    if (btnLang && dropdownLang) {
      btnLang.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = !dropdownLang.classList.contains("invisible");

        // Close other dropdowns on the page (browse/history/genres) if present
        document.querySelectorAll('[id^="dropdown-"]').forEach((el) => {
          if (el !== dropdownLang) {
            el.classList.remove("opacity-100", "visible", "translate-y-0");
            el.classList.add("opacity-0", "invisible", "translate-y-2");
          }
        });

        if (!isOpen) {
          dropdownLang.classList.remove(
            "opacity-0",
            "invisible",
            "translate-y-2",
          );
          dropdownLang.classList.add("opacity-100", "visible", "translate-y-0");
        } else {
          dropdownLang.classList.remove(
            "opacity-100",
            "visible",
            "translate-y-0",
          );
          dropdownLang.classList.add("opacity-0", "invisible", "translate-y-2");
        }
      });

      dropdownLang.addEventListener("click", (e) => e.stopPropagation());

      document.addEventListener("click", () => {
        dropdownLang.classList.remove(
          "opacity-100",
          "visible",
          "translate-y-0",
        );
        dropdownLang.classList.add("opacity-0", "invisible", "translate-y-2");
      });
    }

    // Language option clicks
    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        if (dropdownLang) {
          dropdownLang.classList.remove(
            "opacity-100",
            "visible",
            "translate-y-0",
          );
          dropdownLang.classList.add("opacity-0", "invisible", "translate-y-2");
        }
      });
    });
  });

  function t(key) {
    const dict = translations[getCurrentLang()] || translations.en;
    return dict[key] || translations.en[key] || key;
  }

  // Expose globally in case other scripts/pages want to trigger it
  window.RH_i18n = { setLanguage, applyTranslations, getCurrentLang, t };
})();
