export const JOBS = [
  {
    id: 1,
    title: "Medical Scribe",
    company: "Austin Regional Clinic",
    location: "Austin, TX",
    pay: "$14–$17/hr",
    type: "scribe",
    description:
      "Document physician-patient encounters in real time using EHR software. Perfect for pre-med or medical students seeking clinical exposure. Flexible shifts available on evenings and weekends. Training provided — no prior experience required.",
    posted: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    title: "Medical Assistant (Part-Time)",
    company: "Houston Family Medicine",
    location: "Houston, TX",
    pay: "$16–$19/hr",
    type: "ma",
    description:
      "Assist with patient intake, vitals, phlebotomy, and EKGs in a busy outpatient family medicine clinic. Part-time shifts available, ideal for gap year students. MA certification or equivalent coursework preferred.",
    posted: "3 days ago",
    featured: true,
  },
  {
    id: 3,
    title: "MCAT Tutor",
    company: "Blueprint Test Prep",
    location: "Remote",
    pay: "$25–$40/hr",
    type: "tutoring",
    description:
      "Tutor pre-med students preparing for the MCAT. Set your own hours and work fully remote. Strong MCAT score (515+) and prior tutoring or teaching experience preferred. Flexible to fit around your rotation schedule.",
    posted: "5 days ago",
    featured: false,
  },
  {
    id: 4,
    title: "Clinical Research Coordinator",
    company: "UT Southwestern Medical Center",
    location: "Dallas, TX",
    pay: "$18–$22/hr",
    type: "research",
    description:
      "Coordinate oncology clinical trials including patient screening, data entry, and IRB documentation. Great opportunity to gain meaningful research experience during your gap year. 20–25 hrs/week, schedule is flexible.",
    posted: "1 week ago",
    featured: false,
  },
  {
    id: 5,
    title: "Emergency Department Scribe",
    company: "Memorial Hermann Hospital",
    location: "Houston, TX",
    pay: "$13–$16/hr",
    type: "scribe",
    description:
      "Fast-paced ED scribing role. Work alongside EM physicians documenting complex cases including trauma, acute presentations, and procedures. Night and weekend shifts available. Letter of recommendation possible for strong performers.",
    posted: "1 week ago",
    featured: false,
  },
  {
    id: 6,
    title: "Anatomy & Physiology Tutor",
    company: "Rice University Learning Center",
    location: "Houston, TX",
    pay: "$22–$30/hr",
    type: "tutoring",
    description:
      "Provide one-on-one and small group tutoring for undergraduate A&P students. On-campus and virtual sessions both available. Flexible scheduling built around your clinical rotations. Medical students strongly preferred.",
    posted: "10 days ago",
    featured: false,
  },
  {
    id: 7,
    title: "Research Assistant – Cardiology Lab",
    company: "Baylor College of Medicine",
    location: "Houston, TX",
    pay: "$15–$18/hr",
    type: "research",
    description:
      "Assist faculty with bench research in cardiovascular disease. Tasks include PCR, Western blots, data analysis, and support for manuscript preparation. 15–20 hrs/week with a flexible schedule for medical students.",
    posted: "2 weeks ago",
    featured: false,
  },
  {
    id: 8,
    title: "Medical Assistant – Urgent Care",
    company: "NextCare Urgent Care",
    location: "San Antonio, TX",
    pay: "$15–$18/hr",
    type: "ma",
    description:
      "Join our urgent care team performing patient intake, specimen collection, wound care assistance, and discharge instructions. Full and part-time positions available. Benefits for full-time employees.",
    posted: "2 weeks ago",
    featured: false,
  },
];

export const JOB_TYPES = {
  all: "All Types",
  ma: "Medical Assistant",
  scribe: "Medical Scribe",
  research: "Research",
  tutoring: "Tutoring",
};

export const TYPE_COLORS = {
  ma:       { bg: "#EBF4FF", text: "#1A56DB" },
  scribe:   { bg: "#FDF2F8", text: "#9B1C6E" },
  research: { bg: "#EAF5EE", text: "#166534" },
  tutoring: { bg: "#FFFBEB", text: "#92400E" },
};
