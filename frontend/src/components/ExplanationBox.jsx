export default function ExplanationBox({ text }) {
  return (
    <div style={{
      background: "#020617",
      padding: "15px",
      borderRadius: "10px",
      marginTop: "10px",
      border: "1px solid #334155"
    }}>
      <h4>🧠 Explanation</h4>
      <p style={{ lineHeight: "1.6" }}>{text}</p>
    </div>
  );
}