import React from "react";
import "./App.css";
import ReducerUse from "./components/ReducerUse";
// import MemoUse from "./components/MemoUse"
// import CallbackUse from "./components/CallbackUse";

// import Navrbar from "./components/Navrbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Blog from "./components/Blog";
// import Detail from "./components/Detail";
// import Post from "./components/Post";
// import Todo from "./components/Todo";
// import Album from "./components/Album";
// import Photos from "./components/Photos";
// import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div>
      {/* <Router>
        <Navrbar />
        <Routes>
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/BLOG/userdetail/:id" element={<Detail />} />
          <Route exact path="/post/:id" element={<Post />} />
          <Route exact path="/todo/:id" element={<Todo />} />
          <Route exact path="/album/:id" element={<Album />} />
          <Route exact path="/photo/:id" element={<Photos />} />
          <Route exact path="/postdetail/:id" element={<PostDetail />} />
        </Routes>
      </Router> */}
      <ReducerUse />
    </div>
  );
}

export default App;
