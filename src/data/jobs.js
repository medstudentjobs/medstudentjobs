export const JOBS = [
  {
    id: 1,
    title: "Ophthalmic Technician",
    company: "New York Laser Vision",
    location: "Brooklyn, NY",
    pay: "$18–$22/hr",
    type: "clinical",
    email: "natalie.nik5@gmail.com",
    tags: ["In-Person", "Paid", "Full-Time", "No Experience Required", "Pre-Med Friendly", "Gap Year Friendly"],
    description:
      "Growing MD/OD practice is looking for an Ophthalmic Tech in Brooklyn-Midwood. Schedule: M, W, Th, Sat, Sun or M–F. We offer a very friendly work environment, flexible hours, and paid training. All locations are near public transportation. Starting salary $18/hr and higher for experienced techs and MAs.",
    posted: "1 day ago",
    featured: true,
  },
  {
    id: 2,
    title: "Front Desk Staff",
    company: "New York Laser Vision",
    location: "Brooklyn, NY",
    pay: "$18–$22/hr",
    type: "clinical",
    email: "natalie.nik5@gmail.com",
    tags: ["In-Person", "Paid", "Full-Time", "Part-Time", "Flexible Schedule", "Gap Year Friendly", "Pre-Med Friendly"],
    description:
      "MD/OD practice is looking for positive, quick-learning front desk staff. We offer a pleasant work environment, training, and support. Offices located near public transportation in Brooklyn-Midwood, NYC-Midtown, and Staten Island (Hyland Blvd). Full and part-time positions available.",
    posted: "1 day ago",
    featured: true,
  },
  {
    id: 3,
    title: "Caregiver / Personal Attendant",
    company: "Private Household",
    location: "Durango, CO",
    pay: "$25/hr",
    type: "other",
    email: "5dd9e75a7c2b380a8cff7e5a865881d5@job.craigslist.org",
    tags: ["In-Person", "Paid", "Part-Time", "Full-Time", "Flexible Schedule"],
    description:
      "Part to full-time caregiver and personal attendant for a health-conscious woman in Durango, CO. Responsibilities include household work, cooking, personal care, and companionship. Candidate must have caregiving experience and a strong work ethic. Evening and weekend availability preferred with some scheduling flexibility. Background in nursing, massage, physical therapy, herbs, or cooking is a plus. Pay starts at $25/hr through the CDASS program and increases with experience. Minimum one year commitment expected. Three work references required.",
    posted: "1 day ago",
    featured: false,
  },
  {
    id: 4,
    title: "Clinical Research Internship",
    company: "Richmond University Medical Center",
    location: "Staten Island, NY",
    pay: "Unpaid + $2,000 stipend every 6 months",
    type: "internship",
    email: "jpatwari@rumcsi.org",
    tags: ["In-Person", "Unpaid", "Full-Time", "No Experience Required", "Pre-Med Friendly", "Gap Year Friendly"],
    description:
      "Richmond University Medical Center's Clinical Research Center offers a one-year unpaid research internship for medical and premedical graduates. Work under the guidance of Principal Investigators on industry-sponsored and investigator-initiated clinical trials. Responsibilities include patient enrollment, data collection, case report form completion, protocol review, and participation in project team meetings. All work follows GCP guidelines. Schedule: Monday–Friday, up to 35 hrs/week. Volunteers receive free lunch on working days, a $2,000 stipend every 6 months, and hospital holidays. Upon completion, candidates receive a Clinical Research Coordinator (CRC) certificate. Past interns have been accepted into US medical residency and ACGME programs.",
    posted: "1 day ago",
    featured: false,
  },
  {
    id: 5,
    title: "Medical Assistant",
    company: "Midwest Foot and Ankle Clinics",
    location: "Arlington Heights, IL",
    pay: "$20+/hr",
    type: "clinical",
    email: "midwestfootandankle@gmail.com",
    tags: ["In-Person", "Paid", "Part-Time", "Full-Time"],
    description:
      "Medical Assistant needed for a Podiatry Practice in Arlington Heights, IL. Full-time preferred but will consider part-time. Medical Assistant certificate required. Relaxed and enjoyable work environment with opportunity for advancement. Polish speaking is a plus.",
    posted: "Today",
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
