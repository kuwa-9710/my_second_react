import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="container mt-5 text-center">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p><Link to="/about">About</Link></p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p><Link to="/">Home</Link></p>
    </div>
  )
}

const Blog = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <p>{id}番目の記事です</p>
    </div>
  )
}

export default App;
