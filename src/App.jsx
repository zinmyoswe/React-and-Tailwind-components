import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/career" element={<Career />}/> 
          <Route path="/product/:id" element={<ProductDetail />}/>
       </Routes>
    </Router>
    
  )
}