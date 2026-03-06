import "./styles.css";
import type { Difficulty } from "../../pages/Homepage/types";
import { capitalize } from "../../utils";

export const WritingOptions = ({
  setDifficulty,
  difficulty,
  setMode,
  mode,
}: {
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  setMode: (mode: string) => void;
  mode: string;
}) => {
  const difficulties: Difficulty[] = ["easy", "medium", "hard"];
  const modes = ["Timed (60s)", "Passage"];

  const handleDifficultyChange = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  const handleModeChange = (mode: string) => {
    setMode(mode);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-1 items-center border-r border-neutral-700 pr-4">
        <span className="text-neutral-500 text-sm">Difficulty:</span>
        {difficulties.map((diff) => (
          <button
            key={diff}
            className={`option ${difficulty === diff ? "option-selected" : ""}`}
            onClick={() => handleDifficultyChange(diff)}
          >
            {capitalize(diff)}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-1 items-center">
        <span className="text-neutral-500 text-sm">Mode:</span>
        {modes.map((m) => (
          <button
            key={m}
            className={`option ${mode === m ? "option-selected" : ""}`}
            onClick={() => handleModeChange(m)}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};
