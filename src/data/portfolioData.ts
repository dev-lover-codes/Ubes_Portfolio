export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  year: string
  timeline?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  summary: string
  architectureNodes?: { label: string; description: string }[]
  highlights: string[]
  category: 'ai-ml' | 'systems' | 'data' | 'web'
}

export interface ArchiveProject {
  id: string
  title: string
  subtitle: string
  year: string
  month?: string
  technologies: string[]
  githubUrl?: string
  description: string
  patternsOrFeatures?: string[]
}

export interface Certification {
  title: string
  issuer: string
  status?: string
  type: 'certification' | 'simulation' | 'course'
}

export interface SkillCategory {
  name: string
  tagline: string
  skills: string[]
}

export const PERSONAL_INFO = {
  name: 'Sankalp S Patil',
  firstName: 'SANKALP',
  lastName: 'PATIL',
  role: 'Computer Science Engineer',
  positioning: 'Computer Science Engineer | AI/ML & Full-Stack Developer',
  location: 'Bengaluru, India',
  university: 'Dayananda Sagar University',
  degree: 'Bachelor of Technology — Computer Science & Engineering',
  graduationYear: '2028',
  cgpa: '8.3 / 10',
  currentYear: 'Computer Science Student',
  email: 'sankalppatil24may@gmail.com',
  phone: '+91 7348818855',
  github: 'https://github.com/SankalpPatil7',
  linkedin: 'https://www.linkedin.com/in/sankalp-patil-426580318/',
  leetcode: 'https://leetcode.com/u/Sankalp_Patil/',
  summary:
    "I'm a Computer Science student who enjoys building things, solving problems, and learning by doing. I'm particularly interested in software development, data, machine learning, and generative AI.",
  statementBig: "I LIKE TURNING IDEAS INTO THINGS PEOPLE CAN ACTUALLY USE.",
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ledgr',
    number: '01',
    title: 'LEDGR',
    subtitle: 'AI-Powered Finance Controller & Auditor',
    year: '2026',
    technologies: ['Python', 'FastAPI', 'SQLite', 'Machine Learning', 'NVIDIA NIM / LLM'],
    githubUrl: 'https://github.com/SankalpPatil7/Ledgr---Finance-AI',
    liveUrl: 'https://ledgr-finance-ai.vercel.app/',
    summary:
      'An AI-powered finance controller for auditing transactions, settlements, and merchant activity.',
    architectureNodes: [
      { label: 'DATABASE & INGEST', description: 'SQLite transactional engine parsing merchants, settlements, and dispute ledgers.' },
      { label: 'DATA QUALITY', description: 'Real-time schema profiling, completeness checks, and integrity audits.' },
      { label: 'RECONCILIATION', description: 'Multi-way automated ledger matching across refunds, disputes, and fee schedules.' },
      { label: 'ANOMALY DETECTION', description: 'Hybrid engine combining domain financial rules with IsolationForest outlier modeling.' },
      { label: 'RISK SCORING', description: 'Dynamic merchant risk categorization and behavioral flag indexing.' },
      { label: 'NVIDIA NIM / LLM', description: 'Natural-language queries over financial databases, what-if simulations, and automated case reporting.' },
    ],
    highlights: [
      'Hybrid anomaly detection: Domain rule engine + IsolationForest ML models',
      'NVIDIA NIM / LLM-powered natural-language financial querying',
      'Automated settlement reconciliation across refunds, dispute fees, and merchant payouts',
      'Merchant risk evaluation, data-quality profiling, and automated audit reporting',
      'Database snapshot comparison & what-if financial simulations',
    ],
    category: 'ai-ml',
  },
  {
    id: 'resonix',
    number: '02',
    title: 'RESONIX',
    subtitle: 'Social Engagement Analytics Platform',
    year: '2026',
    timeline: 'Aug 2026 – Sep 2026',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SciPy',
      'TextBlob',
      'spaCy',
      'Plotly',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/SankalpPatil7/Resonix-Social-Engagement-Analytics',
    liveUrl: 'https://sankalppatil7-resonix-social-engagement-ana-dashboardapp-izgguh.streamlit.app/',
    summary:
      'A social analytics platform for understanding content performance, audience sentiment, experiments, and trends.',
    architectureNodes: [
      { label: 'CONTENT METRICS', description: 'Engagement metrics, viral coefficient calculation, and performance scoring.' },
      { label: 'AUDIENCE SIGNALS', description: 'Topic clustering, format analysis, and hook-type classification.' },
      { label: 'NLP SENTIMENT', description: 'Linguistic polarity and subjectivity pipeline using TextBlob & spaCy.' },
      { label: 'SCIPY EXPERIMENTS', description: 'Rigorous A/B hypothesis testing and statistical confidence verification.' },
      { label: 'TREND FORECASTING', description: 'Time-series momentum indicators and growth trajectory modeling.' },
      { label: 'RECOMMENDATION', description: 'Data-driven content strategy advice and publishing timing optimization.' },
    ],
    highlights: [
      'Viral coefficient analysis & multidimensional content ranking',
      'Dual-engine NLP sentiment pipeline powered by TextBlob and spaCy',
      'Hypothesis testing & A/B performance verification with SciPy',
      'Trend forecasting, format retention analysis, and recommendation generation',
      'Interactive Streamlit web interface connected to a PostgreSQL database with Plotly visuals',
    ],
    category: 'data',
  },
  {
    id: 'hotel-intelligence',
    number: '03',
    title: 'HOTEL GUEST INTELLIGENCE',
    subtitle: 'Revenue Optimization & Booking Cancellation Analysis',
    year: '2026',
    technologies: ['RapidMiner', 'Power BI', 'Machine Learning', 'Data Mining'],
    githubUrl: 'https://github.com/SankalpPatil7/Hotel-booking-analysis-ml',
    summary:
      'Using hotel booking data to understand cancellations, guest behavior, and revenue opportunities.',
    architectureNodes: [
      { label: 'DATA PREPROCESSING', description: 'Outlier cleaning, lead-time normalization, and categorical feature encoding.' },
      { label: 'CLASSIFICATION PIPELINE', description: 'Supervised predictive modeling to determine cancellation probability.' },
      { label: 'BEHAVIORAL PROFILING', description: 'Guest segmentation based on booking channels, deposit types, and party size.' },
      { label: 'SEASONAL DYNAMICS', description: 'Peak vs. shoulder demand forecasting and room-night revenue sensitivity.' },
      { label: 'POWER BI DASHBOARDS', description: 'Interactive decision-support views for revenue managers and operational staff.' },
    ],
    highlights: [
      'Supervised classification models predicting reservation cancellation risks',
      'Lead-time distribution analysis and customer behavior profiling',
      'Seasonal trend decomposition for room demand and occupancy forecasting',
      'Data-driven insights to mitigate empty-room losses and optimize pricing',
      'End-to-end ML workflows built in RapidMiner with Power BI dashboards',
    ],
    category: 'ai-ml',
  },
  {
    id: 'groupdna',
    number: '04',
    title: 'GROUPDNA',
    subtitle: 'WhatsApp Chat Behavioral Analytics System',
    year: '2026',
    technologies: ['Python', 'NumPy', 'datetime'],
    githubUrl: 'https://github.com/SankalpPatil7/GroupDNA-WhatsApp-Chat-Analyzer',
    summary:
      'Turning exported group conversations into patterns around activity, timing, and interaction.',
    architectureNodes: [
      { label: 'CHAT PARSER', description: 'Parses exported chat text, system notices, deletions, and multiline messages.' },
      { label: 'ACTIVITY METRICS', description: 'Timestamp analysis isolating hourly frequency, busiest days, and active windows.' },
      { label: 'NUMPY HEATMAP', description: 'Activity density matrix mapping engagement frequency across hours and days.' },
      { label: 'RESPONSE LATENCY', description: 'Turn-taking calculations, reply intervals, and longest silence streaks.' },
      { label: 'ARCHETYPE DETECTION', description: 'Rule-based classification identifying conversational patterns and roles.' },
    ],
    highlights: [
      'Parsing of exported chat streams with handling for media and multiline text',
      'NumPy activity heatmap mapping hourly and daily interaction patterns',
      'Participant response-time analysis, active hours, and quiet periods',
      'Word-frequency indexing with customizable stop-word exclusion',
      'Rule-based conversational archetype detection producing structured reports',
    ],
    category: 'systems',
  },
]

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: 'redflag-sql',
    title: 'RedFlag SQL — Financial Fraud Detection',
    subtitle: 'Transaction monitoring & behavioral anomaly queries',
    year: '2026',
    technologies: ['MySQL', 'SQL Window Functions', 'CTEs', 'Data Aggregation'],
    githubUrl: 'https://github.com/SankalpPatil7/Redflag-sql-fraud-detection',
    description:
      'Analyzed a financial dataset of ~200,000 transactions to uncover fraudulent user and merchant operations across 12 behavioral patterns.',
    patternsOrFeatures: [
      'Velocity Fraud: 30+ transactions within 24 hours (COUNT, GROUP BY, HAVING)',
      'Round-Amount Clustering: Detection of structured structuring amounts',
      'Account Takeover Patterns: Sudden geographic shifts and device anomalies',
      'Merchant-User Relationship Anomalies: High-frequency single-merchant loops',
      'Refund & Failed Transaction Spikes: Rapid failure escalation alerts',
    ],
  },
  {
    id: 'bank-txn-analysis',
    title: 'Bank Transaction Analysis System',
    subtitle: 'Automated statement normalization & Z-score analytics',
    year: '2026',
    technologies: ['Python', 'Pandas', 'Z-Score Analysis', 'Data Cleaning'],
    githubUrl: 'https://github.com/SankalpPatil7/Bank-transaction-analysis-system',
    description:
      'A data analytics system that cleans raw bank statements, standardizes currency formats, extracts normalized merchant names, and isolates unusual transactions using statistical Z-scores.',
    patternsOrFeatures: [
      'Raw statement data cleaning: Date standardizing, currency stripping (₹, Rs.)',
      'Merchant name extraction & normalization via keyword dictionary matching',
      '10-category expense classification (Shopping, Utilities, Groceries, Transport, etc.)',
      'Net savings, savings rate, and temporal time-of-day spending distribution',
      'Z-score anomaly detection flags high-value unexpected outflows',
    ],
  },
  {
    id: 'job-finder',
    title: 'Job Finder Application',
    subtitle: 'Full-stack role discovery and filtered search engine',
    year: '2025',
    month: 'Oct 2025',
    technologies: ['JavaScript', 'Node.js', 'SQL', 'HTML', 'CSS'],
    description:
      'Developed a full-stack job discovery application enabling users to query roles based on technical skills, locations, and titles with database persistence for saved listings.',
    patternsOrFeatures: [
      'Structured SQL database queries for skill, location, and title filters',
      'User saved-job bookmarking with persistent database storage',
      'Accessible, clean interface designed with semantic HTML and CSS',
      'Modular Node.js server architecture with object-oriented service organization',
    ],
  },
  {
    id: 'monthly-expense-tracker',
    title: 'Monthly Expense Tracker',
    subtitle: 'Categorized expenditure recording & budget analytics',
    year: '2025',
    month: 'Aug 2025',
    technologies: ['Python', 'SQL', 'Data Analytics'],
    description:
      'Engineered a personal financial recording system to track daily expenditures, categorize outflow streams, and generate month-over-month summaries.',
    patternsOrFeatures: [
      'Structured expenditure logging with categorization engine',
      'Relational database storage and transactional integrity',
      'Month-wise spending pattern analysis and financial planning indicators',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'LANGUAGES',
    tagline: 'Languages I use across my projects.',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    name: 'CORE COMPUTER SCIENCE',
    tagline: 'Core concepts that shape how I build software.',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
    ],
  },
  {
    name: 'AI & MACHINE LEARNING',
    tagline: 'Machine learning, data science, NLP, and generative AI.',
    skills: [
      'Machine Learning',
      'Generative AI',
      'Data Science',
    ],
  },
  {
    name: 'DATA & ANALYTICS',
    tagline: 'Working with data, analysis, and visualization.',
    skills: ['NumPy', 'Pandas', 'Power BI', 'RapidMiner', 'NoSQL'],
  },
  {
    name: 'WEB DEVELOPMENT',
    tagline: 'Building interfaces and backend applications.',
    skills: ['HTML', 'CSS', 'Node.js'],
  },
  {
    name: 'ENGINEERING TOOLS',
    tagline: 'Tools I use to build and manage projects.',
    skills: ['Git', 'GitHub'],
  },
]

