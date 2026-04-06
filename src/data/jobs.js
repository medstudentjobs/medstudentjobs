export const JOBS = [
  {
    id: 1,
    title: "Medical Scribe",
    company: "Austin Regional Clinic",
    location: "Austin, TX",
    pay: "$14–$17/hr",
    type: "clinical",
    tags: ["In-Person", "Paid", "Part-Time", "Flexible Schedule", "No Experience Required"],
    description:
      "Document physician-patient encounters in real time using EHR software. Perfect for pre-med or medical students seeking clinical exposure. Flexible shifts available on evenings and weekends. Training provided — no prior experience required.",
    posted: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    title: "Medical Assistant (Part-Time)",
    company: "Westside Family Medicine",
    location: "Los Angeles, CA",
    pay: "$16–$19/hr",
    type: "clinical",
    tags: ["In-Person", "Paid", "Part-Time", "Gap Year Friendly"],
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
    type: "education",
    tags: ["Remote", "Paid", "Part-Time", "Flexible Schedule", "Pre-Med Friendly"],
    description:
      "Tutor pre-med students preparing for the MCAT. Set your own hours and work fully remote. Strong MCAT score (515+) and prior tutoring or teaching experience preferred.",
    posted: "5 days ago",
    featured: false,
  },
  {
    id: 4,
    title: "Clinical Research Coordinator",
    company: "Massachusetts General Hospital",
    location: "Boston, MA",
    pay: "$18–$22/hr",
    type: "research",
    tags: ["In-Person", "Paid", "Part-Time", "Gap Year Friendly", "Flexible Schedule"],
    description:
      "Coordinate oncology clinical trials including patient screening, data entry, and IRB documentation. Great opportunity to gain meaningful research experience during your gap year. 20–25 hrs/week.",
    posted: "1 week ago",
    featured: false,
  },
  {
    id: 5,
    title: "Emergency Department Scribe",
    company: "Northwestern Memorial Hospital",
    location: "Chicago, IL",
    pay: "$13–$16/hr",
    type: "clinical",
    tags: ["In-Person", "Paid", "Part-Time", "No Experience Required"],
    description:
      "Fast-paced ED scribing role. Work alongside EM physicians documenting complex cases including trauma, acute presentations, and procedures. Night and weekend shifts available.",
    posted: "1 week ago",
    featured: false,
  },
  {
    id: 6,
    title: "Anatomy & Physiology Tutor",
    company: "University of Washington Learning Center",
    location: "Seattle, WA",
    pay: "$22–$30/hr",
    type: "education",
    tags: ["Hybrid", "Paid", "Part-Time", "Flexible Schedule", "Pre-Med Friendly"],
    description:
      "Provide one-on-one and small group tutoring for undergraduate A&P students. On-campus and virtual sessions both available. Flexible scheduling built around your clinical rotations.",
    posted: "10 days ago",
    featured: false,
  },
  {
    id: 7,
    title: "Research Assistant – Cardiology Lab",
    company: "Johns Hopkins University",
    location: "Baltimore, MD",
    pay: "$15–$18/hr",
    type: "research",
    tags: ["In-Person", "Paid", "Part-Time", "Flexible Schedule"],
    description:
      "Assist faculty with bench research in cardiovascular disease. Tasks include PCR, Western blots, data analysis, and support for manuscript preparation. 15–20 hrs/week.",
    posted: "2 weeks ago",
    featured: false,
  },
  {
    id: 8,
    title: "Medical Receptionist",
    company: "Denver Health Urgent Care",
    location: "Denver, CO",
    pay: "$15–$18/hr",
    type: "nonclinical",
    tags: ["In-Person", "Paid", "Part-Time", "No Experience Required", "Pre-Med Friendly"],
    description:
      "Join our front desk team handling patient check-in, scheduling, insurance verification, and billing. Great exposure to healthcare operations. Full and part-time positions available.",
    posted: "2 weeks ago",
    featured: false,
  },
];

export const JOB_TYPES = {
  all:         "All Categories",
  clinical:    "Clinical Jobs",
  research:    "Research",
  education:   "Education & Tutoring",
  nonclinical: "Non-Clinical Healthcare",
  internship:  "Internships & Opportunities",
  other:       "Other / Flexible Jobs",
};

export const TYPE_COLORS = {
  clinical:    { bg: "#EBF4FF", text: "#1A56DB" },
  research:    { bg: "#EAF5EE", text: "#166534" },
  education:   { bg: "#FFFBEB", text: "#92400E" },
  nonclinical: { bg: "#FDF2F8", text: "#9B1C6E" },
  internship:  { bg: "#F0FDF4", text: "#15803D" },
  other:       { bg: "#F5F3FF", text: "#6D28D9" },
};

export const ALL_TAGS = [
  "Remote",
  "In-Person",
  "Hybrid",
  "Paid",
  "Unpaid",
  "Part-Time",
  "Full-Time",
  "Flexible Schedule",
  "No Experience Required",
  "Pre-Med Friendly",
  "Gap Year Friendly",
];
