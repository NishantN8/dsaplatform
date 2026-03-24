import { useState } from "react";
import ProblemCard from "./components/ProblemCard";
import { problems } from "./data/problems";
import "./styles.css";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState("Array");

  const filtered = problems.filter(p => p.topic === selectedTopic);

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>📚 Topics</h2>
        {["Array","String","DP","Tree"].map(t => (
          <div 
            key={t}
            className={`item ${t === selectedTopic ? "active" : ""}`}
            onClick={() => setSelectedTopic(t)}
          >
            {t}
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div className="main">
        <h1>{selectedTopic} Problems</h1>

        {filtered.map(p => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>

    </div>
  );
}