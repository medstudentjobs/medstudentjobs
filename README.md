# MedStudentJobs.com

A job board built specifically for medical students seeking part-time and gap year opportunities — scribing, medical assistant, research, tutoring, and more.

---

## Project Structure

```
medstudentjobs/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── jobs.js               ← Add/edit job listings here
    ├── components/
    │   ├── Nav.jsx
    │   ├── Nav.module.css
    │   ├── Badge.jsx
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── pages/
        ├── HomePage.jsx
        ├── HomePage.module.css
        ├── JobsPage.jsx
        ├── JobsPage.module.css
        ├── PostJobPage.jsx
        └── PostJobPage.module.css
```

---

## Deploying to GitHub + Vercel (Step-by-Step)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `medstudentjobs` (or anything you like)
4. Set it to **Public**
5. Do NOT initialize with a README (you already have one)
6. Click **Create repository**

### Step 2 — Push this code to GitHub

Open your terminal, navigate to this folder, and run:

```bash
git init
git add .
git commit -m "Initial commit — MedStudentJobs MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medstudentjobs.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Find and select your `medstudentjobs` repository
4. Vercel will auto-detect it as a **Vite** project
5. Leave all settings as default
6. Click **Deploy**

Your site will be live at `https://medstudentjobs.vercel.app` in about 60 seconds.

### Step 4 — Connect your custom domain

1. In Vercel, go to your project → **Settings → Domains**
2. Add `medstudentjobs.com`
3. Vercel will show you DNS records to add
4. Log in to wherever you bought the domain (GoDaddy, Namecheap, etc.)
5. Add the DNS records Vercel provides
6. Wait 10–30 minutes for DNS to propagate

---

## Making Changes

Every time you push to GitHub, Vercel automatically redeploys. The workflow is:

```bash
# Make edits to files, then:
git add .
git commit -m "describe your change"
git push
```

Vercel picks it up automatically — no manual redeploy needed.

---

## Adding Real Job Listings

Edit `src/data/jobs.js` and add a new object to the `JOBS` array:

```js
{
  id: 9,                          // must be unique
  title: "Your Job Title",
  company: "Clinic Name",
  location: "City, ST",
  pay: "$15/hr",                  // or leave as null
  type: "ma",                     // ma | scribe | research | tutoring
  description: "Full description of the role...",
  posted: "1 day ago",
  featured: false,                // set true for highlighted listing
},
```

Then push to GitHub — Vercel redeploys automatically.

---

## Connecting Airtable (to receive form submissions)

This lets employers submit jobs via the form and you review them in Airtable.

### 1. Create your Airtable base

- Go to [airtable.com](https://airtable.com) → New Base → Start from scratch
- Name it `MedStudentJobs`
- Create a table called `Jobs` with these fields:

| Field Name  | Field Type  |
|-------------|-------------|
| Title       | Single line |
| Company     | Single line |
| Location    | Single line |
| Pay         | Single line |
| Type        | Single line |
| Description | Long text   |
| Email       | Email       |
| Status      | Single select (options: Pending Review, Published, Rejected) |

### 2. Get your credentials

- Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
- Create a token with `data.records:write` scope on your base
- Copy your **Base ID** from the URL when viewing your base: `airtable.com/YOUR_BASE_ID/...`

### 3. Add them to Vercel as environment variables

In Vercel → Project → Settings → Environment Variables, add:

```
VITE_AIRTABLE_TOKEN   =  your_token_here
VITE_AIRTABLE_BASE    =  your_base_id_here
```

### 4. Update PostJobPage.jsx

In `src/pages/PostJobPage.jsx`, replace the `handleSubmit` function body with:

```js
const handleSubmit = async () => {
  const errs = validate(form);
  if (Object.keys(errs).length > 0) { setErrors(errs); return; }

  setSubmitting(true);

  await fetch(
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

  setSubmitting(false);
  setSubmitted(true);
};
```

Push to GitHub. Vercel will use your environment variables automatically.

---

## Tech Stack

| Tool | Purpose | Cost |
|------|---------|------|
| React + Vite | Frontend framework | Free |
| CSS Modules | Scoped styling | Free |
| GitHub | Code hosting | Free |
| Vercel | Hosting + deploys | Free |
| Airtable | Job submission storage | Free tier |

---

## Next Features to Build

- **Job detail pages** — Individual URLs per listing (add React Router)
- **Email alerts** — Notify you when a job is submitted (Airtable automations)
- **Search bar** — Full-text search across job titles and descriptions
- **Student email signup** — Collect emails for new listing alerts (add Resend or Mailchimp)
- **Admin panel** — Simple password-protected page to approve/reject submissions
