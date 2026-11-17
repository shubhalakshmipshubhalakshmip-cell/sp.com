export interface LiveStorefront {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  tagline: string;
  impact: string;
  allowIframe: boolean;
}

export interface SocialMediaPage {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: string;
  role: string;
  deliverables: string[];
  impact: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack?: string;
  tags: string[];
  highlights: string[];
  liveStorefronts?: LiveStorefront[];
  socialMediaPages?: SocialMediaPage[];
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
  whatsappNumber: string;
  whatsappDefaultLink: string;
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
    { label: "My Work", href: "#projects" },
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
  // =========================================================================
  // DELIVERED WORKS
  // Easily add more Website Development, Social Media, or Ad Campaign projects
  // by simply appending a new object to this array.
  // =========================================================================
  projects: [
    {
      id: "live-storefronts",
      title: "Live E-Commerce & Brand Websites",
      category: "E-COMMERCE & LIVE WEB STOREFRONTS",
      description:
        "Designed, developed, and optimized high-converting online storefronts and brand websites built for speed, mobile responsiveness, and seamless customer journeys.",
      tags: ["The Footsteps", "Pilates Hub", "Bounce Here", "E-Commerce", "Shopify", "WordPress"],
      highlights: [
        "Custom storefront UI/UX tailored for brand identity & conversions",
        "Mobile-first responsive layouts with fast checkout & booking flows",
        "Click to preview live frontpages right inside this portfolio"
      ],
      liveStorefronts: [
        {
          id: "thefootsteps",
          name: "The Footsteps",
          domain: "thefootsteps.in",
          url: "https://thefootsteps.in/",
          category: "Footwear & Streetwear E-Commerce",
          tagline: "Footwear & Streetwear Storefront",
          allowIframe: false,
          impact:
            "Modern footwear & sneaker storefront engineered with clean product discovery, fast mobile navigation, and conversion-focused product pages."
        },
        {
          id: "pilateshub",
          name: "Pilates Hub",
          domain: "pilateshub.in",
          url: "https://www.pilateshub.in/",
          category: "Wellness Studio & Booking Platform",
          tagline: "Wellness Studio & Booking Platform",
          allowIframe: true,
          impact:
            "Clean wellness & fitness studio web experience designed for effortless class discovery, brand trust, and mobile-first lead capture."
        },
        {
          id: "bouncehere",
          name: "Bounce Here",
          domain: "bouncehere.com",
          url: "https://www.bouncehere.com/",
          category: "Entertainment & Experience Brand",
          tagline: "Entertainment & Experience Brand",
          allowIframe: false,
          impact:
            "Vibrant, high-energy interactive brand website built with engaging visual hierarchy, clear CTAs, and smooth cross-device performance."
        }
      ]
    },
    {
      id: "social-media-growth",
      title: "Social Media Handling & Brand Growth",
      category: "SOCIAL MEDIA MANAGEMENT & CREATIVE DESIGN",
      description:
        "Managed end-to-end Instagram presence, designed high-converting promotional posters, and executed organic & paid growth strategies across education, healthcare, and fitness brands.",
      tags: ["Instagram Growth", "Poster Design", "Social Media", "Canva", "Meta Ads", "Content Strategy"],
      highlights: [
        "Designed custom campaign posters, carousels & brand visuals",
        "Managed daily content calendars, audience engagement & profile growth",
        "Click to inspect all 4 managed Instagram handles & launch directly"
      ],
      socialMediaPages: [
        {
          id: "cit-bengaluru",
          name: "CIT Bengaluru",
          handle: "@cit.bengaluru",
          url: "https://www.instagram.com/cit.bengaluru?dlrf=N2Q5dWU4em5ud3Rr",
          category: "Education & Campus Community",
          role: "Social Media Executive & Creative Designer",
          deliverables: [
            "Institutional Branding & Student Engagement Creatives",
            "Admissions & Campus Event Promotional Posters",
            "Consistent Visual Aesthetic & Daily Stories"
          ],
          impact:
            "Elevated institutional digital presence with high-converting admission campaign visuals, vibrant student life carousels, and measurable engagement growth."
        },
        {
          id: "kauvery-hospitals",
          name: "Kauvery Hospitals Bangalore",
          handle: "@kauvery_hospitals_bangalore",
          url: "https://www.instagram.com/kauvery_hospitals_bangalore?psln=bDYyenVkMDVxbjhm",
          category: "Healthcare & Medical Services",
          role: "Healthcare Creative Strategy & Social Media",
          deliverables: [
            "Health Awareness Posters & Doctor Spotlight Posts",
            "Medical Camp & Community Health Announcements",
            "Trust-Building Patient Care Informational Carousels"
          ],
          impact:
            "Built hospital brand credibility through sensitive, informative medical design, public health announcements, and community-focused healthcare campaigns."
        },
        {
          id: "ugi-bengaluru",
          name: "UGI Bengaluru",
          handle: "@ugibengaluru",
          url: "https://www.instagram.com/ugibengaluru?vrfl=MWd4MDY4MnRqdWYzNw==",
          category: "Campus Events & Youth Culture",
          role: "Social Growth Lead & Content Creator",
          deliverables: [
            "Campus Festivals & Event Teaser Graphics",
            "Reels Trend Alignment & Youth Community Growth",
            "Interactive Polls, Q&As & Engagement Sprints"
          ],
          impact:
            "Boosted youth participation across college festivals, achieved viral campus reels reach, and maintained high daily audience retention."
        },
        {
          id: "hyfit-fitness",
          name: "Hyfit Fitness Club",
          handle: "@hyfit.fitnessclub",
          url: "https://www.instagram.com/hyfit.fitnessclub?exln=cnlydGtxdmxkcmN6",
          category: "Fitness & Lifestyle Community",
          role: "Fitness Marketing & Promo Designer",
          deliverables: [
            "Membership Offer Posters & Lead-Gen Visuals",
            "Client Transformation Stories & Motivation Posts",
            "Gym Events & Trainer Spotlight Campaigns"
          ],
          impact:
            "Generated consistent walk-in inquiries and DM leads through high-energy promotional posters, transformation showcases, and targeted fitness promotions."
        }
      ]
    },
    {
      id: "end-to-end-execution",
      title: "SEO, Web Development, Social Growth & Creative Design",
      category: "END-TO-END DIGITAL EXECUTION & AI WORKFLOWS",
      description:
        "Delivering 100% end-to-end digital execution with precision and speed—combining technical SEO optimization, custom website development, social media page management, high-converting creative post design, and 35+ AI tools to build premium brand experiences.",
      tags: ["SEO Audits", "Custom Web Dev", "Social Media", "Post Design", "35+ AI Tools", "Growth Marketing"],
      highlights: [
        "Complete SEO Optimization: On-page SEO, keyword strategy, technical audits & search ranking growth",
        "Custom Website Development: Fast, responsive, conversion-ready websites built to premium standards",
        "Social Media Handling & Creative Post Design: End-to-end page management, scroll-stopping posters & brand visuals",
        "AI-Powered 100% Execution: Leveraging 35+ cutting-edge AI tools for faster research, design, content & campaign optimization"
      ]
    }
    // 💡 TO ADD A NEW PROJECT: Copy the template below and uncomment:
    // {
    //   id: "my-new-project",
    //   title: "Client Brand – Social Media & Ad Growth",
    //   category: "Social Media Management & Paid Ads",
    //   description: "Managed end-to-end content calendar, creative poster designs, and targeted Meta ads campaigns.",
    //   tags: ["Meta Ads", "Instagram Growth", "Content Strategy", "Canva", "Analytics"],
    //   highlights: [
    //     "3.2x Return On Ad Spend (ROAS) in first 60 days",
    //     "Organic social reach increased by 140%",
    //     "Automated lead capture into client CRM"
    //   ]
    // }
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
    whatsappNumber: "+91 9844272652",
    whatsappDefaultLink:
      "https://wa.me/919844272652?text=Hi%20Shubha!%20I%20visited%20your%20portfolio%20(Shubha.co)%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
    email: "shubhubhalakshmipshubhalakshmip@gmail.com",
    emailLink: "mailto:shubhubhalakshmipshubhalakshmip@gmail.com",
    linkedin: "linkedin.com/in/shubha-shubha-62345244b",
    linkedinUrl: "https://www.linkedin.com/in/shubha-shubha-62345244b",
    location: "Mysore, Karnataka, India"
  }
};
