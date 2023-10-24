import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
     Personal blog by JOYCE MWANGI. I explain with words and code.
     <About image={blogData.image} />
      <Header img={blogData.image} about={blogData.about} />
      <Article />
      <ArticleList  />
    </div>
  );
}

export default App;
