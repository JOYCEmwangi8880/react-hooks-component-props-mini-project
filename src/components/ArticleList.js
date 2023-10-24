// import React from 'react'
// import Article from './Article';


// function ArticleList({posts}) {
//     const ArticleList = posts.map(post =>post)
//     console.log(ArticleList)
//   return (
//    <main>
// <Article articles ={ArticleList}/>
//    </main>
//   )
// }


import React from "react";
import Article from "../components/Article";
import blogData from "../data/blog";
console.log(blogData)

function ArticleList (){
    return (
    <main>
   { blogData.posts.map((post) => {
       return <Article key={post.id} title ={post.title} date = {post.date} preview = {post.preview} />
   })}
    </main>
    );
}
export default ArticleList;
