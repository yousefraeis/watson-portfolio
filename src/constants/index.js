import {
    flutter,
    redux,
    sass,
    about01,
    about02,
    about03,
    about04,
    css,
    figma,
    git,
    graphql,
    html,
    javascript,
    mu5,
    node,
    python,
    react,
    vue,
    typescript,
    asus,
    spotify,
    skype,
    amazon,
    adidas,
    alicesmith,
    johndoe,
    saraconnor,
    newbalance,
} from '../assets';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

// Social Media Links
export const socialMediaLinks = [
    {
        icon: BsTwitter,
        href: 'https://twitter.com/yourusername',
        name: 'Twitter',
    },
    {
        icon: BsInstagram,
        href: 'https://instagram.com/yourusername',
        name: 'Instagram',
    },
    {
        icon: FaFacebookF,
        href: 'https://facebook.com/yourusername',
        name: 'Facebook',
    },
];

// Navigation Items
export const navigationItems = [
    {
        id: '0',
        title: 'Home',
        url: '#home',
    },
    {
        id: '1',
        title: 'About',
        url: '#about',
    },
    {
        id: '2',
        title: 'Work',
        url: '#work',
    },
    {
        id: '3',
        title: 'Skills',
        url: '#skills',
    },
    {
        id: '4',
        title: 'Testimonial',
        url: '#testimonial',
    },
    {
        id: '5',
        title: 'Contact',
        url: '#contact',
    },
];

// Skill Circle Components
export const skillCircleComponents = [flutter, redux, sass];

// About Me Sections
export const aboutMeSections = [
    {
        url: about01,
        title: 'Web Designer',
        description:
            "I'm a web designer passionate about creating beautiful and functional web applications.",
    },
    {
        url: about02,
        title: 'React Native Developer',
        description:
            "I'm a React Native developer passionate about building beautiful and functional mobile applications.",
    },
    {
        url: about03,
        title: 'Backend Developer',
        description:
            "I'm a backend developer passionate about building functional applications.",
    },
    {
        url: about04,
        title: 'Frontend Developer',
        description:
            "I'm a frontend developer passionate about building beautiful web applications.",
    },
];

// Work Filter Categories
export const workFilterCategories = [
    'UI/UX',
    'Web App',
    'Mobile App',
    'React JS',
    'All',
];

// Work Projects
export const workProjects = [
    {
        url: about01,
        category: 'Web App',
        title: 'Web3.0 Project',
        description: 'A web 3.0 app built with React JS & Solidity.',
        tags: ['Web App'],
        projectLink: 'link_to_project_1',
        codeLink: 'link_to_code_1',
    },
    {
        url: about02,
        category: 'UI/UX',
        title: 'Blog Website',
        description: 'A blog website built with React JS.',
        tags: ['UI/UX'],
        projectLink: 'link_to_project_2',
        codeLink: 'link_to_code_2',
    },
    {
        url: about03,
        category: 'Web App',
        title: 'MERN Memories',
        description: 'A MERN app built with React JS & MongoDB.',
        tags: ['Web App'],
        projectLink: 'link_to_project_3',
        codeLink: 'link_to_code_3',
    },
    {
        url: about04,
        category: 'UI/UX',
        title: 'Modern UI/UX Website',
        description: 'A modern UI/UX website for a startup company.',
        tags: ['UI/UX'],
        projectLink: 'link_to_project_4',
        codeLink: 'link_to_code_4',
    },
    {
        url: about02,
        category: 'Mobile App',
        title: 'Ewalle Wallet App',
        description: 'Ewalle wallet app built with React Native.',
        tags: ['Mobile App'],
        projectLink: 'link_to_project_5',
        codeLink: 'link_to_code_5',
    },
    {
        url: about01,
        category: 'Web App',
        title: 'Scheme Website',
        description: 'Beautiful Pinterest-like website using React JS.',
        tags: ['Web App'],
        projectLink: 'link_to_project_7',
        codeLink: 'link_to_code_7',
    },
    {
        url: about03,
        category: 'Web App',
        title: 'Starbucks Clone',
        description: 'A Starbucks clone built with React JS.',
        tags: ['Web App'],
        projectLink: 'link_to_project_8',
        codeLink: 'link_to_code_8',
    },
    {
        url: about04,
        category: 'Mobile App',
        title: 'Community App',
        description: 'A community app built with React Native.',
        tags: ['Mobile App'],
        projectLink: 'link_to_project_9',
        codeLink: 'link_to_code_9',
    },
    {
        url: about01,
        category: 'UI/UX',
        title: 'Sweet Shop',
        description: 'An E-commerce app with beautiful UI/UX.',
        tags: ['UI/UX'],
        projectLink: 'link_to_project_10',
        codeLink: 'link_to_code_10',
    },
];

