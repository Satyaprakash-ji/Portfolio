// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import farthinkerLogo from './assets/company_logo/farthinker_logo.jpg';

// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu_logo.png';
import mgkvpLogo from './assets/education_logo/mgkvp_logo.png';

// Project Section Logo's
import gameShopLogo from './assets/work_logo/game_shop.png';
import wikiWatch from './assets/work_logo/wiki_watch.png';
import freshMeal from './assets/work_logo/fresh_meal.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: farthinkerLogo,
      role: "Web Developer",
      company: "Farthinkers",
      date: "December 2024 - April 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
      date: "Sep 2022 - Aug 2024",
      grade: "7.77 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. During my time at AKTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Dr. A.P.J. Abdul Kalam Technical University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: mgkvpLogo,
      school: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
      date: "Jul 2017 - Oct 2020",
      grade: "66.33%",
      desc: "I completed my Bachelor's degree in Computer Application (BCA) from Mahatma Gandhi Kashi Vidyapith, Varanasi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Mahatma Gandhi Kashi Vidyapith allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BSC (BCA)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Game Shop",
      description:
        "Developed a full-featured online game shop using React, allowing users to securely register and log in with JWT authentication. The application includes over five interactive pages such as Home, Category, Cart, Wishlist, and Checkout, providing a complete e-commerce experience. Implemented React hooks like useReducer and useContext to efficiently manage global and local state.",
      image: gameShopLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript", "JWT"],
      github: "https://github.com/Satyaprakash-ji/Game-Shop",
      webapp: "https://gamer-garage.netlify.app/",
    },
    {
      id: 1,
      title: "Wikiwatch",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: wikiWatch,
      tags: ["React JS", "Redux", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyaprakash-ji/Wikiwatch",
      webapp: "https://wikiwatch.netlify.app/",
    },
    {
      id: 2,
      title: "FreshMeal",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: freshMeal,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyaprakash-ji/FreshMeal",
      webapp: "https://fresshmeal.netlify.app/",
    },
  ];  