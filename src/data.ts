import { SkillCategory, Project, EducationItem, Achievement, Interest } from './types';

export const personalInfo = {
  name: 'Aditi Aishwarya',
  title: 'Aspiring Jack of all trades & Web Developer',
  subtitle: 'Computer Science Student',
  email: 'aditiaishwarya003@gmail.com',
  github: 'https://github.com/aditiaishwarya',
  linkedin: 'https://www.linkedin.com/in/aditi-aishwarya-184640336/',
  isFuture: false,
  location: 'India',
  bio: 'I am a passionate Computer Science student with a strong interest in Web Development, Software Engineering, and Core Problem Solving. Equipped with a solid foundation in algorithms and modern web architectures, I thrive on writing clean, accessible code to build applications that solve practical issues.',
  aboutDetails: [
    'Enrolled in a Bachelor of Technology program in Computer Science, dedicating active study to data structures, software designs, and database performance optimization.',
    'Constantly exploring the modern web ecosystem, specialized in React.js and responsive, user-centric layout models.',
    'An enthusiastic problem-solver on LeetCode and other competitive programming environments, sharpening algorithmic thinking to approach scalable computing.',
    'A growth mindset believer, continually upgrading skillset through hands-on hackathons, intensive web projects, and community technology forums.'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', level: 85, iconName: 'Code2' },
      { name: 'JavaScript', level: 90, iconName: 'FileJson' },
      { name: 'HTML5', level: 95, iconName: 'FileCode' },
      { name: 'CSS3', level: 92, iconName: 'Palette' },
      { name: 'Python', level: 92, iconName: 'Code2' },
      { name: 'Java', level: 92, iconName: 'Coffee' },
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 88, iconName: 'Atom' },
      { name: 'Responsive Web Design', level: 95, iconName: 'TabletSmartphones' },
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80, iconName: 'Blocks' },
      { name: 'Express.js', level: 82, iconName: 'Server' },
    ]
  },
  {
    category: 'Database Systems',
    skills: [
      { name: 'MongoDB', level: 78, iconName: 'Database' },
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85, iconName: 'GitBranch' },
      { name: 'GitHub', level: 90, iconName: 'Github' },
      { name: 'VS Code', level: 92, iconName: 'AppWindow' },
    ]
  },
  {
    category: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, iconName: 'Network' },
      { name: 'Object-Oriented Programming', level: 88, iconName: 'Cpu' },
      { name: 'Database Management Systems', level: 80, iconName: 'DatabaseBackup' },
      { name: 'Operating System', level: 80, iconName: 'Montor' },
    ]
  }
];

export const projectsList: Project[] = [
  {
    title: 'Grumble: A Complaint Management System',
    description: 'Building a full-stack web application to digitize hostel complaint filing, aiming to replace paper-based logs and streamline communication between students and administration.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'web',
    future_Scope: [
     'Building a full-stack web application to digitize hostel complaint filing, aiming to replace paper-based logs and streamline communication between students and administration.',
     'Implementing a Role-Based Access Control system for Students, Wardens, and Guards, utilizing unique secret keys for administrative verification and security.',
     'Developing an interactive dashboard allowing administrators to manage real-time complaint lifecycles by updating statuses (e.g., Pending, In-Progress, Resolved)'
    ],
    codeUrl: 'https://github.com/aditiaishwarya',
    demoUrl: 'https://grumble-complaint-here.onrender.com'
  }
];

export const educationTimeline: EducationItem[] = [
  {
    degree: 'Integrated Bachelor and Master of Technology (B.Tech + M.Tech)',
    institution: 'National Institute of Technology, Patna',
    duration: '2024 - Present',
    gpa: '7.6 / 10.0 CGPA'
  },
  {
    degree: 'Class XII (State Board)',
    institution: 'R.P.D.J High School Jitwarpur Madhubani',
    year: '2024',
    percentage: '83%',
  },
  {
    degree: 'Class X (Secondary Education, CBSE)',
    institution: 'Rgional Secondary School',
    year: '2022',
    percentage: '93%'
  }
];

export const academicAchievements: Achievement[] = [
  {
    title: 'NPTEL',
    course: 'The joy of compution in Python',
    description: 'Scored 90 out of 100 in the course.'
  }
];

export const personalInterests: Interest[] = [
  { name: 'Video Editing', iconName: 'Video' },
  { name: 'Photography', iconName: 'Camera' },
  { name: 'Reading Books and Blogs', iconName: 'BookOpen' },
  { name: 'Learning New Technologies', iconName: 'Sparkles' }
];