// Skills List
export const skillsList = [
    {
        iconUrl: flutter,
        backgroundColor: '#ffede6',
        name: 'Flutter',
    },
    {
        iconUrl: mu5,
        backgroundColor: '#ffede6',
        name: 'Material UI',
    },
    {
        iconUrl: redux,
        backgroundColor: '#d9b3ff',
        name: 'Redux',
    },
    {
        iconUrl: html,
        backgroundColor: '#ffede6',
        name: 'HTML5',
    },
    {
        iconUrl: vue,
        backgroundColor: '#ffede6',
        name: 'Vue.js',
    },
    {
        iconUrl: python,
        backgroundColor: '#ffede6',
        name: 'Python',
    },
    {
        iconUrl: sass,
        backgroundColor: '#ecc6d9',
        name: 'Sass',
    },
    {
        iconUrl: typescript,
        backgroundColor: '#ffede6',
        name: 'TypeScript',
    },
    {
        iconUrl: node,
        backgroundColor: '#ccffeb',
        name: 'Node.js',
    },
    {
        iconUrl: react,
        backgroundColor: '#ccf5ff',
        name: 'React.js',
    },
    {
        iconUrl: css,
        backgroundColor: '#b3c6ff',
        name: 'CSS3',
    },
    {
        iconUrl: figma,
        backgroundColor: '#ffede6',
        name: 'Figma',
    },
    {
        iconUrl: graphql,
        backgroundColor: '#ccf2ff',
        name: 'GraphQL',
    },
    {
        iconUrl: javascript,
        backgroundColor: '#ffffcc',
        name: 'JavaScript',
    },
    {
        iconUrl: git,
        backgroundColor: '#ffede6',
        name: 'Git',
    },
];

// Work Experience List
export const workExperienceList = [
    {
        year: '2022',
        roles: [
            {
                position: 'Senior Product Designer',
                company: 'Amazon Inc.',
                description:
                    'Designed innovative product solutions and user experiences.',
            },
        ],
    },
    {
        year: '2021',
        roles: [
            {
                position: 'Senior WP Frontend Developer',
                company: 'ENVATO',
                description:
                    'Developed and maintained WordPress themes and plugins.',
            },
            {
                position: 'iOS Developer',
                company: 'Zara',
                description:
                    'Worked on iOS applications to enhance customer engagement.',
            },
            {
                position: 'Intern Frontend Developer',
                company: 'Apple',
                description:
                    'Assisted in frontend development tasks and gained valuable experience.',
            },
        ],
    },
    {
        year: '2020',
        roles: [
            {
                position: 'UI/UX Web Designer',
                company: 'Google',
                description:
                    'Designed user interfaces and improved user experience for web applications.',
            },
        ],
    },
];

// Testimonials List
export const testimonialsList = [
    {
        imgUrl: alicesmith,
        name: 'Alice Smith',
        feedback:
            'This is an amazing experience; I highly recommend this product!',
        company: 'Tech Solutions',
    },
    {
        imgUrl: johndoe,
        name: 'John Doe',
        feedback: 'Excellent product and very user-friendly.',
        company: 'Innovate Inc.',
    },
    {
        imgUrl: saraconnor,
        name: 'Sara Connor',
        feedback: 'Great customer service and an overall wonderful experience.',
        company: 'Future Tech',
    },
];

// Brand Logos List
export const brandLogos = [
    {
        name: 'Amazon',
        logoUrl: amazon,
    },
    {
        name: 'New Balance',
        logoUrl: newbalance,
    },
    {
        name: 'Skype',
        logoUrl: skype,
    },
    {
        name: 'Spotify',
        logoUrl: spotify,
    },
    {
        name: 'Adidas',
        logoUrl: adidas,
    },
    {
        name: 'Asus',
        logoUrl: asus,
    },
];
