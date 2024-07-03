import { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Home from "./components/home/Home";
import RegisterForm from "./components/login/RegisterForm";
import Admin from "./components/login/Admin";
import Product_display from "./components/home/Product_display";

function App() {
  return (
    <div className="max-w-[1300px]  mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path=":id" element={<Product_display />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
