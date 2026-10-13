// Factual source: Angeline_SWE_Resume (33).pdf, dated October 12, 2026.
// Quiz upload details were checked against the separate project's current code.
// Set missing links to real URLs when available. Null links never render as buttons.
export const profile = {
  name: "Angeline Nusalim",
  email: "angelinenusalim3483@gmail.com",
  linkedin: "https://www.linkedin.com/in/angeline-nusalim/",
  github: "https://github.com/angelinenusalim",
  resume: "/Angeline-Nusalim-Resume.pdf",
  portrait: "/photos/portrait.webp" as string | null,
};

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  problem: string;
  decisions: string[];
  challenge: string;
  github: string | null;
  live: string | null;
  screenshot: string | null;
}

export const projects: Project[] = [
  {
    id: "quiz",
    number: "01",
    title: "AI Quiz Generator",
    category: "FULL-STACK · AI",
    description:
      "A full-stack web application that generates quizzes from topics and study materials using the OpenAI API.",
    technologies: ["React", "Node.js", "Express", "OpenAI API"],
    role: "Full-stack development",
    problem:
      "Make it easier to practice a subject with configurable quizzes and immediate feedback.",
    decisions: [
      "A React interface manages settings, asynchronous requests, loading states, answer selection, and error recovery.",
      "Express REST endpoints connect the interface to AI generation. Responses are validated before becoming a quiz.",
      "The current code extracts selectable text from PDF, PowerPoint (.pptx), Word (.docx), TXT, and Markdown study materials. Scanned pages are not OCR’d.",
      "Scoring is deterministic, and answers and explanations appear after submission. Document citations retain source references.",
    ],
    challenge:
      "AI output and document extraction can fail. The implementation makes these failures visible and gives the user a way to recover instead of displaying a partial quiz as complete.",
    github: "https://github.com/angelinenusalim/ai-quiz-generator",
    live: "https://ai-quiz-generator-angeline.netlify.app",
    screenshot: null,
  },
  {
    id: "emotion",
    number: "02",
    title: "Facial Expression Recognition",
    category: "COMPUTER VISION · DEEP LEARNING",
    description:
      "A video-based facial expression recognition project comparing CNN, BiLSTM, and Transformer-based approaches.",
    technologies: [
      "Python",
      "PyTorch",
      "ResNet-50",
      "BiLSTM",
      "Transformer",
      "Google Colab",
    ],
    role: "Collaborative development with two teammates",
    problem:
      "Explore how temporal information in facial image sequences affects emotion recognition.",
    decisions: [
      "Use video-only RAVDESS data: about 1,440 clips from 24 actors across eight emotions. Extract frames at 5 fps with OpenCV, detect and crop faces with MTCNN, then resize to 224×224 and normalize with ImageNet statistics.",
      "Use a 70/15/15 train-validation-test split grouped by actor ID to prevent identity leakage. Every model sees the same 15 frames; the per-frame ResNet-50 baseline averages independent predictions.",
      "Compare ResNet-50 with a two-layer BiLSTM (hidden size 512) and two-layer, eight-head Transformer encoders, with and without positional encoding. The CNN produces 2,048-dimensional frame embeddings.",
      "Train for 20 epochs using Adam (learning rate 1e-4, weight decay 5e-4) and ReduceLROnPlateau (patience 5, factor 0.5). Batch sizes are 16 for sequence models and 32 for the baseline.",
      "CNN+BiLSTM achieved 57.3% test accuracy versus 47.0% for the baseline, a 10.3 percentage-point improvement. The Transformer without positional encoding reached 57.0%, compared with 53.7% with positional encoding.",
    ],
    challenge:
      "Validation accuracy was higher than test accuracy for every model, which reinforced the importance of evaluating on unseen actors. Positional encoding did not improve test accuracy in this experiment. The results support using multiple frames, but do not establish that the models learned the order of facial expressions.",
    github: null,
    live: null,
    screenshot: null,
  },
  {
    id: "rewards",
    number: "03",
    title: "Smart Credit Card Rewards",
    category: "MOBILE DEVELOPMENT",
    description:
      "A React Native mobile application focused on responsive interfaces, reusable components, and navigation.",
    technologies: ["React Native"],
    role: "Mobile interface development",
    problem:
      "Build a maintainable mobile interface for a credit card rewards application.",
    decisions: [
      "Compose responsive screens from reusable React Native components.",
      "Implement navigation, state management, and interface updates.",
      "Test and debug UI behavior across devices.",
    ],
    challenge:
      "Keeping components reusable while maintaining consistent screen behavior requires careful state and navigation design.",
    github: null,
    live: null,
    screenshot: null,
  },
  {
    id: "spell",
    number: "04",
    title: "Spell Checker",
    category: "DATA STRUCTURES · C++",
    description:
      "A C++ spell checker built with a custom hash table, collision handling, and dynamic memory management.",
    technologies: ["C++", "Hash tables"],
    role: "Data structure implementation",
    problem:
      "Check words efficiently while managing storage and collisions in a custom dictionary.",
    decisions: [
      "Implement a hash table using a DJB2-style hash function and linked-list chaining to handle collisions. Dictionary lookup is average-case O(1), with worst-case O(n) when collisions accumulate.",
      "Normalize input by removing non-alphabetic characters and converting it to lowercase. Generate suggestions with single-character substitution, insertion, deletion, and adjacent transposition.",
      "Store unique suggestions in a dynamically resized StringSet. Destructors release linked-list nodes, the bucket array, and suggestion storage.",
    ],
    challenge:
      "The implementation needs both efficient lookups and stable memory behavior. The interactive example on this portfolio is a separate JavaScript recreation, not the original C++ program.",
    github: "https://github.com/angelinenusalim/spell-checker",
    live: null,
    screenshot: null,
  },
];

