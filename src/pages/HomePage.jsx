import styles from "./HomePage.module.css";

const CATEGORIES = [
  { icon: "🏥", label: "Clinical Jobs",               type: "clinical",    count: 5 },
  { icon: "🔬", label: "Research",                    type: "research",    count: 0 },
  { icon: "📚", label: "Education & Tutoring",        type: "education",   count: 1 },
  { icon: "💼", label: "Non-Clinical Healthcare",     type: "nonclinical", count: 0 },
  { icon: "🎓", label: "Internships & Opportunities", type: "internship",  count: 1 },
  { icon: "⚡", label: "Other / Flexible Jobs",       type: "other",       count: 1 },
];

const STATS = [
  { value: "50+",   label: "Active Listings"        },
  { value: "100%",  label: "Med-Student Focused"    },
  { value: "Free",  label: "To Browse & Apply"      },
];

const WHY = [
  {
    icon: "🏥",
    title: "Healthcare-Only Listings",
    desc: "No irrelevant jobs. Every listing is vetted for medical students in clinical, research, or education roles.",
  },
  {
    icon: "📅",
    title: "Fits Your Schedule",
    desc: "Gap year, between rotations, or just need weekend shifts — all listings are part-time or flex-friendly.",
  },
  {
    icon: "💼",
    title: "Build Your CV",
    desc: "Every job here adds meaningful clinical or academic experience to strengthen your residency application.",
  },
];

export default function HomePage({ setPage }) {
  return (
    <div>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg1} />
        <div className={styles.heroBg2} />

        <div className={styles.heroContent}>
          <div className={styles.pill}>
            Built by a medical student, for medical students
          </div>

          <h1 className={styles.h1}>
            Find Jobs Built for{" "}
            <span className={styles.h1Accent}>Medical Students</span>
          </h1>

          <p className={styles.sub}>
            Whether you're on a gap year, between rotations, or looking for flexible part-time
            work — find clinical, research, and tutoring opportunities designed around your schedule.
          </p>

          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={() => setPage("jobs")}>
              Browse Jobs →
            </button>
            <button className={styles.ctaSecondary} onClick={() => setPage("post")}>
              Post a Job
            </button>
          </div>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statVal}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className={styles.categories}>
        <div className={styles.section}>
          <h2 className={styles.sectionH2}>Browse by Category</h2>
          <p className={styles.sectionSub}>
            Curated opportunities that fit your medical school timeline
          </p>
          <div className={styles.catGrid}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.type}
                className={styles.catCard}
                onClick={() => setPage("jobs")}
              >
                <div className={styles.catIcon}>{cat.icon}</div>
                <div className={styles.catLabel}>{cat.label}</div>
                <div className={styles.catCount}>{cat.count} open roles</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className={styles.why}>
        <div className={styles.section}>
          <h2 className={styles.sectionH2}>Why MedStudentJobs?</h2>
          <div className={styles.whyGrid}>
            {WHY.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <div className={styles.whyTitle}>{item.title}</div>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring CTA ── */}
      <section className={styles.hiringBanner}>
        <h2 className={styles.bannerH2}>Are you a clinic or company hiring?</h2>
        <p className={styles.bannerSub}>
          Post a job and reach hundreds of motivated medical students actively looking for
          opportunities like yours.
        </p>
        <button className={styles.bannerBtn} onClick={() => setPage("post")}>
          Post a Job — It's Free
        </button>
      </section>
    </div>
  );
}
