import { useState } from "react";
import "./styles.css";

export const WritingOptions = () => {
  const difficulties = ["Easy", "Medium", "Hard"];
  const modes = ["Timed (60s)", "Passage"];

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    difficulties[0],
  );
  const [selectedMode, setSelectedMode] = useState<string>(modes[0]);

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleModeChange = (mode: string) => {
    setSelectedMode(mode);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-1 items-center">
        <span className="text-neutral-500 text-sm">Difficulty:</span>
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            className={`option ${selectedDifficulty === difficulty ? "option-selected" : ""}`}
            onClick={() => handleDifficultyChange(difficulty)}
          >
            {difficulty}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-1 items-center">
        <span className="text-neutral-500 text-sm">Mode:</span>
        {modes.map((mode) => (
          <button
            key={mode}
            className={`option ${selectedMode === mode ? "option-selected" : ""}`}
            onClick={() => handleModeChange(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
};
