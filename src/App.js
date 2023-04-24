import { Routes, Route } from "react-router-dom";

//styles
import './App.css';

//components
import Landing from "./components/landing page/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
