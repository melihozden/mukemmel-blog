import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav"
// var moment = require('moment');
// moment().format();

const Home = ({ posts }) => (
  <div className="container">
    <Nav />
    <div className="blogs">

      <Head>
        <title>Melih Blog</title>
      </Head>
      <div className="hero">
        <h1 className="hero-title">Melih Özden Blog</h1>
        {/* <div className="hero-social-links">
        <Link href="https://medium.com/@selmankahya">
        <a className="social-link">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
        <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
        <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
        <a className="social-link">Instagram</a>
        </Link>
      </div> */}
      </div>

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
    </div>

    <style jsx>{`
      .blogs {
        max-width: 40%;
        width: 100%;
        margin: 0 auto;
      }
      .blog{
        padding: 5px 25px;
        margin : 10px;
        background: whitesmoke;
        border-radius: 10px;
      }
      .blog-title{
        font-weight:bold;
      }

      .hero {
        text-align: center;
        margin: 48px 0;
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

Home.getInitialProps = async ({ req }) => {

  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3001/api/posts");
  const json = await res.json();

  return { posts: json.posts };
};

export default Home;
