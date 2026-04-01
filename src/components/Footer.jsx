import styles from "./Footer.module.css";

export default function Footer({ setPage }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        MedStudentJobs<span className={styles.dot}>.com</span>
      </div>
      <p className={styles.tagline}>Built for medical students, by a medical student.</p>
      <div className={styles.links}>
        <button onClick={() => setPage("jobs")} className={styles.link}>Browse Jobs</button>
        <span className={styles.sep}>·</span>
        <button onClick={() => setPage("post")} className={styles.link}>Post a Job</button>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} MedStudentJobs.com · All rights reserved</p>
    </footer>
  );
}