export const experiences = [
  {
    company: "Rise Above Sports Group",
    short: "RASG",
    role: "Full-Stack Web Developer Intern",
    date: "Apr 2026 — Present",
    current: true,
    description:
      "I build and maintain a full-stack platform for athlete recruitment and content management. My work includes responsive interface components, production debugging, and collaboration through Git and GitHub.",
    technologies: ["HTML / CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    company: "Bank Central Asia",
    short: "BCA",
    role: "AI Data Management Intern",
    date: "Jun — Aug 2026",
    current: false,
    description:
      "I shadowed data engineering, analytics, and AI teams to understand enterprise banking data platforms. I completed Java, Maven, and Oracle training and studied ETL, data governance, warehousing, and batch and near-real-time processing.",
    technologies: ["Java", "Maven", "Oracle", "ETL", "Data engineering"],
  },
  {
    company: "BC Hacks 2024",
    short: "BC",
    role: "Web Developer",
    date: "Apr — Jun 2024",
    current: false,
    description:
      "I worked with an Agile team on the official hackathon website, implementing responsive frontend components and dynamic event information with attention to usability and accessibility.",
    technologies: ["Responsive web", "Accessibility", "Agile"],
  },
];

export const education = [
  {
    school: "University of Washington",
    degree: "B.S. in Computer Science",
    date: "Sep 2025 — Jun 2027",
    gpa: "3.75",
    label: "UW",
  },
  {
    school: "Bellevue College",
    degree: "Associate in Arts & Sciences (DTA)",
    date: "Sep 2023 — May 2025",
    gpa: "3.99",
    label: "BC",
  },
];

export const coursework = [
  "Data Structures",
  "Systems Programming",
  "Software Design",
  "Parallelism",
  "Hardware/Software Interface",
  "Artificial Intelligence",
  "Deep Learning",
  "Computer Security",
  "Distributed Systems",
  "Data Center",
];
export const skills = [
  {
    name: "Programming Languages",
    items: ["Java", "Python", "C++", "C", "SQL", "JavaScript", "HTML / CSS"],
  },
  {
    name: "Frameworks & Tools",
    items: [
      "React",
      "React Native",
      "Node.js",
      "Docker",
      "Git / GitHub",
      "Maven",
      "Oracle",
      "Kafka",
      "Google Colab",
      "REST APIs",
    ],
  },
  {
    name: "Systems & Data",
    items: [
      "Data structures & algorithms",
      "OOP",
      "Multithreading & parallelism",
      "Distributed systems",
      "Data engineering",
      "ETL",
      "Data warehousing",
    ],
  },
  {
    name: "Machine Learning",
    items: ["Machine learning", "Deep learning", "Computer vision"],
  },
];

export const additionalWork = [
  {
    title: "Burger Menu Application",
    category: "JAVA COURSEWORK",
    description:
      "A Java coursework project with inheritance, currency conversion, configurable toppings, and temperature-based promotions. It uses a Swing menu interface with instructor-provided GUI components.",
    technologies: ["Java", "OOP", "Swing", "API integration"],
  },
  {
    title: "Fraud Detection Pipeline",
    category: "MACHINE LEARNING",
    description:
      "A classification workflow covering preprocessing, model comparison, retraining, inference, and evaluation. I compared models using F1 score and evaluated multiple classification thresholds.",
    technologies: ["Python", "Spark", "CatBoost", "scikit-learn"],
  },
];

// Supplied design artifacts, with no inferred job titles or gameplay claims.
export const designCollections: {
  title: string;
  description: string;
  images: { title: string; src: string; alt: string }[];
}[] = [
  {
    title: "BC Hacks event graphics",
    description:
      "Event flyer, banner, and judging rubric from my BC Hacks design materials.",
    images: [
      {
        title: "Event flyer",
        src: "/work/design/bc-flyer.webp",
        alt: "Purple BC Hacks event flyer with a dinosaur mascot and registration information",
      },
      {
        title: "Event banner",
        src: "/work/design/bc-banner.webp",
        alt: "BC Hacks 2025 banner featuring an orange fox mascot",
      },
      {
        title: "Judging rubric",
        src: "/work/design/bc-rubric.webp",
        alt: "BC Hacks judging rubric arranged as a purple table",
      },
    ],
  },
  {
    title: "BC Hacks sticker collections",
    description:
      "Dinosaur and fox mascot sticker designs for BC Hacks, including the 2025 collection.",
    images: [1, 2, 3, 4, 5]
      .map((i) => ({
        title: `Dinosaur sticker ${i}`,
        src: `/work/design/bc-dinosaur-${i}.webp`,
        alt: `Purple dinosaur BC Hacks sticker design ${i}`,
      }))
      .concat(
        [1, 2, 3, 4].map((i) => ({
          title: `2025 fox sticker ${i}`,
          src: `/work/design/bc-fox-${i}.webp`,
          alt: `Orange fox BC Hacks 2025 sticker design ${i}`,
        })),
      ),
  },
  {
    title: "Bellevue Indonesian Club posters",
    description: "Posters for student club gatherings and events.",
    images: [
      {
        title: "Spring gathering",
        src: "/work/design/bic-spring.webp",
        alt: "Bellevue Indonesian Club spring gathering poster with a floral border",
      },
      {
        title: "Lunar New Year",
        src: "/work/design/bic-new-year.webp",
        alt: "Bellevue Indonesian Club Lunar New Year event poster in red and yellow",
      },
      {
        title: "Gift exchange",
        src: "/work/design/bic-gift.webp",
        alt: "Bellevue Indonesian Club gift exchange and dinner poster",
      },
    ],
  },
  {
    title: "Digital illustration & game art",
    description:
      "A digital character illustration and the character and background artwork from Galaxy Cat.",
    images: [
      {
        title: "Digital character illustration",
        src: "/work/design/digital-drawing.webp",
        alt: "Digital illustration of a character wearing headphones, surrounded by musical notes",
      },
      {
        title: "Galaxy Cat character",
        src: "/work/design/galaxy-character.webp",
        alt: "Purple cat character wearing a space helmet",
      },
      {
        title: "Galaxy Cat background",
        src: "/work/design/galaxy-background.webp",
        alt: "Purple illustrated space background with stars, a crescent moon, and a ringed planet",
      },
    ],
  },
];

// Exact accuracy values transcribed from Table 1 of FER_Poster.pdf.
// Validation and held-out test results are kept separate.
export const ferResults = [
  { model: "ResNet-50", validation: 62.1, test: 47.0 },
  { model: "CNN+Transformer", validation: 69.2, test: 53.7 },
  { model: "CNN+Transformer (No PE)", validation: 68.3, test: 57.0 },
  { model: "CNN+BiLSTM", validation: 71.2, test: 57.3 },
];
