import { useState } from "react";
import { JOBS, JOB_TYPES } from "../data/jobs";
import Badge from "../components/Badge";
import styles from "./JobsPage.module.css";

function ViewModal({ job, onClose, onApply }) {
  if (!job) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 620, maxHeight: "85vh", overflowY: "auto" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <Badge type={job.type} />
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9CA3AF" }}
          >
            ✕
          </button>
        </div>

        <h2 className={styles.modalTitle}>{job.title}</h2>
        <p className={styles.modalMeta}>{job.company} · {job.location}</p>

        {job.pay && (
          <p style={{ color: "#2D7D46", fontWeight: 600, fontSize: 15, marginBottom: 16 }}>
            💵 {job.pay}
          </p>
        )}

        {job.tags && job.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: 16 }}>
            {job.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "#EDF2F7",
                  color: "#4A5568",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            backgroundColor: "#F7F4EF",
            borderRadius: 10,
            padding: 16,
            marginBottom: 20,
            fontSize: 14,
            color: "#4A5568",
            lineHeight: 1.75,
            whiteSpace: "pre-wrap",
          }}
        >
          {job.description}
        </div>

        <p style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16 }}>
          Posted {job.posted}
        </p>

        <button
          onClick={() => { onClose(); onApply(job); }}
          className={styles.modalClose}
          style={{ backgroundColor: "#0E7C86" }}
        >
          Apply for this Job →
        </button>
      </div>
    </div>
  );
}

function ApplyModal({ job, onClose }) {
  if (!job) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Apply for: {job.title}</h2>
        <p className={styles.modalMeta}>{job.company} · {job.location}</p>
        <div className={styles.modalBox}>
          <p>📧 Email your CV and a brief intro to the employer:</p>
          <a
            href={`mailto:${job.email}?subject=MedStudentJobs – ${job.title}`}
            style={{
              display: "inline-block",
              marginTop: "12px",
              backgroundColor: "#0E7C86",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            ✉️ Email {job.company}
          </a>
        </div>
        <p className={styles.modalNote}>
          Clicking the button above will open your email app with the employer's
          address and job title pre-filled in the subject line.
        </p>
        <button className={styles.modalClose} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function JobCard({ job, onApply, onView }) {
  return (
    <div className={`${styles.card} ${job.featured ? styles.cardFeatured : ""}`}>
      {job.featured && <span className={styles.featuredBadge}>FEATURED</span>}

      <div className={styles.cardBadge}>
        <Badge type={job.type} />
      </div>

      <h3
        className={styles.cardTitle}
        onClick={() => onView(job)}
        style={{ cursor: "pointer" }}
      >
        {job.title}
      </h3>

      <div className={styles.cardMeta}>
        <span>🏢 {job.company}</span>
        <span>📍 {job.location}</span>
        {job.pay && <span className={styles.pay}>💵 {job.pay}</span>}
      </div>

      <p className={styles.cardDesc}>
        {job.description.length > 150
          ? job.description.substring(0, 150) + "..."
          : job.description}
      </p>

      {job.tags && job.tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
          {job.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "#EDF2F7",
                color: "#4A5568",
                fontSize: "11px",
                fontWeight: "500",
                padding: "3px 10px",
                borderRadius: "20px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.cardFooter}>
        <span className={styles.posted}>Posted {job.posted}</span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className={styles.applyBtn}
            style={{ backgroundColor: "#4A5568" }}
            onClick={() => onView(job)}
          >
            View Details
          </button>
          <button className={styles.applyBtn} onClick={() => onApply(job)}>
            Apply →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JobsPage() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("");
  const [applyJob, setApplyJob] = useState(null);
  const [viewJob, setViewJob] = useState(null);

  const locations = [...new Set(JOBS.map((j) => j.location))].sort();

  const filtered = JOBS.filter((j) => {
    const typeOk = typeFilter === "all" || j.type === typeFilter;
    const locOk = !locationFilter || j.location === locationFilter;
    return typeOk && locOk;
  });

  return (
    <div className={styles.page}>
      <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
      <ViewModal job={viewJob} onClose={() => setViewJob(null)} onApply={setApplyJob} />

      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.h1}>Browse Jobs</h1>
          <p className={styles.headerSub}>{JOBS.length} opportunities for medical students</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.filters}>
          <span className={styles.filterLabel}>Filter:</span>

          <div className={styles.typeFilters}>
            {Object.entries(JOB_TYPES).map(([val, label]) => (
              <button
                key={val}
                className={`${styles.typeBtn} ${typeFilter === val ? styles.typeBtnActive : ""}`}
                onClick={() => setTypeFilter(val)}
              >
                {label}
              </button>
            ))}
          </div>

          <select
            className={styles.locationSelect}
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>

          {(typeFilter !== "all" || locationFilter) && (
            <button
              className={styles.clearBtn}
              onClick={() => { setTypeFilter("all"); setLocationFilter(""); }}
            >
              ✕ Clear
            </button>
          )}
        </div>

        <p className={styles.resultCount}>
          Showing <strong>{filtered.length}</strong> job{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className={styles.list}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🔍</div>
              <p>No jobs match your filters. Try adjusting or clearing them.</p>
            </div>
          ) : (
            filtered.map((job) => (
              <JobCard key={job.id} job={job} onApply={setApplyJob} onView={setViewJob} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
