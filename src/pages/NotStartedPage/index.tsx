import { WritingOptions } from "../../components/WritingOptions";
import { WritingResults } from "../../components/WritingResults";

export const NotStartedPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4">
        <WritingResults wpm={0} accuracy={0} time={0} />
        <WritingOptions />
      </div>
    </div>
  );
};
