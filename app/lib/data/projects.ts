const githubUrl = "https://github.com/Zacurrya/"
const imagePath = '/images/projects/'

export const projects = [
  {
      title: "Qpay",
      description: "Made a demo QR payment system, inspired by the time I spent interacting with similar systems in China",
      tags: ["React Native", "Expo", "Supabase", "TypeScript"],
      link: "https://github.com/Zacurrya/qpay",
      images: [
        imagePath+'qpay/landing-screen.jpg',
        imagePath+'qpay/home-screen.jpg',
        imagePath+'qpay/receive-payment-screen.jpg',
        imagePath+'qpay/sign-in-screen.jpg',
      ]
  },
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
    title: 'Transcript API',
    description: 'Scrapes for company earnings call info, consisting of the transcript, key takeaways, etc., with the transcript being fed into a sentiment NLP model that returns a sentiment score.',
    tags: ['FastAPI', 'Supabase', 'BeautifulSoup'],
    link: "",
    images: [

    ]
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
  }
];