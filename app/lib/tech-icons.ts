export const techIcons: { [key: string]: string } = {
    "Next.js": "nextjs",
    "Prisma": "prisma",
    "PostgreSQL": "postgres",
    "FastAPI": "fastapi",
    "PyTorch": "pytorch",
    "OpenCV": "opencv",
    "PHP": "php",
    "JavaScript": "js",
    "SQL": "mysql",
    "Apache": "apache",
    "React": "react",
    "Node.js": "nodejs",
    "Socket.io": "workers",
    "Python": "python",
    "Java": "java",
    "C#": "cs",
    "HTML/CSS": "html,css",
    "Streamlit": "python",
    "Plotly": "python",
    "YFinance": "python",
    "FinnHub": "python",
    "TKinter": "python",
    "TA-Lib": "python",
    "OandaPy": "python",
    "ResNet-50": "pytorch",
    "Unity": "unity",
};

/**
 * Mapping of skill icon names to Devicons names
 * Devicons CDN: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-{version}.svg
 */
export const deviconMapping: { [key: string]: string } = {
    // Languages
    "javascript": "javascript",
    "js": "javascript",
    "typescript": "typescript",
    "python": "python",
    "java": "java",
    "cs": "csharp",

    // Frameworks & Libraries
    "react": "react",
    "nextjs": "nextjs",
    "express": "express",
    "fastapi": "fastapi",
    "pytorch": "pytorch",
    "unity": "unity",
    "nodejs": "nodejs",
    "streamlit": "streamlit",

    // Databases
    "postgresql": "postgresql",
    "postgres": "postgresql",
    "mysql": "mysql",
    "prisma": "prisma",

    // Tools
    "docker": "docker",
    "git": "git",
    "vercel": "vercel",
    "maven": "maven",
    "figma": "figma",
    "selenium": "selenium",
    "postman": "postman",

    // Styling
    "tailwind": "tailwindcss",
    "opencv": "opencv",
};

/**
 * Gets the Devicon CDN URL for a given skill icon
 * @param iconName - The icon name (e.g., "javascript", "react")
 * @param version - The icon version (default: "original")
 * @returns The CDN URL for the icon
 */
export const getIconUrl = (iconName: string, version: string = "original"): string => {
    const deviconName = deviconMapping[iconName.toLowerCase()] || iconName.toLowerCase();
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconName}/${deviconName}-${version}.svg`;
};

/**
 * Dictionary mapping skill icon names to their proper display names
 */
export const skillDisplayNames: { [key: string]: string } = {
    // Languages & Runtimes
    "javascript": "JavaScript",
    "js": "JavaScript",
    "typescript": "TypeScript",
    "python": "Python",
    "java": "Java",
    "nodejs": "Node.js",

    // Frameworks & Libraries
    "react": "React",
    "nextjs": "Next.js",
    "express": "Express",
    "fastapi": "FastAPI",
    "pytorch": "PyTorch",
    "unity": "Unity",
    "streamlit": "Streamlit",

    // Databases & Tools
    "postgresql": "PostgreSQL",
    "postgres": "PostgreSQL",
    "mysql": "MySQL",
    "prisma": "Prisma",
    "docker": "Docker",
    "git": "Git",
    "vercel": "Vercel",
    "maven": "Maven",

    // Design & Testing
    "figma": "Figma",
    "selenium": "Selenium",
    "postman": "Postman",
    "tailwind": "Tailwind CSS",
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
