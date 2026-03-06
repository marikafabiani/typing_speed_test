import logo from "../../assets/images/logo-large.svg";
import best from "../../assets/images/icon-personal-best.svg";

export const Header = () => {
  return (
    <div className="flex pt-4 mb-10 justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <img src={best} alt="personal best" />
        <span className="text-neutral-500">Personal best:</span>
        <span>256 WPM</span>
      </div>
    </div>
  );
};
