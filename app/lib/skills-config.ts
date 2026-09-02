/**
 * Technology Icons and Skills Configuration
 * Centralized configuration for all technology icons, display names, and grouping logic
 */

/**
 * Maps display names (used in projects) to icon names (used in Devicons)
 */
export const techIcons: { [key: string]: string } = {
    "Next.js": "nextjs",
    "Prisma": "prisma",
    "PostgreSQL": "postgresql",
    "FastAPI": "fastapi",
    "PyTorch": "pytorch",
    "OpenCV": "opencv",
    "PHP": "php",
    "JavaScript": "javascript",
    "SQL": "mysql",
    "Apache": "apache",
    "React": "react",
    "React Native": "react",
    "Node.js": "nodejs",
    "Tailwind CSS": "tailwindcss",
    "TailwindCSS": "tailwindcss",
    "TypeScript": "typescript",
    "Python": "python",
    "Java": "java",
    "Spring Boot": "spring",
    "C#": "csharp",
    "Supabase": "supabase",
    "Expo": "expo",
    "HTML/CSS": "html,css",
    "Streamlit": "streamlit",
    "Plotly": "plotly",
    "YFinance": "python",
    "FinnHub": "python",
    "TKinter": "python",
    "TA-Lib": "python",
    "OandaPy": "python",
    "ResNet-50": "pytorch",
    "Unity": "unity",
    "Selenium": "selenium",
};

/**
 * Dictionary mapping skill icon names to their proper display names
 */
export const skillDisplayNames: { [key: string]: string } = {
    // Languages & Runtimes
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "python": "Python",
    "java": "Java",
    "csharp": "C#",
    "nodejs": "Node.js",

    // Frameworks & Libraries
    "react": "React",
    "react-native": "React Native",
    "nextjs": "Next.js",
    "express": "Express",
    "fastapi": "FastAPI",
    "pytorch": "PyTorch",
    "unity": "Unity",
    "streamlit": "Streamlit",
    "expo": "Expo",

    // Databases & ORM
    "postgresql": "PostgreSQL",
    "mysql": "MySQL",
    "prisma": "Prisma",
    "supabase": "Supabase",
    "amazon-s3": "Amazon S3",

    // Dev Tools & Infrastructure
    "docker": "Docker",
    "git": "Git",
    "vercel": "Vercel",
    "maven": "Maven",

    // Design & Testing
    "figma": "Figma",
    "selenium": "Selenium",
    "postman": "Postman",

    // Styling & Utilities
    "tailwindcss": "Tailwind CSS",
    "opencv": "OpenCV",

    // Data & Visualization
    "plotly": "Plotly",

    // Other
    "tkinter": "TKinter",
    "resnet-50": "ResNet-50",
    "yfinance": "YFinance",
    "finnhub": "FinnHub",
    "ta-lib": "TA-Lib",
    "oandapy": "OandaPy",
};

/**
 * Main technologies to show in filter (excluding niche libraries)
 */
export const mainFilterTags = [
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "PyTorch",
    "Prisma",
    "PostgreSQL",
    "Unity",
    "C#",
    "Streamlit",
    "TKinter",
    "Selenium",
];

/**
 * Gets the Devicon CDN URL for a given skill icon
 * @param iconName - The icon name (e.g., "javascript", "react")
 * @param version - The icon version (default: "original")
 * @returns The CDN URL for the icon
 */
export const getIconUrl = (iconName: string, version: string = "original"): string => {
    const iconAliases: { [key: string]: string } = {
        "react-native": "react",
        "amazon-s3": "amazonwebservices",
    };
    const resolvedIcon = iconAliases[iconName.toLowerCase()] || iconName;
    const iconVersionOverrides: { [key: string]: string } = {
        "amazonwebservices": "original-wordmark",
    };
    const resolvedVersion = iconVersionOverrides[resolvedIcon.toLowerCase()] || version;

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${resolvedIcon}/${resolvedIcon}-${resolvedVersion}.svg`;
};

/**
 * Gets the proper display name for a skill icon
 * @param iconName - The icon name (e.g., "fastapi", "postgresql")
 * @returns The properly formatted display name (e.g., "FastAPI", "PostgreSQL")
 */
export const getSkillDisplayName = (iconName: string): string => {
    return skillDisplayNames[iconName.toLowerCase()] || iconName;
};

/**
 * Groups project tags by their corresponding tech icons
 * @param tags - Array of technology tags
 * @returns Object mapping icon names to arrays of tag names
 */
export const groupTagsByIcon = (tags: string[]): { [key: string]: string[] } => {
    const iconGroups: { [key: string]: string[] } = {};

    tags.forEach(tag => {
        const icon = techIcons[tag];
        if (icon) {
            if (!iconGroups[icon]) {
                iconGroups[icon] = [];
            }
            iconGroups[icon].push(tag);
        }
    });

    return iconGroups;
};
