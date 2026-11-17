export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack?: string;
  tags: string[];
  highlights: string[];
}

export interface ExperienceItem {
  organization: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period?: string;
  details?: string;
}

export interface ContactInfo {
  phone: string;
  phoneLink: string;
  email: string;
  emailLink: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    brandName: string;
    title: string;
    heroSubtitle: string;
    location: string;
    heroBio: string;
    heroPhilosophy: string;
    aboutSummary: string;
    personalSkills: string[];
    interests: string[];
    images: {
      base: string;
      reveal: string;
    };
  };
  navigation: {
    label: string;
    href: string;
  }[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    digitalMarketing: string[];
    programmingAndWeb: string[];
    tools: string[];
    courses2025: string[];
    achievements: string[];
  };
  education: EducationItem[];
  contact: ContactInfo;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shubhalakshmi P",
    brandName: "Shubha.co",
    title: "Digital Marketer & Web Developer",
    heroSubtitle: "Digital Marketer & Web Developer",
    location: "Mysore, Karnataka, India",
    heroBio:
      "Results-driven Digital Marketer & Web Developer from Mysore. Skilled in SEO, Google & Meta Ads, Web Development, and 35+ AI tools.",
    heroPhilosophy:
      "Turning data-driven marketing strategies and clean code into high-converting digital experiences that drive real business growth.",
    aboutSummary:
      "Results-driven and detail-oriented professional with experience in Digital Marketing, seeking an opportunity in a reputed organization to utilize my skills and contribute to business growth. Skilled in SEO, social media marketing, content optimization, website analysis, and digital marketing strategies. Adaptable team player with strong problem-solving abilities, a passion for learning new technologies.",
    personalSkills: [
      "Problem solving",
      "Teamwork",
      "Time management",
      "Quick Learner"
    ],
    interests: [
      "Learning New Technologies",
      "Reading books",
      "Playing games"
    ],
    images: {
      base: "./images/Base_image.png",
      reveal: "./images/Reveal_image.png"
    }
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" }
  ],
  experience: [
    {
      organization: "Zonex Growth Agency, Mysore",
      location: "Mysore, Karnataka",
      role: "Digital Marketing Specialist & Web Developer",
      period: "11/2025 – 10/2026",
      responsibilities: [
        "Managed website optimization and social media marketing, improving brand visibility and engagement while supporting client onboarding and business growth.",
        "Led targeted Meta Ads & Google Ads campaigns to increase client lead generation, generating high-quality leads through precise audience targeting and conversion optimization.",
        "Led digital marketing initiatives including Google Ads, Meta Ads, SEO, and social media management to increase client acquisition, brand awareness, and business growth through data-driven strategies and campaign optimization.",
        "Designed and developed custom, responsive websites on WordPress and Shopify."
      ]
    }
  ],
  projects: [
    {
      id: "ecohaven",
      title: "EcoHaven – E-commerce Website Project",
      category: "E-Commerce & Web Development",
      description:
        "Developed an e-commerce website with user-friendly navigation and product management features. Focused on responsive design, website optimization, and providing a seamless online shopping experience.",
      tags: ["WordPress", "Shopify", "E-commerce", "Responsive Design", "SEO"],
      highlights: [
        "Intuitive product discovery & seamless checkout flow",
        "Mobile-first responsive architecture with fast load times",
        "Conversion-focused product showcase and catalog optimization"
      ]
    },
    {
      id: "health-monitor",
      title: "Digital Platform for Patient-Based Health Monitoring and Glycemic Risk Assessment",
      category: "Healthcare & Full Stack Web Application",
      techStack: "HTML, JavaScript (Frontend) | PHP (Backend) | SQL (Database)",
      description:
        "Developed a digital platform for monitoring patient health data and assessing glycemic risk with clinical accuracy and intuitive visual reporting.",
      tags: ["HTML", "JavaScript", "PHP", "SQL", "HealthTech", "Database Design"],
      highlights: [
        "Interactive dashboard for tracking patient physiological metrics",
        "Algorithmic glycemic risk indicator based on historical records",
        "Relational SQL architecture ensuring data integrity and fast retrieval"
      ]
    },
    {
      id: "marketing-optimization",
      title: "Digital Marketing Campaign Optimization Project",
      category: "Performance Marketing & ROI Optimization",
      description:
        "Planned and optimized Google Ads & Meta Ads campaigns with audience targeting, keyword analysis, and performance tracking. Improved campaign effectiveness through CTR analysis and conversion optimization.",
      tags: ["Google Ads", "Meta Ads", "A/B Testing", "CTR Optimization", "Audience Targeting"],
      highlights: [
        "Advanced keyword intent clustering and negative keyword sculpting",
        "Dynamic ad copy variations and funnel stage retargeting",
        "Measurable CTR uplift and reduced cost per lead (CPL)"
      ]
    }
  ],
  skills: {
    digitalMarketing: [
      "Digital Marketing Strategies",
      "Website Development (WordPress, Shopify)",
      "Search Engine Optimization (SEO)",
      "Google Ads Management",
      "Social Media Management",
      "Analytical & Technical Skills",
      "Paid Advertising & Campaign Running",
      "Performance Marketing",
      "Communication"
    ],
    programmingAndWeb: [
      "C",
      "PHP",
      "Java",
      "Python",
      "SQL",
      "HTML",
      "JavaScript"
    ],
    tools: [
      "35+ AI Tools",
      "VS Code",
      "Code Blocks",
      "PyCharm",
      "Notepad++"
    ],
    courses2025: [
      "Completed the course on Digital Marketing (2025)",
      "Completed the course on Artificial Intelligence (2025)",
      "Completed the course on Performance Marketing and Poster Designs (2025)"
    ],
    achievements: [
      "Participated and completed in getting Artificial Intelligence certification (2025)",
      "Successfully managed Google Ads and Meta Ads campaigns for lead generation and business growth",
      "Improved website visibility through SEO strategies and content optimization",
      "Developed and designed responsive websites using WordPress and Shopify"
    ]
  },
  education: [
    {
      degree: "Bachelor of Computer Science (BCA)",
      institution: "JSS College of Arts, Commerce and Science, Ooty Road Mysore",
      location: "Mysore, Karnataka",
      details: "Comprehensive training in Software Engineering, Web Development, Database Management, and Algorithm Design."
    },
    {
      degree: "Class 12 (PCMB)",
      institution: "Scholars PU College",
      period: "2021 – 2023",
      details: "Physics, Chemistry, Mathematics, Biology (Pre-University Education)."
    },
    {
      degree: "Class 10 (SSLC)",
      institution: "Government Girls High School, K.R. Pete",
      period: "2020 – 2021",
      details: "Secondary School Leaving Certificate with distinction in core fundamentals."
    }
  ],
  contact: {
    phone: "+91 9844272652",
    phoneLink: "tel:+919844272652",
    email: "shubhubhalakshmipshubhalakshmip@gmail.com",
    emailLink: "mailto:shubhubhalakshmipshubhalakshmip@gmail.com",
    linkedin: "linkedin.com/in/shubha-shubha-62345244b",
    linkedinUrl: "https://www.linkedin.com/in/shubha-shubha-62345244b",
    location: "Mysore, Karnataka, India"
  }
};
