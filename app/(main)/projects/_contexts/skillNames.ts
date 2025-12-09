// Dictionary mapping skill icon names to their proper display names
export const skillNames: Record<string, string> = {
    // Languages & Runtimes
    "javascript": "JavaScript",
    "typescript": "TypeScript",
    "python": "Python",
    "java": "Java",
    "cs": "C#",
    "nodejs": "Node.js",

    // Frameworks & Libraries
    "react": "React",
    "nextjs": "Next.js",
    "next.js": "Next.js",
    "express": "Express",
    "fastapi": "FastAPI",
    "pytorch": "PyTorch",
    "unity": "Unity",
    "streamlit": "Streamlit",

    // Databases & ORM
    "postgresql": "PostgreSQL",
    "mysql": "MySQL",
    "prisma": "Prisma",

    // Dev Tools & Infra
    "docker": "Docker",
    "git": "Git",
    "vercel": "Vercel",
    "maven": "Maven",

    // Design & Testing
    "figma": "Figma",
    "selenium": "Selenium",
    "postman": "Postman",

    // Styling & Utilities
    "tailwind": "Tailwind CSS",
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

// Main technologies to show in filter (excluding niche libraries)
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
    "TKinter"
];
