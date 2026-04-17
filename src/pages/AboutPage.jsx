import styles from "./AboutPage.module.css";

export default function AboutPage({ setPage }) {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.h1}>About MedStudentJobs</h1>
          <p className={styles.headerSub}>Built by a medical student, for medical students.</p>
        </div>
      </div>

      <div className={styles.body}>
        {/* Story */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>How It Started</h2>
          <p className={styles.text}>
            My name is Christian Zambrano. I'm a medical student, and like most of my peers,
            I spent countless hours sifting through Indeed, Craigslist, and general job boards
            trying to find opportunities that actually made sense for someone in my position —
            part-time, clinically relevant, and flexible enough to fit around rotations and
            studying.
          </p>
          <p className={styles.text}>
            Most platforms weren't built for us. The listings were buried, irrelevant, or
            designed for full-time professionals. So I built MedStudentJobs.com — a job board
            focused entirely on medical students, pre-med students, and gap-year candidates
            looking for meaningful work experience.
          </p>
          <p className={styles.text}>
            Every listing on this platform is curated with one question in mind: does this
            help a medical student build a stronger CV, gain clinical exposure, or fund their
            education? If yes, it belongs here.
          </p>
        </div>

        {/* Mission */}
        <div className={styles.missionCard}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To connect medical students with jobs, research opportunities, and clinical
            experiences that strengthen their residency applications, fund their education,
            and make their gap years meaningful.
          </p>
        </div>

        {/* What we offer */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>What You'll Find Here</h2>
          <div className={styles.categoryGrid}>
            {[
              { icon: "🏥", title: "Clinical Jobs", desc: "Medical assistant, scribe, phlebotomy, EMT, and more." },
              { icon: "🔬", title: "Research", desc: "Clinical research coordinator, lab assistant, and data roles." },
              { icon: "📚", title: "Education & Tutoring", desc: "MCAT, USMLE, high school science, and TA roles." },
              { icon: "💼", title: "Non-Clinical Healthcare", desc: "Admin, billing, care coordination, and front desk." },
              { icon: "🎓", title: "Internships", desc: "Fellowships, shadowing, and gap year programs." },
              { icon: "⚡", title: "Flexible & Remote", desc: "Health writing, virtual roles, and freelance gigs." },
            ].map((cat) => (
              <div key={cat.title} className={styles.catCard}>
                <div className={styles.catIcon}>{cat.icon}</div>
                <div className={styles.catTitle}>{cat.title}</div>
                <p className={styles.catDesc}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For employers */}
        <div className={styles.employerCard}>
          <h2 className={styles.employerTitle}>For Employers</h2>
          <p className={styles.employerText}>
            If you're a clinic, research lab, tutoring company, or healthcare organization
            looking to hire motivated medical students — posting on MedStudentJobs.com is
            completely free during our beta period.
          </p>
          <div className={styles.employerButtons}>
            <button className={styles.postBtn} onClick={() => setPage("post")}>
              Post a Job — It's Free
            </button>
            <a href="mailto:christian@medstudentjobs.com" className={styles.emailBtn}>
              Contact Us
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.card} style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.text}>
            Have questions, feedback, or want to partner with us?
          </p>
          <a href="mailto:christian@medstudentjobs.com" className={styles.contactEmail}>
            christian@medstudentjobs.com
          </a>
        </div>

      </div>
    </div>
  );
}
