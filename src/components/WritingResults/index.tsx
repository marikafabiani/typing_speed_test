export const WritingResults = ({
  wpm,
  accuracy,
  time,
}: {
  wpm: number;
  accuracy: number;
  time: number;
}) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2 border-r border-neutral-700 pr-4">
        <span className="text-neutral-500">WPM:</span>
        <span>{wpm}</span>
      </div>
      <div className="flex flex-row gap-2 border-r border-neutral-700 pr-4">
        <span className="text-neutral-500">Accuracy:</span>
        <span>{accuracy}%</span>
      </div>
      <div className="flex flex-row gap-2">
        <span className="text-neutral-500">Time:</span>
        <span>{time}s</span>
      </div>
    </div>
  );
};
