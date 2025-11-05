/**
 * Resume data structure
 */

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface TechnicalCategory {
  name: string;
  technologies: string[];
}

export interface CoreStrength {
  title: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  achievements: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  achievements: string[];
  projects?: Project[];
}

export interface FreelanceWork {
  project: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  minors?: string[];
  gpa?: string;
  honors?: string[];
}

export interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
}

export interface FeaturedProject {
  name: string;
  description: string;
  technologies: string[];
  keyMetrics: string[];
  achievements: string[];
  company?: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  professionalSummary: string;
  aboutMe?: string;
  impactMetrics: ImpactMetric[];
  technicalProficiency: TechnicalCategory[];
  coreStrengths: CoreStrength[];
  featuredProjects: FeaturedProject[];
  experience: Experience[];
  freelanceWork: FreelanceWork[];
  education: Education;
  testimonials?: Testimonial[];
}

export const resumeData: ResumeData = {
  name: "Quan Vo",
  title: "Senior Product Engineer • Senior Full-Stack Software Engineer",
  contact: {
    email: "votrungquan99@gmail.com",
    phone: "+84 813 792 279",
    github: "github.com/votrungquan1999",
    linkedin: "linkedin.com/in/quanvotr",
  },
  professionalSummary:
    "I am a product-driven full‑stack engineer who leads web-based solutions across logistics, fashion tech, and SaaS with a focus on accessibility and user experience. I excel in translating complex business requirements into scalable technical solutions while maintaining strong emphasis on performance optimization and measurable business outcomes.",
  aboutMe:
    "I'm passionate about building products that make a real impact. My approach combines deep technical expertise with a user-centered mindset, always asking 'How can this be better?' rather than just 'Can this work?'. I believe great engineering isn't just about writing code—it's about understanding problems deeply, collaborating effectively, and continuously improving both the product and the process. Whether I'm architecting event-driven systems, optimizing performance, or mentoring teammates, I bring a focus on measurable outcomes and sustainable solutions.",
  impactMetrics: [
    {
      value: "90%",
      label: "Faster Processing",
      description: "Web worker optimization for data processing",
    },
    {
      value: "70%",
      label: "Load Time Improvement",
      description: "Through caching and query optimization",
    },
    {
      value: "80%",
      label: "Interaction Reduction",
      description: "Streamlined workflows for core tasks",
    },
    {
      value: "50%",
      label: "Development Time Saved",
      description: "Process improvements and automation",
    },
  ],
  featuredProjects: [
    {
      name: "Bodimatch",
      description:
        "An accessible internal tool for complex fitting functions, improving data accuracy and processing performance significantly.",
      technologies: ["Next.js", "TypeScript", "Web Workers", "MongoDB"],
      keyMetrics: ["45% data accuracy improvement", "90% faster processing"],
      achievements: [
        "Developed an accessible internal tool for complex fitting functions, improving data accuracy by 45%",
        "Optimized performance by using web worker resulting in 90% faster data processing and visualization",
      ],
      company: "Bodidata",
    },
    {
      name: "Partners Portal",
      description:
        "A fully accessible client portal with 100% keyboard navigation, automated workflows, and optimized API performance.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Radix UI",
        "Shadcn UI",
      ],
      keyMetrics: [
        "100% keyboard navigation",
        "60% API improvement",
        "50% satisfaction increase",
      ],
      achievements: [
        "Built a client portal with accessibility in mind with 100% keyboard navigation for the keys features",
        "Understood the user's pain points and tediousness in the processes and designed new features to automate them, thus increasing the customer satisfaction by 50%",
        "Improved API response times by 60% through server and client side caching and database normalization",
      ],
      company: "Bodidata",
    },
    {
      name: "Cross-border Tools",
      description:
        "Warehouse management tools that significantly reduced training time and manual data entry through efficient design and automation.",
      technologies: ["Next.js", "React", "TypeScript", "MySQL", "Golang"],
      keyMetrics: [
        "50% training reduction",
        "70% entry time saved",
        "55% efficiency gain",
      ],
      achievements: [
        "Decreased training time for new warehouse staff by 50% through efficient design and documentation",
        "Reduced manual data entry time by 70% through barcode scanning and automated tracking systems",
        "Improved warehouse efficiency by 55% with streamlined scanning workflows",
      ],
      company: "Ninja Van",
    },
  ],
  technicalProficiency: [
    {
      name: "Frontend Engineering",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend Engineering",
      technologies: ["Go", "Node.js", "REST APIs", "GraphQL"],
    },
    {
      name: "Others",
      technologies: [
        "SQL Databases",
        "NoSQL Databases",
        "CI/CD workflows",
        "Mobile Development",
      ],
    },
  ],
  coreStrengths: [
    {
      title: "User-Centered Product Design",
      description:
        "Expertise in translating complex business requirements into intuitive user experiences, with a focus on accessibility and measurable outcomes.",
      achievements: [
        "Designed a new tool to reduce required interactions by 80% to complete core tasks by analyzing customer workflows",
        "Discovered the user's pain points and designed new features to address them significantly increasing the customer satisfaction",
        "Reviewed and proposed new improvements to the existing processes to reduce the development time by 90%",
      ],
    },
    {
      title: "UI Engineering Excellence",
      description:
        "Specializes in creating performant, accessible, and maintainable frontend architectures using modern web technologies.",
      achievements: [
        "Engineered accessibility-focused tools that reduced user input time by 30% while minimizing human error rates",
        "Implemented intentional loading states that reduce anxiety and increase user satisfaction",
      ],
    },
    {
      title: "Backend Engineering",
      description:
        "Expert in designing and implementing scalable backend systems with a focus on performance optimization and system maintainability.",
      achievements: [
        "Improved load times by 70% through caching, query optimization, and database normalization",
        "Utilized event-driven architecture to increase data consistency and the reduce the error resolution time by 60%",
      ],
    },
    {
      title: "AI Early Adopter",
      description:
        "Pioneer in leveraging AI tools for enhanced development productivity and product innovation, with 3+ years of experience integrating AI into development workflows and product design processes.",
      achievements: [
        "Early GitHub Copilot adopter (2022), achieving 40% faster development and reducing repetitive tasks",
        "Integrated Cursor's agentic AI tools for streamlined refactoring and accelerated feature development",
        "Revolutionized product design using AI for documentation and planning, reducing iteration time by 50%",
        "Mentored team on AI tool adoption, establishing best practices that improved productivity by 30%",
      ],
    },
  ],
  experience: [
    {
      title: "Senior Product Engineer",
      company: "Bodidata",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Dec 2021",
      endDate: "Present",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "Radix UI",
        "Shadcn UI",
      ],
      achievements: [
        "Understood developers's pain points in the iterations of the software and promote event-driven architecture that helps reduce frictions in the development process by 50%",
        "Engineered and published new libraries to support the event-driven architecture that help streamline the development processes",
        "Mentored team in accessibility best practices and performance optimization techniques to achieve customer satisfaction in 100% of the products",
        "Utilized AI tools to assist with code generation, improve development speed, and reduce repetitive tasks during implementation and testing",
      ],
      projects: [
        {
          name: "Bodimatch",
          achievements: [
            "Developed an accessible internal tool for complex fitting functions, improving data accuracy by 45%",
            "Optimized performance by using web worker resulting in 90% faster data processing and visualization",
          ],
        },
        {
          name: "Partners Portal",
          achievements: [
            "Built a client portal with accessibility in mind with 100% keyboard navigation for the keys features",
            "Understood the user's pain points and tediousness in the processes and designed new features to automate them, thus increasing the customer satisfaction by 50%",
            "Improved API response times by 60% through server and client side caching and database normalization",
          ],
        },
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Ninja Van",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "Sep 2020",
      endDate: "Dec 2021",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "Ant Design",
        "Golang",
      ],
      achievements: [
        "Actively participated in the discussions with the stakeholders to understand the business requirements and translate them into technical solutions",
        "Learned the proper engineering practices and best practices to build scalable and maintainable software",
        "Showed significant improvement after half a year of working with the team and got 5/5 in the performance review and got promoted to mid level engineer",
        "Proposed using Nextjs as backend framework for better development experience since 100% of the team was Javascript expert",
      ],
      projects: [
        {
          name: "Cross-border tools",
          achievements: [
            "Decreased training time for new warehouse staff by 50% through efficient design and documentation",
            "Reduced manual data entry time by 70% through barcode scanning and automated tracking systems",
            "Improved warehouse efficiency by 55% with streamlined scanning workflows",
          ],
        },
      ],
    },
  ],
  freelanceWork: [
    {
      project: "Task Management SaaS — Taskworld",
      startDate: "Mar 2022",
      endDate: "Feb 2024",
      technologies: ["React", "NestJS"],
      achievements: [
        "Improved user's productivity by 35% through enhanced Kanban/Scrum board features",
        "Reduced system latency by 60% with optimized websocket implementation",
        "Improved the user activity logs by 90% by implementing better query optimization and indexing",
      ],
    },
    {
      project: "Inventory Management SaaS",
      startDate: "Mar 2021",
      endDate: "Dec 2021",
      technologies: ["Go", "Next.js", "Firestore"],
      achievements: [
        "Managed product deployment efficiently by using CI/CD pipelines to make deployment time under 5 minutes and bug free with 100% of integration tests",
        "Reduced inventory tracking time by 70% with barcode scanning system",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science — Computer Science",
    institution: "State University of New York at Plattsburgh",
    location: "Plattsburgh, NY, USA",
    startDate: "Aug 2017",
    endDate: "May 2020",
    minors: ["Mathematics", "Robotics"],
    gpa: "3.6",
    honors: ["Dean's List"],
  },
  testimonials: [],
};
