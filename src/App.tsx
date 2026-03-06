import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
