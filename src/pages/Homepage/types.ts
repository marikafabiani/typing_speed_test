export interface TextToCompleteCardProps {
  text: string;
  onComplete: () => void;
}

export type Difficulty = "easy" | "medium" | "hard";

interface Passage {
  id: string;
  text: string;
}

export type PassagesByDifficulty = Record<Difficulty, Passage[]>;

export interface TypingPassages {
  easy: Passage[];
  medium: Passage[];
  hard: Passage[];
}
