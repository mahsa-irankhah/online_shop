import { Routes, Route, Navigate } from "react-router-dom";

//styles
import './App.css';

//components
import Landing from "./components/landing page/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/landing page/Products";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
