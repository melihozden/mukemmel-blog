import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Nav from "../components/nav"
import ReactMarkdown from "react-markdown";

const BlogPost = ({post}) => (
  <div className="container">
    <Nav />
    <Head>
      <title>{post.postTitle}</title>
    </Head>
    <div className="blog">
      <h2 className="blog-title">
          {post.postTitle}
      </h2>
      <div className="relatedImage">

        <img />

      </div>
      <div className="blog-text">
        <ReactMarkdown source={post.postDetail} />
      </div>
      <div className="blog-date">{post.postDate}</div>
    </div>
    <style jsx>{`

      img{
          background-image: url(../images/moLogo.png);
      }

      .blog{
        max-width: 680px;
        width: 100%;
        margin: 0 auto;
        padding: 5px 25px;
        border-radius: 10px;
      }
      .blog-title{
        font-weight:bold;
      }
      .blog-text{
        margin-top:50px;
      }
      .blog-date {
        text-align: right;
        font-weight: bold;
        color: #263548;
        margin: 48px 0 0 0;
        padding: 10px;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  // console.log("Query : " + query.postId)
  // const res = await fetch(`http://localhost:3001/${query.postId}`);
  const res = await fetch(`http://localhost:3001/api/posts/${query.postId}`);
  const json = await res.json();
    // console.log(json);
     return { post: json };
};

export default BlogPost;
