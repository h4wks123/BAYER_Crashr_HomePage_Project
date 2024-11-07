import { Routes, Route } from "react-router-dom";
import AegisHome from "./components/pages/AegisHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AegisHome />} />
    </Routes>
  );
}

export default App;
