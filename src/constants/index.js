import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    java,
    springboot,
    git,
    sql,
    BharatIntern,
    OasisInfobyte,
    VarconsTechnology,
    Weather,
    Student,
    Portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },

    {
      title: "Frontend Developer",
      icon: backend,
    },

    {
      title: "React Native Developer",
      icon: mobile,
    },
   
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "BharatIntern",
      icon: BharatIntern,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using Html, Css, javascript and other related technologies.",
        "Created a website using CSS, HTML, JAVASCRIPT to convert temperature form Celsius to Fahrenheit and etc.",
        "Built a website having similar homepage that of Netflix using HTML and CSS.",
       
      ],
    },
    {
      title: "Web Developer And Designing Intern",
      company_name: "Oasis Infobyte",
      icon: OasisInfobyte,
      iconBg: "#E6DEDD",
      date: "September 2023 - October 2023",
      points: [
        "Developing and maintaining web applications using Javascript and other related technologies.",
        " Created website like To-Do-List, Portfolio, Instagram Clone using HTML,CSS, JAVASCRIPT.",
        "In this Internship I had level up my skills.",
       
      ],
    },
    {
      title: "Embedded System",
      company_name: "Varcons Technology",
      icon: VarconsTechnology,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        " In this Internship, I worked in the team of 2 members on a project titled ”Smart Parking System” using IOT.",
       "Through this project I had deep dive in the field of Embedded System.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather Application WebApp",
      description:
        "Developed an application using HTML, CSS and JavaScript to get weather details of the specific city. The application displays real-time weather information, including temperature, humidity etc. Used city name as input from the user and create a HTTP request and send it to Openweathermap.org API to get back the details in the form of a JSON Response.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "API Key",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Weather,
     source_code_link: "https://github.com/Arushi-Gupta123/Weather-Forecasting-Application.git",
    },
    {
      name: "Student Management System",
      description:
        " Developed a ’Student Management System’ which performs CRUD operation on students. It can create, update and delete students data. The system is built using Java and Spring Boot, ensuring a robust and scalable backend. Used MySQL database to manage the data  and employed MVC architecture to keep the application modular and maintainable",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "spring boot",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: Student,
     // source_code_link: "https://github.com/",
    },
    {
      name: "My Portfolio",
      description:
        " Built an impressive and responsive Portfolio. It includes sections for detailed project, showcasing the technologies. The portfolio features a clean and modern design that adapts seamlessly across various devices, ensuring an optimal user experience. Also utilized components libraries, CSS Media Queries for styled components and interactive elements, such as hover and smooth scrolling,and also enhance navigation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },

        {
          name: "bootstrap",
          color: "white-text-gradient",
        }
      ],
      image: Portfolio,
     source_code_link: "https://arushig-portfolio.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };