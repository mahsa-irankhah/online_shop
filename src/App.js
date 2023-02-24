import { Routes, Route } from "react-router-dom";

//styles
import './App.css';

//components
import Landing from "./components/landing page/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
