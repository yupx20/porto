import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Muhammad Rizal Yudianto',
  codename: 'FULLSTACK & AI',
  level: 99,
  title: 'Information Systems Graduate | Fullstack & AI Developer',
  bio: 'Information Systems graduate with hands-on experience in Fullstack Web Development (Laravel and React.js), Backend Architecture, and Database Management. Experienced in developing web-based dashboards, integrating backend APIs using Python (Django), and managing relational databases (PostgreSQL and MySQL). Demonstrates strong technical adaptability and potential in developing NLP and Large Language Model (LLM) applications, particularly in building Retrieval-Augmented Generation (RAG) chatbots. Possesses a strong understanding of Software Development Life Cycle (SDLC) principles and practices.',
  avatar_url: import.meta.env.BASE_URL + 'gweh.jpg',
  location: 'Surabaya, East Java, Indonesia',
  email: 'yudianto.r78@gmail.com',
  availability: 'Open to opportunities',
  social_links: [
    { platform: 'GitHub', url: 'https://github.com/yupx20', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yuudianto', icon: 'Linkedin' },
    { platform: 'Portfolio', url: 'https://canva.link/csnqycvqbszitc8', icon: 'ExternalLink' },
    { platform: 'Email', url: 'mailto:yudianto.r78@gmail.com', icon: 'Mail' },
  ],
  top_competencies: [
    'Python / Django / FastAPI',
    'PHP / Laravel',
    'React.js / Next.js',
    'PostgreSQL / MySQL',
    'Retrieval-Augmented Generation (RAG)',
    'LangChain / LangGraph',
    'Groq / Google Gemini API',
    'Natural Language Processing (NLP)',
    'Tailwind CSS / Vite',
    'PyMuPDF / Streamlit',
    'Docker / Git',
    'RESTful API Architecture',
  ],
};
