
import {
    sl,
    agrointel,
    koiner,
    io,
    et,
    uofo,
    express,
    rest,
    postgresql,
    python,
    c,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SQL Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Rest APIs",
      icon: rest,
    },
    {
      name: "Express.js",
      icon: express,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Extend Technosoft",
      icon: et,
      iconBg: "#383E56",
      date: "June 2021 - August 2021",
      points: [
        "Worked with senior Web developer and SQL developer on open projects.",
        "Examined and studied how to operate e-commerce sites using the front-end technologies of HTML, CSS, and JavaScript and the back-end technology of Node.js with a non-relational database MongoDB.",
        "Conducted weekly scans for broken links and errors, maintaining a 99.9% error-free website with minimal user disruptions.",
        "Collaboration with network administrators and software developers was seamless, resulting in the successful integration and deployment of the web application within the time limit specified.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "ImportOps",
      icon: io,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - August 2022",
      points: [
        "Developed and implemented data visualization dashboards using tools like Tableau and Python, which increased stakeholder access to key insights by 40%.",
        "Possess comprehensive knowledge of data analytics theory, including expertise in statistical analysis, as well as both quantitative and qualitative modelling, demonstrated through the execution of exploratory data analysis (EDA) leading to significant process efficiency improvements.",
        "Automated data collection and reporting processes using SQL and Python, reducing manual effort by 50% and ensuring timely delivery of insights.",
        "Collaborated with senior data analysts to optimize data flow and ensured seamless integration of analytical dashboards, improving data accessibility and user experience by 20%.",
      ],
    },
    {
      title: "Graduate Researcher",
      company_name: "University of Ottawa",
      icon: uofo,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Developed a comprehensive understanding and analysed existing security vulnerabilities and threats within MQTT-SN systems.",
        "Assessed the effectiveness of current security measures and recommended strategic enhancements for robust protection.",
        "Proposed innovative research directions to address emerging security challenges in MQTT-SN, contributing to the field's advancement.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Koiners",
      description:
        "Developed a Web3 decentralized application on the Internet Computer blockchain using Motoko for backend smart contracts and React, HTML, and CSS for a responsive frontend interface. Implemented a custom token system (Koiners) with a faucet feature granting 10,000 tokens to new users via Internet Identity, and secure token transfer functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
        {
          name: "Web3",
          color: "pink-text-gradient",
        },
      ],
      image: koiner,
      source_code_link: "https://github.com/KunalBhatnagar/Koin-Token",
    },
    {
      name: "Spot Locater",
      description:
        "Engineered a React-based web application that fetches and displays tourist information and city images using OpenTripMap and Unsplash REST APIs. Leveraged advanced JavaScript fundamentals to create high-performance applications.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: sl,
      source_code_link: "https://github.com/KunalBhatnagar/Tourist-spots",
    },
    {
      name: "AgroIntel",
      description:
        "Successfully built a responsive platform using Machine Learning techniques for recommending crops that can give maximum yield in a season given the environmental conditions of the land utilising the Random Forest Classifier using TensorFlow,",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "pyhton",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: agrointel,
      source_code_link: "https://github.com/KunalBhatnagar/AgroIntel",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };
  