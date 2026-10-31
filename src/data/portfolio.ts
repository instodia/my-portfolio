/**
 * Central portfolio data for Shivanshu Shukla.
 * Every section and component reads from this single source of truth.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shivanshu Shukla',
  displayName: 'Shivanshu Shukla',
  firstName: 'SHIVANSHU',
  seriesTag: 'PORTFOLIO',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN INSTODIA ORIGINAL',
  role: 'Full-Stack Developer Using AI',
  tagline: ['Full-Stack Developer', 'Applied AI', 'Vulnerability Analysis'],
  intro:
    'Full-stack developer building production-grade products with a security-aware eye — campus systems, automation platforms, and AI-assisted shipping with Next.js, React, Node.js, TypeScript, PostgreSQL, and Redis.',
  headline:
    'I build full-stack products with a security-aware eye — campus systems, automation, and AI-assisted shipping.',
  location: 'Lucknow, India',
  availability: 'Open to internships and work',
  email: 'shivanshu.cyou@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shivanshu-shukla-/',
    github: 'https://github.com/instodia',
  },
  resumePdf: '/assets/Shivanshu_Resume.pdf',
  resumeImage: '/assets/resume-preview.webp',
  resumeImagePng: '/assets/resume-preview.png',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Shivanshu Shukla',
  },
  interests: ['Vulnerability Analysis', 'Applied AI Systems', 'Real-Time System Architecture'],
};

export const education = [
  {
    school: 'BBD Institute of Technology and Management',
    place: 'Lucknow',
    degree: 'Bachelor of Technology — Computer Science (AI & ML)',
    period: '2025 – Present',
    score: '2nd Year',
  },
  {
    school: 'UP Board (Intermediate)',
    place: 'Bahraich, UP',
    degree: 'Class 12 (Science stream)',
    period: 'Passed 2025',
    score: 'Score 80%',
  },
  {
    school: 'UP Board (High School)',
    place: 'Bahraich, UP',
    degree: 'Class 10 (Secondary School)',
    period: 'Passed 2023',
    score: 'Score 90%',
  },
];

export const experience = [
  {
    company: 'Freelance & Client Engineering',
    role: 'Freelance Full-Stack Developer',
    place: 'Remote / India',
    period: '2024 – Present',
    points: [
      'Engineered and deployed 10+ custom web applications and fast-turnaround e-commerce stores for commercial clients, integrating dynamic product listings, category filters, and live search.',
      'Implemented automated direct-order flows, checkout funnels, and payment workflows via WhatsApp API, Instagram DM automation, and Razorpay/Cashfree, cutting drop-off by 35%.',
      'Developed responsive, high-conversion web frontends utilizing Next.js, React, HTML5, and CSS3, achieving 95+ Google Lighthouse scores across devices.',
      'Managed full client lifecycles: requirement discovery, database schema design (PostgreSQL/MongoDB), DNS/domain routing, and CI/CD hosting on Vercel and Render.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fastreply-insta-automation',
    title: 'Insta DM Automation',
    year: '2026',
    genre: 'Full-Stack • Meta Graph API • Real-Time Delivery',
    logline: 'Comment-to-DM platform built on Meta Graph APIs with webhooks and multi-account workspaces.',
    stack: ['Next.js 16', 'TypeScript 5', 'PostgreSQL', 'Prisma 7', 'Meta Graph API v25.0'],
    build: [
      'Engineered comment-to-DM automation leveraging Meta Graph API v25.0 with real-time webhooks, Messenger API integration, and automated conversion workflows.',
      'Built multi-account workspace management, live unified inbox, and session management using Next.js 16 App Router with Meta OAuth 2.0.',
      'Architected direct real-time webhook dispatch delivering Instagram messages instantly with sub-second latency, backed by PostgreSQL via Prisma 7.',
    ],
    features: [
      'Real-time Instagram Webhooks & Messenger API v25.0',
      'Automated Comment-to-DM trigger workflows',
      'Instant sub-second message delivery without queue delays',
      'Multi-account workspaces with live unified inbox',
      'Meta OAuth 2.0 authentication',
      'PostgreSQL schema with Prisma 7 ORM persistence',
    ],
    metrics: [
      { value: 'v25.0', label: 'Meta Graph API' },
      { value: 'Instant', label: 'Real-time DM dispatch' },
      { value: 'Next.js 16', label: 'App Router' },
      { value: 'Multi-Tenant', label: 'Workspace isolation' },
    ],
    github: 'https://github.com/instodia',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'college-erp',
    title: 'College ERP System',
    year: '2025',
    genre: 'Full-Stack • Campus Systems • Operations',
    logline: 'Central campus operations layer for student records, attendance, and role-aware administrative workflows.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    build: [
      'Architected central campus operations layer digitizing student records, academic tracking, and department administrative workflows.',
      'Implemented role-aware access controls (RBAC) across student, faculty, and administrative tiers, preventing unauthorized data modification.',
      'Structured high-efficiency MongoDB schemas for rapid querying and reporting across campus records.',
    ],
    features: [
      'Central student records repository',
      'Role-aware administrative workflows (RBAC)',
      'Academic & department management modules',
      'Custom reporting and administrative dashboard',
    ],
    metrics: [
      { value: 'Role-Based', label: 'Multi-tier RBAC access' },
      { value: 'Zero-Paper', label: 'Campus record digitization' },
      { value: 'Fast Query', label: 'Optimized MongoDB indexing' },
      { value: 'Secure', label: 'Administrative boundaries' },
    ],
    github: 'https://github.com/instodia',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'smart-attendance-system',
    title: 'Smart Attendance System',
    year: '2025',
    genre: 'Full-Stack • Digital Verification • Data Analytics',
    logline: 'Structured digital attendance capture and reporting system designed to sit alongside campus ERP workflows.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    build: [
      'Developed structured digital attendance capture engine preventing proxy attendance and expediting lecture-by-lecture record logging.',
      'Created automated reporting pipelines that flag attendance shortfalls and sync with central student evaluation profiles.',
      'Integrated lightweight REST endpoints for instant retrieval by faculty and students under concurrent classroom sessions.',
    ],
    features: [
      'Digital attendance capture & validation',
      'Session-by-session automated tallying',
      'Attendance deficit alerts & analytics',
      'Seamless compatibility with College ERP',
    ],
    metrics: [
      { value: 'Instant', label: 'Attendance capture & logging' },
      { value: '0-Proxy', label: 'Validation checks' },
      { value: 'Real-Time', label: 'Student deficit alerts' },
      { value: 'Integrated', label: 'Campus ERP synchronization' },
    ],
    github: 'https://github.com/instodia',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-2026',
    title: 'Shortlisted — SIH 2026',
    org: 'Smart India Hackathon',
    detail: 'Shortlisted at the institute level to represent BBDITM for the national Smart India Hackathon 2026 challenge.',
    laurel: 'National Shortlist',
    link: 'https://github.com/instodia',
  },
  {
    id: 'hackfest-2026',
    title: 'HackFest 2026 Volunteer',
    org: 'GDG × Craftora × OSEN',
    detail: 'Volunteered in organizing hackathon operations, attendee management, and developer onboarding.',
    laurel: 'Community & Event Lead',
    link: 'https://github.com/instodia',
  },
  {
    id: 'freelance-impact',
    title: '10+ Client Deployments',
    org: 'Freelance Full-Stack',
    detail: 'Shipped 10+ custom client websites and high-conversion e-commerce stores with automated DM/WhatsApp checkout.',
    laurel: 'Production Impact',
    link: 'https://github.com/instodia',
  },
  {
    id: 'campus-systems',
    title: 'Campus Systems Architect',
    org: 'College ERP & Attendance',
    detail: 'Designed and deployed central campus operations layer for student records, attendance, and role-based workflows.',
    laurel: 'Full-Stack Campus Suite',
    link: 'https://github.com/instodia',
  },
  {
    id: 'academic-excellence-10',
    title: '90% Academic High',
    org: 'UP Board Examinations',
    detail: 'Demonstrated academic excellence with a 90% aggregate score in secondary examinations from Bahraich in 2023.',
    laurel: '90% in Class 10',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Meta', name: 'Meta Graph API & Instagram Messenger Automation', link: 'https://github.com/instodia' },
  { issuer: 'Full-Stack', name: 'Next.js 16 (App Router) & React 19 Architecture', link: 'https://github.com/instodia' },
  { issuer: 'Databases', name: 'PostgreSQL & MongoDB Database Engineering', link: 'https://github.com/instodia' },
  { issuer: 'Real-Time', name: 'Direct Real-Time Webhook Message Dispatch', link: 'https://github.com/instodia' },
  { issuer: 'Security', name: 'Web Application Vulnerability Analysis & RBAC', link: 'https://github.com/instodia' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'web-frameworks',
    title: 'Web & Frameworks',
    subtitle: 'Modern interfaces & application runtimes',
    skills: [
      { name: 'Next.js', mono: 'Nx' },
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'databases-storage',
    title: 'Databases & Storage',
    subtitle: 'Persistence, caching & data schemas',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'Prisma ORM', mono: 'Pr' },
    ],
  },
  {
    id: 'deployment-tooling',
    title: 'Deployment & Tooling',
    subtitle: 'Shipping, pipelines & version control',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Render', mono: 'Rn' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'focus-areas',
    title: 'Core Focus & AI',
    subtitle: 'Specializations & applied paradigms',
    skills: [
      { name: 'Applied AI', mono: 'Ai' },
      { name: 'Vulnerability Analysis', mono: 'Sc' },
      { name: 'Meta Graph API', mono: 'Mg' },
      { name: 'NextAuth / Auth.js', mono: 'Au' },
      { name: 'RBAC Security', mono: 'Rb' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in projects, architecture, or academic focus.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['College ERP', 'Smart Attendance System', 'Node.js runtime'],
  TypeScript: ['Insta DM Automation', 'Next.js 16 full-stack'],
  Python: ['B.Tech AI & ML', 'Data & Automation scripts'],
  C: ['CS Fundamentals & Systems Programming'],
  'Next.js': ['Insta DM Automation - App Router'],
  React: ['Full-stack web applications', 'Component architecture'],
  'Node.js': ['College ERP', 'Smart Attendance System', 'Backend microservices'],
  HTML5: ['College ERP', 'Smart Attendance System'],
  CSS3: ['College ERP', 'Smart Attendance System'],
  MongoDB: ['College ERP', 'Smart Attendance System'],
  PostgreSQL: ['Insta DM Automation via Prisma 7'],
  Redis: ['Session & state caching'],
  'Prisma ORM': ['Schema design & database migrations'],
  Git: ['Version control across all production repositories'],
  GitHub: ['github.com/instodia'],
  Vercel: ['Cloud deployments & CDN'],
  Render: ['Backend web service hosting & databases'],
  'Applied AI': ['AI-assisted development & B.Tech AI & ML specialization'],
  'Vulnerability Analysis': ['Security-aware architecture & access boundaries'],
  'Meta Graph API': ['Instagram Webhooks & Messenger API v25.0'],
  'NextAuth / Auth.js': ['NextAuth v5 Meta OAuth 2.0 integration'],
  'RBAC Security': ['College ERP multi-role administrative access control'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2025',
    synopsis: 'Schooling in Bahraich, UP — establishing academic excellence in Science and Mathematics under UP Board.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Scholar',
        description: 'Achieved 90% in Class 10 High School Board Examinations (UP Board, Bahraich) in 2023.',
        tags: ['UP Board', '90% Score', 'Bahraich'],
        runtime: '2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Pre-Engineer',
        description: 'Completed Class 12 Intermediate (Science stream, UP Board, Bahraich) with 80% aggregate in 2025.',
        tags: ['UP Board', '80% Score', 'Science'],
        runtime: '2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'The Campus Systems',
    period: '2025',
    synopsis: 'Building full-stack campus infrastructure for student records, attendance, and administrative workflows.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'College ERP',
        description: 'Architected central operations layer for student records, attendance, and role-aware administrative workflows.',
        tags: ['Node.js', 'Express', 'MongoDB', 'RBAC'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Smart Attendance',
        description: 'Engineered digital attendance capture and reporting system designed to sit alongside campus ERP.',
        tags: ['JavaScript', 'MongoDB', 'Digital Capture'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Automation & Meta Graph',
    period: '2026',
    synopsis: 'Next-generation comment-to-DM platform built on Meta Graph APIs with modern Next.js 16 and PostgreSQL.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Insta DM: The Instagram Engine',
        description: 'Built comment-to-DM platform leveraging Meta Graph API v25.0, webhooks, and live messenger inboxes.',
        tags: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Instant Delivery & Scale',
        description: 'Architected direct real-time webhook dispatch delivering messages with sub-second latency.',
        tags: ['Real-Time', 'Direct Webhooks', 'Sub-Second'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Horizon',
    period: '2025 – Present',
    synopsis: 'B.Tech in Computer Science (AI & ML) at BBDITM Lucknow — exploring vulnerability analysis and applied AI.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'B.Tech AI & ML',
        description: '2nd Year Computer Science student at BBD Institute of Technology and Management, Lucknow.',
        tags: ['BBDITM', '2nd Year', 'AI & ML'],
        runtime: 'Current',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Security-Aware Shipping',
        description: 'Deepening vulnerability analysis, defensive system architecture, and AI-assisted engineering.',
        tags: ['Vulnerability Analysis', 'Applied AI', 'Open to Internships'],
        runtime: 'Streaming now',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Featured Original', title: 'Insta DM Automation', detail: 'Meta Graph API v25.0 • Webhooks & Live Inbox', palette: crimson },
  { label: 'National Stage', title: 'SIH 2026 Shortlist', detail: 'Smart India Hackathon • BBDITM', palette: ocean },
  { label: 'Community Lead', title: 'HackFest 2026', detail: 'Event Volunteer • GDG × Craftora × OSEN', palette: violet },
  { label: 'Campus Suite', title: 'College ERP', detail: 'Role-aware administration & student records', palette: ocean },
  { label: 'Campus Suite', title: 'Smart Attendance', detail: 'Digital capture & automated reporting', palette: amber },
  { label: 'Primary Language', title: 'TypeScript & JavaScript', detail: 'Next.js 16 • React 19 • Node.js', palette: violet },
  { label: 'Academic High', title: '90% in Class 10', detail: 'UP Board, Bahraich • High School', palette: jade },
  { label: 'Academic High', title: '80% in Class 12', detail: 'UP Board, Bahraich • Science stream', palette: amber },
  { label: 'Current Degree', title: 'B.Tech CS (AI & ML)', detail: 'BBDITM, Lucknow • 2nd Year', palette: ocean },
  { label: 'Availability', title: 'Open to Work', detail: 'Internships and full-stack engineering roles', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Starring',
    title: 'Shivanshu Shukla',
    lines: ['Full-stack developer using AI', 'Based in Lucknow, India • Open to internships & work'],
    chips: ['Full-Stack', 'Applied AI', 'Vulnerability Analysis'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · CS (AI & ML)',
    lines: ['BBD Institute of Technology and Management, Lucknow', '2nd Year (2025 – Present)'],
    chips: ['BBDITM', 'AI & ML', 'Lucknow'],
  },
  {
    kicker: 'Stack',
    title: 'Modern Full-Stack',
    lines: ['Next.js 16, React 19, TypeScript, Node.js', 'PostgreSQL, Prisma, MongoDB, Redis'],
    chips: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    kicker: 'Originals',
    title: 'Production Systems',
    lines: [
      'Insta DM Automation — Comment-to-DM Meta Graph API automation',
      'College ERP — Central campus operations & role-based workflows',
      'Smart Attendance — Digital attendance capture & analytics',
    ],
  },
  {
    kicker: 'Security',
    title: 'Security-Aware Eye',
    lines: ['Vulnerability analysis & role-based access control', 'Defensive full-stack architecture and AI-assisted shipping'],
  },
  {
    kicker: 'Availability',
    title: 'Now Streaming',
    lines: ['Open to internships, freelance & full-stack roles', 'Ready to build impactful, resilient products'],
  },
];

export type ProfileId = 'shivanshu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shivanshu',
    name: 'Shivanshu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Background & Focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Featured Works`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
