import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
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

    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
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

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3001");
  // const res = await fetch("http://localhost:3001");
  const json = await res.json();
  // console.log(json)
  return { posts: json.posts };
};

export default Home;
