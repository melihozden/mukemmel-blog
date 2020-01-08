import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "..//components/nav"
// var moment = require('moment');
// moment().format();

const Create = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Melih Blog</title>
    </Head>
      <Nav></Nav>
    {posts.map((post, i) => (
      <div className="blog" key={i}>
        <h2 className="blog-title">
          <Link href={post._id}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.createdAt}</div>
      </div>
    ))}

    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }
      .blog{
        background: whitesmoke;
        border-radius: 10px;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        font-weight: bold;
        color: #263548;
        margin: 12px 0 48px 0;
        padding: 10px;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Create.getInitialProps = async ({ req }) => {

  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3001/api/posts");
  const json = await res.json();

   return { posts: json.posts };
};

export default Create;
