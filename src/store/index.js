import { createStore } from 'vuex'

export default createStore({
  state: {
    techSkills: [
      'C# .NET',
      'Java',
      'SQL',
      'JavaScript / Vue.js',
      'Tailwind CSS',
      'Bootstrap',
      'Object-Oriented Design',
      'Cloud (Azure)',
      'CI/CD tool sets (GIT, Azure, DevOps',
      'Salesforce Development',
    ],
    profSkills: [
      'Effective Communication',
      'Team Player',
      'Strong Problem Solver',
      'Good Time Management',
    ],
    education: {
      cert: 'Software Development',
      date: 'April 2022',
      school: 'We Can Code IT',
      location: 'Cleveland, OH',
    },
    interests: [
      'Photography',
      'Creating w/3D Printer',
      'Building PCs',
      'Reading Fantasy Novels',
      'Honda Grom Riding',
      'Exploring New Places',
    ],
    projects: {
      portfolio: {
        title: 'Madison Mitchell Portfolio Website',
        paragraph: [
          'Hope you\'re enjoying it thus far!'
        ],
        date: 'June 2023',
        url: 'http://madison-mitchell.github.io',
      },
      ohioansCare: {
        title: 'Ohioans Care',
        paragraph: [
          'Ohioans Care is a comprehensive platform that aims to provide integrated support for all Ohioans, addressing the challenges they face in accessing essential resources and information. It offers a centralized space for users to search and suggest local services, as well as engage with their community through discussions and coordination efforts.',
        ],
        date: 'April 2022',
        url: 'https://github.com/madison-mitchell/ohioans-care',
      },
      mysteryEducator: {
        title: 'Mystery Educator',
        paragraph: [
          'JAC Enterprises\' Mystery Educator is a captivating educational app designed for children aged 6 to 13. It offers an interactive and immersive experience, introducing kids to various areas of interest such as science, art, and history, aligning with the diverse adventures.'
        ],
        date: 'March 2022',
        url: 'https://github.com/madison-mitchell/mystery-educator',
      },
      donutClicker: {
        title: 'Donut Clicker',
        paragraph: [
          'In Donut Clicker, you strive to gather as many donuts as possible by clicking on them repeatedly. Use the earned donuts to unlock upgrades, automate production, and expand your donut empire in this addictive and rewarding incremental game.'
        ],
        date: 'February 2022',
        url: 'https://github.com/madison-mitchell/Donut-Maker',
      },
      islandHopping: {
        title: 'Island Hopping Adventures!',
        paragraph: [
          'JAC Enterprises offers exciting and educational adventures, allowing you to explore Earth\'s diverse ecosystems and terrains while promoting self-discovery. With their motto "Vincit Qui Se Vincit" - "He/she conquers who conquers him/herself" - they empower you through thrilling experiences like Spelunking!, EYA! bka Experience Your Aquarium!, and Just Trek adventures.'
        ],
        date: 'January 2022',
        url: 'https://github.com/madison-mitchell/JAC-Island-Hopping-Adventures',
      }
    },
    workExp: {
      progressive: {
        name: 'Progressive',
        dates: 'May 2022 - Present',
        jobTitle: 'IT Apps Programmer',
        location: 'Hybrid | Mayfield Village',
        bullets: [
          'Administer and maintain the Salesforce Org, ensuring its optimal performance and stability',
          'Perform Salesforce development tasks, including customization, configuration, and coding, to support business requirements',
          'Collaborate with cross-functional teams to gather and analyze project requirements for Salesforce implementation',
          'Assist in the creation and management of Salesforce projects, ensuring alignment with business goals and best practices',
          'Stay up-to-date with Salesforce updates, features, and industry trends to recommend improvements and drive innovation within the Salesforce ecosystem',
        ]
      },
      apple: {
        name: 'Apple',
        dates: 'July 2014 - May 2022',
        jobTitle: 'Team Manager Apprentice',
        location: 'Remote',
        bullets: [
          'Able to multitask within 5+ applications/systems, while communicating with co-workers and 3+ customers at once',
          'Able to analyze and resolve a variety of complex technical issues',
          'Excellent, effective communication skills using written and verbal skills',
          'Strong time management skills with the ability to work on multiple projects on a deadline',
          'Able to adopt to different communication styles',
          'Average 92% Customer Satisfaction Score, 10% above the role average',
          'Supports 10 Team Leads responsible for 35+ Advisors each with the transition to remote Customer Support from Retail',
        ]
      },
      bestBuy: {
        name: 'Best Buy',
        dates: 'February 2012 - July 2014',
        jobTitle: 'Sales Lead | Apple Expert',
        location: 'North Canton, OH',
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
