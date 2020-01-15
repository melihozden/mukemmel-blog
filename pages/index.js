import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav"
import Footer from "../components/footer"
import Button from '@material-ui/core/Button';
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
        <Button variant="contained" color="primary">
        Hello World
      </Button>
          {/* <div className="hero-social-links">
          <Link href="https://medium.com/@selmankahya" src="../icons/github.png">
          <a className="social-link">Github</a>
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
        max-width: 50%;
        width: 100%;
        margin: 0 auto;
      }
      .blog{
        padding: 5px 25px;
        margin : 25px 50px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
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
        font-size: 36px;
        margin-bottom : -25px;
      }

      .blog-date {
        text-align: right;
        font-weight: bold;
        color: #263548;
        margin: 48px 0 0 0;
        padding: 10px;
      }

      a {
        color: #0c9463;
        text-decoration: none;
      }
    `}</style>
    <Footer/>
  </div>
);

Home.getInitialProps = async ({ req }) => {

  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3001/api/posts");
  const json = await res.json();

  return { posts: json.posts };
};

export default Home;
