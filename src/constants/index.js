export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Lingo For Life - AI Language Learning Platform",
    desc: "Lingo For Life is a full-stack AI-driven web application that revolutionizes language learning through cutting-edge AI technology, enhancing users' language acquisition experience.",
    subdesc:
      "Built using Python, React, Django, Tailwind CSS, SQLite, and integrated with OpenAI and Google Vision API, Lingo For Life provides users with grammar analysis, feedback, and progress tracking.",
    href: "https://github.com/NoeljToms/LingoForLife",
    texture: "/textures/project/LingoForLife.mp4",
    logo: "/assets/project-logos/LingoForLife.webp",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/language-logos/python.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/language-logos/react.svg",
      },
      {
        id: 3,
        name: "Django",
        path: "/assets/language-logos/django.png",
      },
      {
        id: 4,
        name: "OpenAI API",
        path: "/assets/language-logos/openai.svg",
      },
      {
        id: 5,
        name: "Google Vision",
        path: "/assets/language-logos/gvision.png",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/language-logos/tailwindcss.png",
      },
    ],
  },
  {
    title: "Student Tracker - Fullstack Web Application",
    desc: "Student Tracker is a fullstack web application developed for local tutors to manage students and associated finances. The app enables efficient student management through a user-friendly interface.",
    subdesc:
      "Built using TypeScript, MERN Stack (MongoDB, Express, React, Node.js), and TailwindCSS, Student Tracker ensures mobile responsiveness and scalability.",
    href: "https://github.com/NoeljToms/StudentTracker",
    texture: "/textures/project/StudentTracker.mp4",
    logo: "/assets/project-logos/StudentTracker.webp",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/language-logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/language-logos/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/language-logos/typescript.png",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/language-logos/nodejs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/language-logos/mongodb.png",
      },
    ],
  },
  {
    title: "TubeStats - YouTube Channel Statistics",
    desc: "TubeStats is a website that allows users to view and save YouTube channel statistics using the YouTube API. It provides details like total views, subscribers, videos, and more, for any channel.",
    subdesc:
      "Developed using Python, Django, and JavaScript for asynchronous functions, TubeStats offers a minimalistic design similar to YouTube's theme, with features to compare channels and create watchlists.",
    href: "https://github.com/NoeljToms/TubeStats",
    texture: "/textures/project/TubeStats.mp4",
    logo: "/assets/project-logos/TubeStats.webp",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/language-logos/python.png",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/language-logos/django.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/language-logos/javascript.png",
      },
      {
        id: 4,
        name: "YouTube API",
        path: "/assets/language-logos/youtube.png",
      },
    ],
  },
  {
    title: "Smusic-DL - Spotify Music Downloader",
    desc: "Smusic-DL is a Spotify music downloader that allows users to download entire playlists by scraping song links and converting them into YouTube download links.",
    subdesc:
      "Built using Python, Spotify API, and PyTube, Smusic-DL efficiently downloads Spotify playlists by converting them into YouTube Music and then downloads, automating the process for easy offline access.",
    href: "https://github.com/NoeljToms/Spotipy",
    texture: "/textures/project/SpotifyMusicDownloader.mp4",
    logo: "/assets/project-logos/Smusic.webp",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/language-logos/python.png",
      },
      {
        id: 2,
        name: "Spotify API",
        path: "/assets/language-logos/spotify.png",
      },
      {
        id: 3,
        name: "PyTube",
        path: "/assets/language-logos/youtube.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "BoundaryAi",
    pos: "Software Developer (Fullstack)",
    duration: "May 2024 - Present",
    title:
      "Developed fullstack solutions using Flask, Postgres, React, and implemented key features like survey tools, super-admin dashboard, and JWT-based authentication. Optimized performance, fixed critical bugs, and ensured secure API interactions.",
    icon: "/assets/experience-logos/boundaryai.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "MCSS",
    pos: "Fullstack Developer",
    duration: "Sept 2023 - April 2024",
    title:
      "Led the design and development of a new website for the 2024 DeerHacks hackathon using React, Next.js, and JavaScript, attracting 2000 more participants compared to the previous year. Utilized Agile methodologies to enhance the functionality and user experience of the existing club website. Improved frontend performance by 20% using React Memo and lazy image loading.",
    icon: "/assets/experience-logos/mcss.svg",
    animation: "salute",
  },
  {
    id: 3,
    name: "Sun Life",
    pos: "Data Analyst",
    duration: "May 2022 - Aug 2022",
    title:
      "Automated data collection, transformation, and storage processes using Python and Dagster. Improved data pipeline efficiency by 50% and handled API integrations with Tableau and Wrike, storing data in SQL Server.",
    icon: "/assets/experience-logos/sunlife.png",
    animation: "clapping",
  },
];

