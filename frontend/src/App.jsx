import ProblemCard from "./components/ProblemCard";
import { problems } from "./data/problems";
import "./styles.css";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>DSA Platform 🚀</h1>

      {problems.map((p) => (
        <ProblemCard key={p.id} problem={p} />
      ))}
    </div>
  );
}