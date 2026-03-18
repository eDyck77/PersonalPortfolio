const allProjects = [
    {
        id: "inkling-nook",
        title: "Inkling Nook Library Database",
        shortDesc: "Comprehensive library system with MySQL backend.",
        fullDesc: `
            <div class="detail-info">
                <h3>Project Overview</h3>
                <p>
                    Inkling Nook is a comprehensive, portable library management system designed to streamline the operations of small to mid-sized book collections.
                    Developed as a JavaFX application, it provides a centralized platform for administrators to manage inventory, track member activity, and analyze library performance.
                </p>

                <h3>Core Functionalities</h3>
                <ul>
                    <li><strong>Inventory Management:</strong> Admins can seamlessly add, delete, and update book quantities. A dedicated search bar allows for quick retrieval of specific records by Title or ISBN.</li>
                    <li><strong>Customer Relations:</strong> Tracks member data, contact information, and account standing. The system uses visual indicators to identify members in good standing at a glance.</li>
                    <li><strong>Circulation Control:</strong> Facilitates the borrowing process by tracking checkout and return dates. It includes automated features such as overdue status tracking and email reminder capabilities.</li>
                    <li><strong>Data Analytics:</strong> The Statistics tab provides real-time insights using custom PieCharts and BarCharts to visualize metrics like active members and overdue ratios.</li>
                </ul>

                <h3>Technical Implementation</h3
                <ul>
                    <li><strong>Architecture:</strong> Built on OOAD (Object-Oriented Analysis and Design) principles, utilizing POJO and DAOs for clean data handling.</li>
                    <li><strong>Portability & Security:</strong> Uses File IO for portable database configurations and a .gitIgnore file to protect sensitive user information and credentials.</li>
                    <li><strong>UI/UX:</strong> Developed with a custom CSS stylesheet and ScaleTransition animations to create a modern, responsive, and engaging user experience.</li>
                    <li><strong>Resource Management:</strong> Implemented robust resource retrieval to ensure reliable image loading across different operating systems.</li>
                </ul>

                <h3>Development Challenges & Research</h3>
                <p>
                    During development, I conducted research into JavaFX charting to resolve legend mismatch issues and implemented a custom legend for the Statistics module.
                    I also addressed database table mismatches and refined the inventory search logic to ensure accurate data retrieval for the end-user.
                </p>
            </div>
        `,
        image: "Images/Inkling Nook/inklingNookLogo.png",
        images: [
            "Images/Inkling Nook/Login.gif",
            "Images/Inkling Nook/Inventory.gif",
            "Images/Inkling Nook/CustomerEdit.gif",
            "Images/Inkling Nook/reminderEmail.gif",
            "Images/Inkling Nook/Goodstanding.gif",
            "Images/Inkling Nook/statistics.png"

        ],
        github: "https://github.com/eDyck77/FinalProject",
        featured: true,
        tags: ["JavaFX", "MySQL", "Git"]
    },
    {
        id: "trivia-chase",
        title: "Trivia Chase",
        shortDesc: "Trivia application with persistent leaderboards.",
        fullDesc: `
        <div class="detail-info">
            <h3>Project Overview</h3>
            <p>
                Trivia Chase is a gamified educational application that uses a robust trivia engine. 
                Developed as a JavaFX-based desktop application, it allows users to compete across multiple categories. 
                The project focuses on complex UI animations and persistent data management to create an engaging classroom-style experience.
            </p>

            <h3>Core Functionalities</h3>
            <ul>
                <li><strong>Dynamic Category System:</strong> Users can select from six distinct categories (History, Food, Animals, Sport, Science, and Art). Each category utilizes custom File-IO to load unique question sets dynamically.</li>
                <li><strong>Competitive Leaderboards:</strong> A persistent high-score system tracks player names and performance. Data is stored and retrieved using Buffered Readers and Writers to ensure progress is saved between sessions.</li>
                <li><strong>Custom Question Types:</strong> Beyond standard multiple-choice, the system implements Matching (Drag-and-Drop), Slider-based numeric guessing, and True/False modes to vary gameplay difficulty.</li>
            </ul>

            <h3>Technical Implementation</h3>
            <ul>
                <li><strong>Architecture:</strong> Built using a modular Scene-and-Pane architecture, allowing for seamless state management between Intro, Main, and Game scenes.</li>
                <li><strong>Animation & FX:</strong> Utilizes the JavaFX Transition library (Scale, Fade, Translate, and Rotate) to create a high-energy "racing" aesthetic throughout the UI.</li>
                <li><strong>Persistent Data Management:</strong> Implemented a robust File-IO system using specific markers and delimiters to parse question data and maintain a global leaderboard file.</li>
                <li><strong>Media Integration:</strong> Features a global Media Player with constant song selection, allowing background music to persist or change across different application states via a settings menu.</li>
            </ul>

            <h3>Development Challenges & Research</h3>
            <p>
                A primary challenge involved managing JVM heap space when loading high-resolution assets simultaneously; this was resolved by optimizing image loading and scaling assets during the transition phases. 
                I also refined the "matching" logic, transitioning from a traditional drag-and-drop to a boolean-checked selection system to improve reliability across different operating systems.
            </p>
        </div>
    `,
        image: "Images/Trivia Chase/triviaLogo.png",
        images: [
            "Images/Trivia Chase/Main.png",
            "Images/Trivia Chase/Settings.png",
            "Images/Trivia Chase/Highscores.png",
            "Images/Trivia Chase/HowToPlay.png",
            "Images/Trivia Chase/Categories.png",
            "Images/Trivia Chase/Credits.gif",
            "Images/Trivia Chase/Guess.png",
            "Images/Trivia Chase/Match.png",
            "Images/Trivia Chase/TrueFalse.png",
            "Images/Trivia Chase/Correct.png",
            "Images/Trivia Chase/Incorrect.png",
        ],
        github: "", // Update with your actual repo link
        featured: true,
        tags: ["JavaFX", "File-IO", "CSS", "Git"]
    },
    {
        id: "personal-biography-v1",
        title: "Legacy Portfolio & Biography",
        shortDesc: "Multi-page semantic HTML5/CSS3 biographical website.",
        fullDesc: `
        <div class="detail-info">
            <h3>Project Overview</h3>
            <p>
                This project served as a foundational exploration of web development, focusing on semantic HTML5 structure and advanced CSS3 layout techniques. 
                It functions as a multi-page biographical site that showcases personal history, employee records, and early academic projects through a custom-coded interface.
            </p>

            <h3>Core Functionalities</h3>
            <ul>
                <li><strong>Hierarchical Navigation:</strong> Implemented a complex CSS-driven dropdown menu system that utilizes <code>hover</code> states and absolute positioning to manage project and about-me subcategories.</li>
                <li><strong>Responsive Grid Layouts:</strong> Developed a custom responsive framework using <code>flex-wrap</code> and media queries to ensure the biographical content and media galleries adapt seamlessly to mobile viewports (max-width: 600px).</li>
                <li><strong>Interactive Contact Engine:</strong> Built a styled contact form featuring custom <code>fieldset</code> layouts and transparent input fields that maintain the site's aesthetic across desktop and mobile versions.</li>
                <li><strong>Project Gallery:</strong> Created dedicated case study pages for early works, including a Gretzky interactive presentation and an RGC Group informational site.</li>
            </ul>

            <h3>Technical Implementation</h3>
            <ul>
                <li><strong>Style Architecture:</strong> Utilized a "Myers Reset" to ensure cross-browser consistency and a categorized <code>final.css</code> architecture to manage specific page logic from a single source.</li>
                <li><strong>Visual Theming:</strong> Applied a custom color palette (RGB-based) and professional typography using the Raleway font family to create a cohesive brand identity.</li>
                <li><strong>Asset Management:</strong> Integrated semantic <code>&lt;aside&gt;</code> and <code>&lt;article&gt;</code> tags to separate primary narrative text from supporting visual media like family and travel portraits.</li>
            </ul>

            <h3>Development Challenges & Research</h3>
            <p>
                A key challenge was managing the <code>z-index</code> and <code>positioning</code> of nested dropdown menus within the navigation bar to prevent content overlap. 
                Additionally, I refined the mobile user experience by creating a unique <code>mobileContact.png</code> background and adjusting fieldset padding to ensure touch-friendly input areas.
            </p>
        </div>
    `,
        image: "Images/Eric Emoji.png",
        images: [
            "Images/BioWebsite/Main.png",
            "Images/BioWebsite/Bio.png",
            "Images/BioWebsite/Dropdown.png",
            "Images/BioWebsite/Skills.png",
            "Images/BioWebsite/TriviaChase.png",
            "Images/BioWebsite/Wayne.png",
            "Images/BioWebsite/BioMini.png",
            "Images/BioWebsite/ContactForm.png"
        ],
        github: "https://github.com/eDyck77/BiographyWebsite",
        featured: false,
        tags: ["Html", "CSS"]
    }
];