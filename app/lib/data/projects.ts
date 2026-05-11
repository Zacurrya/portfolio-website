const githubUrl = "https://github.com/Zacurrya/"
const imagePath = '/images/projects/'

export const projects = [
  {
    title: 'FDM Relocate',
    description:
      'A mobile app built to help relocating consultants at FDM find flats easier and quicker.',
    tags: ['React Native', 'Supabase', 'TailwindCSS', 'TypeScript', 'Expo'],
    link: githubUrl+'fdm_relocate',
    images: [
      imagePath+'fdm-relocate/1.jpg',
      imagePath+'fdm-relocate/2.jpg',
      imagePath+'fdm-relocate/3.jpg',
      imagePath+'fdm-relocate/4.jpg',
    ],
  },
  {
    title: 'Nomad Housing',
    description:
      'Full-stack property platform with Next.js, Prisma, and PostgreSQL. Features a Python microservice for real-time data and an LLM for natural language search.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Python'],
    link: 'https://github.com/Zacurrya/nomad-housing',
    images: [imagePath+'nomad-housing/1.png'],
  },
  {
    title: 'JLPT Fast',
    description:
      'Vibe-coded a language learning website to make learning Japanese more fun. Intend to clean up the code and progress it.',
    tags: ['Next.js', 'Prisma', 'Vercel'],
    link: 'https://github.com/Zacurrya/JLPT-Fast',
    images: [imagePath+'jlpt-fast/1.png']
  },
  {
      title: "Nomad Housing",
      description: "Full-stack property platform with Next.js, Prisma, and PostgreSQL. Features a Python microservice for real-time data and an LLM for natural language search.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "FastAPI", "Selenium"],
      link: "https://github.com/Zacurrya/nomad-housing",
      images: [imagePath+'nomad-housing/1.png']
  },
  {
      title: "NutriVise",
      description: "AI-powered nutritional analysis app built to support UN sustainable goals. Model trained off of ResNet-50 using PyTorch. Made with an international team as part of my exchange programme.",
      tags: ["PyTorch", "OpenCV", "ResNet-50"],
      link: "https://github.com/Zacurrya/nutrivise",
      images: [imagePath+'nutrivise/1.png']
  },
  {
      title: "Trading Dashboard",
      description: "Financial analysis tool consolidating stock data with Streamlit and Plotly. Uses LLMs to generate AI-driven market insights.",
      tags: ["Streamlit", "Plotly", "YFinance", "FinnHub"],
      link: "https://github.com/Zacurrya/trading-dashboard",
      images: [imagePath+'trading-dashboard/1.png']
  },
  {
      title: "Trading Bot",
      description: "Automated trading system using TA-Lib for technical analysis and Oanda API for execution, with a custom TKinter GUI for monitoring.",
      tags: ["TKinter", "TA-Lib", "OandaPy", "Plotly"],
      link: "https://github.com/Zacurrya/trading-bot",
      images: [imagePath+'trading-bot/1.png']
  },
  {
      title: "Slingshot Wars",
      description: "PvP Angry Birds-style game made for my A-Level final project.",
      tags: ["Unity", "C#"],
      link: "https://github.com/Zacurrya/NEA-PROJECT-DEFINITIVE",
      images: [imagePath+'slingshot-wars/1.png']
  }
];