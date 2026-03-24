import { useState } from "react";

export default function ProblemCard({ problem }) {
  const [show, setShow] = useState(false);
  const [explanation, setExplanation] = useState("");

  const getExplanation = async () => {
    const res = await fetch("http://localhost:5000/api/ai/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: problem.solution }),
    });

    const data = await res.json();
    setExplanation(data.explanation);
  };

  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{problem.title}</h3>
      <p>{problem.description}</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Solution" : "Show Solution"}
      </button>

      <button onClick={getExplanation}>
        Explain 🤖
      </button>

      {show && <pre>{problem.solution}</pre>}
      {explanation && <p>{explanation}</p>}
    </div>
  );
}