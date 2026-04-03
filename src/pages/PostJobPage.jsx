import { useState } from "react";
import styles from "./PostJobPage.module.css";

const INITIAL = {
  title: "",
  company: "",
  location: "",
  pay: "",
  type: "",
  description: "",
  email: "",
};

function validate(form) {
  const errors = {};
  if (!form.title.trim()) errors.title = "Job title is required";
  if (!form.company.trim()) errors.company = "Company name is required";
  if (!form.location.trim()) errors.location = "Location is required";
  if (!form.type) errors.type = "Please select a job type";
  if (!form.description.trim()) errors.description = "Description is required";
  if (!form.email.trim()) errors.email = "Contact email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Enter a valid email address";
  return errors;
}

function Field({ label, name, type = "text", placeholder, form, setForm, errors, required = true }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}{" "}
        {required
          ? <span className={styles.req}>*</span>
          : <span className={styles.optional}>(optional)</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        placeholder={placeholder}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`${styles.input} ${errors[name] ? styles.inputError : ""}`}
      />
      {errors[name] && <p className={styles.error}>{errors[name]}</p>}
    </div>
  );
}

export default function PostJobPage() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
  const errs = validate(form);
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  setSubmitting(true);

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/Jobs`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Title: form.title,
            Company: form.company,
            Location: form.location,
            Pay: form.pay,
            Type: form.type,
            Description: form.description,
            Email: form.email,
            Status: "Pending Review",
          },
        }),
      }
    );
    const result = await response.json();
    console.log("Airtable response:", result);
  } catch (err) {
    console.error("Error:", err);
  }

  setSubmitting(false);
  setSubmitted(true);
};

if (submitted) {
  return (
    <div className={styles.successWrapper}>
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✅</div>
        <h2 className={styles.successTitle}>Job Submitted!</h2>
        <p className={styles.successBody}>
          Thank you! Your listing for <strong>{form.title}</strong> at{" "}
          <strong>{form.company}</strong> has been received.
          We'll review and publish it within 24 hours.
        </p>
        <button
          className={styles.successBtn}
          onClick={() => { setSubmitted(false); setForm(INITIAL); setErrors({}); }}
        >
          Post Another Job
        </button>
      </div>
    </div>
  );
}

return (
  <div className={styles.page}>
    {/* Header */}
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.h1}>Post a Job</h1>
        <p className={styles.headerSub}>
          Reach motivated medical students actively looking for clinical and research roles.
        </p>
      </div>
    </div>

    <div className={styles.body}>
      {/* Beta banner */}
      <div className={styles.banner}>
        🎉 <strong>Free during beta.</strong> Listings are reviewed and published within 24 hours.
      </div>

      {/* Form card */}
      <div className={styles.card}>
        <Field label="Job Title" name="title" placeholder="e.g. Medical Scribe, Research Assistant" form={form} setForm={setForm} errors={errors} />
        <Field label="Company / Clinic" name="company" placeholder="e.g. Austin Regional Clinic" form={form} setForm={setForm} errors={errors} />
        <Field label="Location" name="location" placeholder="e.g. Houston, TX or Remote" form={form} setForm={setForm} errors={errors} />
        <Field label="Pay" name="pay" placeholder="e.g. $15–$18/hr" form={form} setForm={setForm} errors={errors} required={false} />

        {/* Type select */}
        <div className={styles.field}>
          <label className={styles.label}>
            Job Type <span className={styles.req}>*</span>
          </label>
          <select
            value={form.type}
            onChange={(e) => { setForm({ ...form, type: e.target.value }); setErrors({ ...errors, type: null }); }}
            className={`${styles.input} ${errors.type ? styles.inputError : ""}`}
          >
            <option value="">Select a category…</option>
            <option value="ma">Medical Assistant</option>
            <option value="scribe">Medical Scribe</option>
            <option value="research">Research</option>
            <option value="tutoring">Tutoring</option>
          </select>
          {errors.type && <p className={styles.error}>{errors.type}</p>}
        </div>

        {/* Description */}
        <div className={styles.field}>
          <label className={styles.label}>
            Job Description <span className={styles.req}>*</span>
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Describe the role, responsibilities, schedule, and any requirements…"
            rows={5}
            className={`${styles.textarea} ${errors.description ? styles.inputError : ""}`}
          />
          {errors.description && <p className={styles.error}>{errors.description}</p>}
        </div>

        <Field label="Contact Email" name="email" type="email" placeholder="hiring@yourclinic.com" form={form} setForm={setForm} errors={errors} />

        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit Job Listing →"}
        </button>

        <p className={styles.disclaimer}>
          By submitting, you confirm this is a legitimate employment opportunity for medical
          students. Listings are reviewed before publishing.
        </p>
      </div>
    </div>
  </div>
);
}
