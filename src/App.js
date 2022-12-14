import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { createStore } from "redux";

const App = () => (
  <BrowserRouter>
    <div className="container mt-5 text-center">
      {/* routeの書き方が変わっています */}
      {/* Routesで囲むことが必須となります */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// using react redux
const vote = (state=0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    default:
      return state
  }
}

// storeを作成
let store = createStore(vote)

const Home = () => {
  // stateの値が変更される
  store.dispatch({ type: 'ADD'})
  let x = store.getState().toString()

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Vote: {x}</p>
      <p><Link to="/about">About</Link></p>
    </div>
  );
};

// rooting
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
