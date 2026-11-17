import type { Experience, Education, Organization, LanguageCert } from '../types';

/**
 * Professional experience data styled as "Confidant / Social Link" entries.
 * Derived from official CV.
 */
export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PT Telkom Indonesia, Surabaya',
    role: 'Backend Developer (Internship)',
    rank: 9,
    start_date: '2024-07-01',
    end_date: '2024-09-30',
    description:
      "Developed and maintained Django (Python) backend services for the 'Growth' web-based monitoring dashboard, ensuring reliable system performance. Designed and structured relational database architecture to optimize project contract tracking and operational reporting. Utilized Git version control to collaborate efficiently with developer teams, conduct code maintenance, and execute debugging. Integrated Django backend into React.js frontend and optimized dataflow across frontend, backend, and database.",
    skills_unlocked: [
      'Django (Python)',
      'Relational SQL Architecture',
      'React.js Integration',
      'API Dataflow Optimization',
      'Git Version Control',
    ],
  },
  {
    id: 2,
    company: 'PT Bank Negara Indonesia (Persero) Tbk',
    role: 'Digital Assistant (Internship)',
    rank: 8,
    start_date: '2025-10-01',
    end_date: '2026-04-30',
    description:
      'Provided technical support, troubleshooting, and digital guidance for mobile banking application users (Wondr by BNI). Assisted in resolving customer technical issues for BNI e-channel transactions, ensuring seamless adoption of digital financial tools and system security standards.',
    skills_unlocked: [
      'Technical Troubleshooting',
      'Mobile Banking Support (Wondr by BNI)',
      'E-Channel Operations',
      'System Security Standards',
    ],
  },
  {
    id: 3,
    company: 'PT Telkom Indonesia, Surabaya',
    role: 'Invoicing Admin (Internship)',
    rank: 7,
    start_date: '2024-07-01',
    end_date: '2024-09-30',
    description:
      'Managed administrative documentation and verification for project contracts using MyDX invoice platform, maintaining high precision and data integrity.',
    skills_unlocked: [
      'MyDX Invoice Platform',
      'Contract Verification',
      'Data Integrity Management',
      'Administrative Workflows',
    ],
  },
];

/**
 * Academic education data from CV.
 */
export const education: Education[] = [
  {
    id: 1,
    institution: 'Universitas Airlangga, Surabaya',
    degree: 'Bachelor of Information Systems (S1)',
    field: 'Information Systems',
    start_year: 2021,
    end_year: 2025,
    gpa: '3.44 / 4.00',
    description:
      'GPA: 3.44 / 4.00 | Relevant Coursework: Software Engineering, Database Systems, Machine Learning, Data Analytics, NLP.',
  },
];

/**
 * Organizational leadership experience from CV.
 */
export const organizations: Organization[] = [
  {
    id: 1,
    role: 'Head of Sport and Artistry',
    organization: 'HIMA Sistem Informasi Universitas Airlangga',
    period: 'Dec 2022 — Feb 2024',
    description:
      'Led program execution, team coordination, and departmental performance evaluation.',
  },
];

/**
 * Language proficiencies and certifications from CV.
 */
export const languageCerts: LanguageCert[] = [
  { name: 'English (TOEIC)', scoreOrLevel: 'Score: 840' },
  { name: 'English (ELPT)', scoreOrLevel: 'Score: 555' },
  { name: 'Bahasa Indonesia', scoreOrLevel: 'Native' },
];
