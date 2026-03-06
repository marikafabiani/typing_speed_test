import { useState } from "react";
import { TextToCompleteCard } from "../../components/TextToCompleteCard";
import { WritingOptions } from "../../components/WritingOptions";
import { WritingResults } from "../../components/WritingResults";
import type { Difficulty } from "./types";

export const Homepage = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [mode, setMode] = useState<string>("Timed (60s)");

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 border-b border-neutral-700 pb-2">
        <WritingResults wpm={0} accuracy={0} time={0} />
        <WritingOptions
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          setMode={setMode}
          mode={mode}
        />
      </div>
      <div className="flex flex-col">
        <TextToCompleteCard difficulty={difficulty} mode={mode} />
      </div>
    </div>
  );
};
