/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mutum Rajesh Meitei",
  title: "Hi all, I'm Rajesh",
  subTitle: emoji(
   "A passionate student exploring digital design, FPGA development, embedded systems, and hardware security. Enthusiastic about learning and building innovative solutions using cutting-edge technologies."
  ),
  resumeLink:"https://drive.google.com/file/d/1iYqTXzpA_qf8L23EXCI250uWJ9EuAZKt/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rajesh-Mutum558",
  linkedin: "https://www.linkedin.com/in/mutum-rajesh-meitei-141217222/",
  gmail: "rajeshmutum@iisc.ac.in",
  gitlab: "",
  facebook: "https://www.facebook.com/mutumrajesh123/",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/22186251/mutum-rajesh-meitei",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MTECH STUDENT AT IISC BANGALORE, DEPARTMENT OF ELECTRONIC SYSTEMS ENGINEERING, EXPLORING FPGA, EMBEDDED SYSTEMS, AND HARDWARE SECURITY WITH A PASSION FOR INNOVATION! 🚀🔥",
  skills: [
    emoji("⚡ Proficient in C Programming, Embedded C, Python, and Verilog"),
    emoji("⚡ Expertise in Embedded Programming for microcontrollers and FPGA"),
    emoji("⚡ Hands-on experience with Tiva C Series (TM4C123G), FPGA, Raspberry Pi and ATtiny85"),
    emoji("⚡ Skilled in industry-standard tools like Cadence Virtuoso and Xilinx Vivado")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fab fa-microchip"
    },
    {
      skillName: "Cadence Virtuoso",
      fontAwesomeClassname: "fab fa-wave-square"
    },
    {
      skillName: " Digital System Design",
      fontAwesomeClassname: "fab fa-bolt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Science (IISc)",
      logo: require("./assets/images/iisc_logo.png"),
      subHeader: "Master of Technology in Electronic Systems Engineering",
      duration: "2024 – Ongoing | MTech Journey at IISc Bangalore",
      desc: "Pursuing MTech at IISc Bangalore has been an exciting and hands-on learning experience. Every course comes with practical projects, hardware experiments, and coding assignments, allowing me to apply concepts in real-world scenarios. The opportunity to work closely with cutting-edge technology makes this journey truly exhilarating!💡🔬",
      //descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Indian Institute of Technology, Madras",
      logo: require("./assets/images/iit_madras.png"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      duration: "2023 – 2024 | A Year of Growth & Exploration",
      desc: "I had the incredible opportunity to complete my final year at IIT Madras. It all began with an internship under Prof. Janakiraman, and due to my performance, I was given the chance to continue my last year there. This experience introduced me to new ideas, diverse cultures, and a completely different academic environment, enriching my learning in every way🚀🎓",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "National Institute of Technology Manipur",
      logo: require("./assets/images/nit_manipur.jpeg"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "2020 – 2023 (Engineering journey begins!)",
      desc: "BTech was an unforgettable journey where I met amazing friends who shared my mindset. I enjoyed every moment, learned invaluable knowledge, and created memories that will last a lifetime. Winning the Gold Medal in my branch was a proud milestone, making this experience even more special!🎓🏅",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Laishram Mani Memorial English Academy, Kongba Dhobi Lampak, Imphal East, Manipur",
      logo: require("./assets/images/llmea.jpeg"),
      subHeader: "Completed schooling up to 12th grade",
      duration: "2010 – 2020 | A Decade of Learning & Growth ",
      desc: "School was a turning point in my life where I met many amazing teachers who shaped my journey. Their guidance became the foundation for my passion for engineering. More than just academics, I learned the true meaning of respect and the invaluable role of teachers. Grateful and forever inspired!😊🎓",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Verilog", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "C Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern – VLSI Optimization ",
      company: "IIT, Madras",
      companylogo: require("./assets/images/iit_madras.png"),
      date: "Jun 2023 - Jul 2023 ",
      desc: "During this internship under Prof. Janakiraman, I developed a Python-based approach for VLSI gate sizing using Geometric Programming with the MOSEK solver. The focus was on calculating delay and optimizing it while considering area constraints. I analyzed circuit performance trade-offs and implemented optimization strategies to achieve efficient gate sizing.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Soft Skills Trainee",
      company: "Growth Centre",
      companylogo: require("./assets/images/growth_centre.jpeg"),
      date: "2020 - 2024 ",
      desc: "Attended multiple annual training sessions during my BTech, focusing on teamwork, effective communication, and collaboration. These sessions provided practical insights into interpersonal skills, leadership, and professional interactions, contributing to both personal and career growth."
    },
    {
      role: "Intern – Radio Transmitter Operations ",
      company: "All India Radio",
      companylogo: require("./assets/images/air.jpeg"),
      date: "Jan 2023 - Feb 2023 ",
      desc: "Explored various aspects of radio broadcasting technology, including radio transmitter operations, signal transmission, equipment handling, and maintenance procedures. Developed a understanding of the functioning and management of radio transmission systems."
    },
    {
      role: "Trainee – Mechatronics ",
      company: "SITRAIN India ",
      companylogo: require("./assets/images/mechatronics.png"),
      date: "Jan 2022 - Dec 2022",
      desc: "During this training program conducted by SITRAIN India at MIT Aurangabad, I was trained in mechatronics systems, covering electrical components (relays, three-phase systems), mechanical systems (motors, bearings, gears), pneumatics/electro-pneumatics, and PLC programming with ladder logic. Gained practical exposure to industrial automation and system integration."
    },
    {
      role: "Intern – Control & Relay Automation",
      company: "Siemens",
      companylogo: require("./assets/images/siemens.png"),
      date: "Jun 2022 - Aug 2022 ",
      desc: "During this internship in Goa, India, I explored control relay panel automation, working with high-power automation systems and wiring connections. I was involved in panel assembly, testing, and troubleshooting, gaining a comprehensive understanding of industrial automation and control systems. "
    },
    {
      role: "Trainee – Cyber Security",
      company: "NIELIT ",
      companylogo: require("./assets/images/nielit.png"),
      date: "Mar 2022 - May 2022",
      desc: "Completed a cybersecurity course, focusing on implementing security measures, analyzing vulnerabilities, and safeguarding data against threats. Explored file extraction techniques from laptops and phones for forensic analysis, enhancing my understanding of digital forensics and data security. "
    },
    {
      role: "Power Equipment Intern",
      company: "MSPDCL",
      companylogo: require("./assets/images/mspdcl.jpeg"),
      date: "Dec 2021 - Jan 2022 ",
      desc: "Worked on transformer repair and assembly, focusing on 3-phase line distribution, insulation techniques (oil and paper), and ensuring efficient transformer functionality. Engaged in fault diagnosis, maintenance, and performance optimization to enhance reliability and efficiency."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "EXCITING PROJECTS I WORKED ON DURING MY JOURNEY🔧",
  projects: [
    {
      image: require("./assets/images/risc_v_n.png"),
      projectName: "32-bit RISC-V Processor Debug Module (Ongoing)",
      projectDesc: "Developing a debug module for a 32-bit RISC-V processor on FPGA to enable efficient debugging and real-time monitoring. Implemented in Verilog with FPGA-based testing, focusing on verification and validation (V&V) techniques. Guided by Chief Research Scientist Kuruvilla Varghese.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/radix.png"),
      projectName: "16-bit Pipelined Radix-4 Booth Multiplier with Wallace Tree",
      projectDesc: "Designed and implemented a Radix-4 Booth Multiplier with Wallace Tree optimization using Cadence Virtuoso for VLSI applications. Created a custom layout and performed verification to ensure correct functionality and performance.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/probe.png"),
      projectName: "Digital Probe for High, Low, Floating, and Toggling Signals",
      projectDesc: "Developed a digital probe using ATtiny85 to detect and display signal states, including high, low, floating, and toggling, for efficient debugging and testing of electronic circuits. Implemented the functionality using Embedded C for precise signal analysis.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/present.jpg"),
      projectName: "PRESENT Encryption with SHA-256",
      projectDesc: "Implemented the PRESENT lightweight encryption algorithm integrated with SHA-256 authentication, ensuring robust security in embedded systems. The solution was designed to provide efficient encryption and authentication, utilizing FPGA for hardware implementation.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/traffic.jpg"),
      projectName: "Synchronization of Traffic Lights on Raspberry Pi using NTP Protocol",
      projectDesc: "Implemented traffic light synchronization using the Network Time Protocol (NTP) on a Raspberry Pi, ensuring precise time coordination for efficient traffic flow. The solution improves synchronization and reduces traffic congestion.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/sram.jpg"),
      projectName: "Charge Domain In-Memory Computing SRAM Accelerator",
      projectDesc: "Designed an SRAM-based accelerator for in-memory computing using analog charge-sharing for computation. An ADC is used to convert the analog data into a digital form, enhancing performance and reducing energy consumption.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/vga.jpg"),
      projectName: "VGA Module using FPGA and Raspberry Pi (Ongoing)",
      projectDesc: "Developing a VGA display system on Basys 3 FPGA, where MJPEG-compressed video is received from a Raspberry Pi via GPIO, decoded, and displayed dynamically on a VGA monitor. The project involves skills in V&V, FPGA design, and embedded C programming.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gold Medalist – Electronics & Communication Engineering",
      subtitle:
        "Awarded the Gold Medal for securing the top position in the Electronics & Communication Engineering department at National Institute of Technology Manipur in January 2024.",
      image: require("./assets/images/gold1..jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Siemens Scholarship Scholar",
      subtitle:
        "Selected as a Siemens Scholar in January 2020 for academic excellence and technical proficiency, among only 200 students from all over India.",
      image: require("./assets/images/siemens.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Delegate of Manipur – G20 Summit",
      subtitle: "Represented Manipur at the G20 Summit at IIT Indore, actively participating in policy discussions and initiatives focused on regional development, economic growth, and global collaboration. The event was associated with National Institute of Technology Manipur.",
      image: require("./assets/images/g20.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "ONGC Scholarship Scholar",
      subtitle: "The ONGC Scholarship is awarded by Oil and Natural Gas Corporation (ONGC) based on academic merit, recognizing and supporting outstanding students for their academic achievements.",
      image: require("./assets/images/ongc.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Axis Bank Fellowship",
      subtitle: "Awarded the Axis Bank Fellowship in January 2024, given to IISc students with a BTech CGPA of 8.5 or higher for academic excellence.",
      image: require("./assets/images/axis.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a passion for designing digital and embedded systems, I love to write and teach others what I have learned.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://scitechdaily.com/news/technology/",
      title: "SciTechDaily – Latest Trends in Electronics and Technology",
      description:
        "SciTechDaily provides the latest updates on science and technology, including electronics, embedded systems, and semiconductors. I share links to interesting and informative articles from SciTechDaily, helping others stay updated with the latest trends and discoveries in electronics."
    },
    {
      url: "https://blog.digitalelectronics.co.in/?m=1",
      title: "Digital Electronics Blog – Learn and Explore Electronics",
      description:
        "The Digital Electronics Blog provides valuable knowledge on cutting-edge technology, industry trends, and innovative advancements. It covers topics like emerging developments, efficient design techniques, and real-world applications. With resources for learning and professional growth, it is a great platform for enthusiasts and experts alike. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "with All India Radio, Akashvani Imphal – Visited to read out on semiconductor topics."
  ),

  talks: [
    {
      title: "Broadcasting & Recognition",
      subtitle: "Semiconductor Concepts",
      slides_url: "https://youtu.be/HdXp159X3Vk?si=PmEqbUGvzUG4xkTX",
      event_url: "https://www.facebook.com/100063563571834/posts/pfbid0snVBkbLXR2MH4r6Zr7gKPKSzSqq1SKZ3GQFhVoHwtcgNGfr8DzQdjqNnj9dX7Ec8l/?app=fbl"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const achievementsSection = {
  title: emoji("Social Responsibility 🌱"),
  subtitle:
    "Driven by a deep sense of purpose, dedicated to igniting hope, fostering growth, and weaving a tapestry of kindness that transcends boundaries. Each effort aims to uplift, empower, and create ripples of lasting change in the world.",

  achievementssCards: [
    {
      title: "Science for Rural India (SFRI) - Social Services",
      subtitle:
        "Science for Rural India (SFRI) works to connect cutting-edge research with rural communities by sparking scientific curiosity in students through hands-on, observation-based learning. The initiative focuses on bridging the gap between rural areas and leading researchers, promoting education, and fostering innovation in underdeveloped regions. Through outreach initiatives, SFRI engages students and local populations, empowering them with knowledge and tools to address local challenges and encourage scientific exploration for sustainable development.",
      image: require("./assets/images/sfri.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IIT For Villages (IViL-IITM) - Social Services",
      subtitle:
        "IIT For Villages (IViL-IITM) is committed to supporting rural and remote communities by providing technical education, distributing essential products, and collaborating with NGOs to promote local development. Through outreach programs, IViL aims to bridge the gap between urban and rural areas, equipping underserved populations with the skills, resources, and knowledge needed for sustainable growth and improved living standards. The initiative focuses on making a lasting positive impact by addressing key challenges in education, infrastructure, and access to essential services.",
      image: require("./assets/images/ivil_logo1.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "NITIN IGNITRONIX CLUB - Education",
      subtitle: "As an administrator of the NITIN IGNITRONIX CLUB, I led a group dedicated to hands-on learning in the field of electronics. The club focused on hardware assembly, practical electronics projects, and the creation of functional devices, providing members with real-world experience and skills. Through collaborative projects, the club aimed to enhance understanding of electronics and inspire innovation among students, equipping them with the knowledge to excel in the field.",
      image: require("./assets/images/ignitronix.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Summer 21 Club - Volunteering",
      subtitle: "As a member of the Public Relations team of Summer 21 Club, I contribute to a club focused on helping members in various aspects of life, including personality development, education, socialization, entertainment, psychological support, and financial assistance. The club's motto is to expand the definition of HELP, emphasizing support within the group rather than external fundraising. We prioritize empowering members and creating a supportive community where everyone can grow together, with no distinctions based on caste, creed, religion, or color.",
      image: require("./assets/images/summer21.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Room55 Lab - Chief Hardware Officer (CHO)",
      subtitle: "As the Chief Hardware Officer (CHO) at Room55 Lab, I lead the development of innovative hardware solutions that complement our cutting-edge digital products. Our team is dedicated to creating technology that inspires, delivering seamless user experiences and robust systems. By blending creativity, expertise, and a drive for excellence, we push the boundaries of what’s possible, partnering with visionaries to bring transformative ideas to life.",
      image: require("./assets/images/room55.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// portfolio.js (or appropriate file)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  Resume:["https://drive.google.com/file/d/1iYqTXzpA_qf8L23EXCI250uWJ9EuAZKt/view?usp=drive_link"],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7085602923",
  email_address: "rajeshmutum@iisc.ac.in",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  achievementsSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
