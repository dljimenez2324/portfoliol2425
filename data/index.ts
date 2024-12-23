export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  export const gridItems = [
    {
      id: 1,
      title: "Using Robotics to Teach Code",
      description: "Enhancing client communication with AI-driven chat automation.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/roboticsB.svg",
      spareImg: "",
    },
    
    {
      id: 2,
      title: "Ever learning student",
      description: "From researcher, to teacher, to software dev I'm eager to keep learning",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Current Stack",
      description: "Improving code quality using AI-based suggestions and analysis.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Interactive Educator for SUSD",
      description: "Edutainment is important with todays youth. To compete with technology one must use technology to show students they have the ability to create instead of consuming. To that end, my students learn physical computing so they have instant feedback with their code, robots and 3d models!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Backend & Frontend",
      description: "Having used both to create projects needed by various clients, I'm sure to produce what you need.  See below for some samples of backend and frontend work",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Contact",
      description: "Email me or download my resume",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Game Search App",
      des: "Search games from almost any platform, genre or name and display their details with a description, video, and screenshots",
      img: "/p1aa.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg","/chakraUi.svg"],
      link: "https://reactgameapp.vercel.app/",
    },
    {
      id: 2,
      title: "Rough Weather App",
      des: "The beginnings of a simple weather app using API calls to openweathermap.org",
      img: "/weatherapp.svg",
      iconLists: ["/html.svg", "/css.svg", "/vite.svg", "/boot.svg"],
      link: "https://weather-app-nine-alpha-71.vercel.app/",
    },
    {
      id: 3,
      title: "BadGuyBarber API",
      des: "An API webapp deployed to Azure and its endpoints can be used to store and get data for booking barber services",
      img: "/GABI.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://bit.ly/BadGuyBarberAPI",
    },
    // {
    //   id: 4,
    //   title: "3D Animated E-Commerce Site",
    //   des: "A unique e-commerce experience featuring interactive 3D product displays and smooth animations.",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "https://github.com/yourgithublink",
    // },
    {
      id: 5,
      title: "Local Business Website Redevelopment",
      des: "Outdoor Sportsman website modified to have an updated appeal",
      img: "/p5.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://business-redevelopment-2p0mgs3q6.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with {your name here} was transformative for our business. His creativity and technical expertise allowed us to launch a stunning platform on time and beyond expectations.",
      name: "Emily Carter",
      title: "CEO of Some company",
    },
    {
      quote:
        "{your name here} ability to translate complex requirements into user-friendly designs is unmatched. We achieved a 200% increase in user engagement after our project launch.",
      name: "John Thompson",
      title: "CTO of Some company"
    },
    {
      quote:
        "{your name here} brought fresh ideas and precise execution to our platform redesign. He was professional, proactive, and always delivered high-quality work on time.",
      name: "Sarah Lee",
      title: "Product Manager at Some company",
    },
    {
      quote:
        "{your name here} attention to detail and passion for excellence stood out during our collaboration. Our website now reflects our brand perfectly, thanks to his contributions.",
      name: "Marcus Allen",
      title: "Founder of Some company",
    },
    {
      quote:
        "{your name here} is a rare talent. His understanding of both design and development helped us create a seamless, visually appealing, and performant application.",
      name: "Rachel Green",
      title: "Director of Some company",
    },
  ];
  
  
  export const companies = [
    {
      id: 1,
      name: "Some company",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Some company",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Some company",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Some company",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "Some company",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https:// ....",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https:// ....",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https:// ....",
    },
  ];