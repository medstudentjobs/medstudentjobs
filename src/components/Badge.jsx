import { JOB_TYPES, TYPE_COLORS } from "../data/jobs";

export default function Badge({ type }) {
  const colors = TYPE_COLORS[type] || { bg: "#F3F4F6", text: "#374151" };
  return (
    <span
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.03em",
        fontFamily: "'DM Sans', sans-serif",
        display: "inline-block",
      }}
    >
      {JOB_TYPES[type] || type}
    </span>
  );
}
