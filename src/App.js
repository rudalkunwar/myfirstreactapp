import React from "react";
import Home from "./Components/react2/Home";
import Header from "./Components/react2/Header";
import About from "./Components/react2/About";
import Contact from "./Components/react2/Contact";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./Components/blog/AddBlog";
import Blogs from "./Components/blog/Blogs";
import Blog from "./Components/blog/Blog";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="blogs/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