export const EVOLUTION_TIMELINE = [
  {
    period: '2025',
    phase: 'LEARNING THE FOUNDATIONS',
    description:
      'Learning the fundamentals of programming, databases, and application development by building projects.',
    milestones: [
      {
        title: 'Monthly Expense Tracker',
        date: 'Aug 2025',
        focus: 'Data persistence, financial categorization, and SQL query design',
      },
      {
        title: 'Job Finder Application',
        date: 'Oct 2025',
        focus: 'Full-stack web architecture, Node.js, and multi-criteria query optimization',
      },
    ],
  },
  {
    period: '2026',
    phase: 'EXPLORING DATA & MACHINE LEARNING',
    description:
      'Exploring data analysis, machine learning, and ways to turn unstructured data into useful insights.',
    milestones: [
      {
        title: 'Hotel Guest Intelligence',
        date: '2026',
        focus: 'RapidMiner classification models, booking cancellation predictions, and Power BI dashboards',
      },
      {
        title: 'GroupDNA Behavioral Analytics',
        date: 'Jun 2026',
        focus: 'WhatsApp export stream parsing, NumPy activity heatmaps, and conversational archetypes',
      },
      {
        title: 'RedFlag SQL Fraud Detection',
        date: 'Aug 2026',
        focus: '200k financial transaction audit, CTEs, window functions, and 12 velocity/fraud patterns',
      },
      {
        title: 'Bank Transaction Analysis',
        date: 'Jul 2026',
        focus: 'Pandas data cleaning, vendor normalization, and Z-score outlier detection',
      },
    ],
  },
  {
    period: '2026 PRESENT',
    phase: 'BUILDING MORE COMPLEX SYSTEMS',
    description:
      'Bringing together software, data, machine learning, and AI in larger projects.',
    milestones: [
      {
        title: 'ResoniX Social Intelligence',
        date: 'Aug–Sep 2026',
        focus: 'Dual-engine NLP (TextBlob + spaCy), SciPy A/B testing, and PostgreSQL analytics',
      },
      {
        title: 'LEDGR AI Finance Controller',
        date: 'Sep 2026',
        focus: 'FastAPI, IsolationForest hybrid anomalies, settlement reconciliation, and NVIDIA NIM querying',
      },
    ],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'TATA / Forage',
    type: 'simulation',
  },
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Springboard / Infosys',
    type: 'certification',
  },
  {
    title: 'Data Visualization using Power BI',
    issuer: 'Infosys TechA Certification',
    type: 'certification',
  },
  {
    title: 'Machine Learning Professional Certification',
    issuer: 'RapidMiner',
    type: 'certification',
  },
  {
    title: 'NoSQL & Artificial Intelligence',
    issuer: 'Springboard / Infosys',
    type: 'certification',
  },
  {
    title: 'Data Science & Generative AI',
    issuer: 'Industry Specialization',
    status: 'In Progress',
    type: 'course',
  },
]
