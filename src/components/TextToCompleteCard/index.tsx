import dataJson from "../../data/data.json";
import type { Difficulty, TypingPassages } from "../../pages/Homepage/types";
import { useEffect, useMemo, useRef, useState } from "react";

export const TextToCompleteCard = ({
  difficulty,
}: {
  difficulty: Difficulty;
  mode: string;
}) => {
  const data = dataJson as TypingPassages;
  const [isStarted, setIsStarted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const passage = data[difficulty]?.[0];
  if (!passage) {
    return <div>Caricamento...</div>;
  }

  const targetText = passage.text;
  const characters = useMemo(() => targetText.split(""), [targetText]);

  useEffect(() => {
    if (isStarted && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isStarted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setUserInput(newInput);
  };

  const handleToggleStart = () => {
    setIsStarted(!isStarted);
    if (isStarted) {
      setUserInput("");
    }
  };

  return (
    <div className="w-full h-[500px] relative rounded-lg overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 pt-6 overflow-y-auto">
        <p className="font-mono text-xl md:text-2xl leading-relaxed">
          {characters.map((char, index) => {
            const typedChar = userInput[index];
            const currentIndex = userInput.length;

            let charClass = "inline transition-colors duration-75";

            if (typedChar != null) {
              if (typedChar === char) {
                charClass += " text-green-400";
              } else {
                charClass += " text-red-400 underline decoration-red-400";
              }
            } else if (index === currentIndex) {
              charClass += " bg-neutral-700 text-neutral-400";
            } else {
              charClass += " text-neutral-400";
            }

            return (
              <span key={index} className={charClass}>
                {char}
              </span>
            );
          })}
        </p>
      </div>
      {!isStarted && (
        <>
          <div className="absolute inset-0 backdrop-blur-xs z-10" />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
            <button
              onClick={handleToggleStart}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold whitespace-nowrap text-sm md:text-base"
            >
              Start Typing Test
            </button>
            <p>Or click the text and start typing</p>
          </div>
        </>
      )}
      {isStarted && (
        <textarea
          ref={textareaRef}
          value={userInput}
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-full p-6 pt-12 text-transparent caret-transparent resize-none bg-transparent text-2xl font-mono leading-relaxed outline-none z-10"
          autoComplete="off"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
        />
      )}
    </div>
  );
};
