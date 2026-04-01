import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import PostJobPage from "./pages/PostJobPage";

export default function App() {
  const [page, setPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav page={page} setPage={setPage} />
      <main style={{ flex: 1 }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "jobs" && <JobsPage />}
        {page === "post" && <PostJobPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
