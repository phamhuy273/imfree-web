import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tinh-nang" element={<Features />} />
        <Route path="/ve-chung-toi" element={<About />} />
        {/* Hỗ trợ thêm alias tiếng Anh nếu có ai truy cập */}
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
