import { useState } from "react";
import ExplanationBox from "./ExplanationBox";
import VoicePlayer from "./VoicePlayer";

export default function ProblemCard({ problem }) {
  const [show, setShow] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const getExplanation = async () => {
    setLoading(true);
    setExplanation("");

    const res = await fetch("https://YOUR_BACKEND_URL/api/ai/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code: problem.solution })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      setExplanation(prev => prev + chunk);
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h3>{problem.title}</h3>
      <p>{problem.description}</p>

      <button onClick={() => setShow(!show)}>
        Toggle Solution
      </button>

      <button onClick={getExplanation}>
        Explain 🤖
      </button>

      {show && <pre>{problem.solution}</pre>}

      {loading && <p>Generating explanation...</p>}

      {explanation && (
        <>
          <ExplanationBox text={explanation} />
          <VoicePlayer text={explanation} />
        </>
      )}
    </div>
  );
}