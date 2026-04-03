import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => { setPage("home"); setMobileOpen(false); }}>
          <img src="/logo.png" width="36" height="36" style={{borderRadius: "8px"}} alt="logo" />
          <span className={styles.logoText}>
            MedStudentJobs<span className={styles.logoDot}>.com</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className={styles.links}>
          <button
            className={`${styles.link} ${page === "jobs" ? styles.linkActive : ""}`}
            onClick={() => setPage("jobs")}
          >
            Browse Jobs
          </button>
          <button
            className={styles.postBtn}
            onClick={() => setPage("post")}
          >
            Post a Job
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileLink} onClick={() => { setPage("jobs"); setMobileOpen(false); }}>
            Browse Jobs
          </button>
          <button className={styles.mobileLink} onClick={() => { setPage("post"); setMobileOpen(false); }}>
            Post a Job
          </button>
        </div>
      )}
    </nav>
  );
}
