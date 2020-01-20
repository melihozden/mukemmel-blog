import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer"
import Button from '@material-ui/core/Button';
import { FaRegHeart } from 'react-icons/fa';


let moment = require('moment');

const Home = ({ posts }) => (
  <div className="container">
    <Nav />
    <div className="blogs">
      <Head>
        <title>Melih Blog</title>
      </Head>
      {posts.map((post, i) => (
        <div className="blog" key={i}>
          <h2 className="blog-title">
            <Link href={post._id}>
              <a className="blog-title-link">{post.title}</a>
            </Link>
          </h2>
          <div className="blog-text">
            {post.detail.substring(0, 100) + " ..."}
            <a href={post._id}>Read More</a>
          </div>
          <div className="blog-date">{moment(post.createdAt).format('ll')}</div>
          <div>
              <button className="like-button">
                <FaRegHeart size="1.8em" color="#c00000"/>
                <div className="like">{post.like}</div>
              </button>
          </div>
        </div>
      ))}
    </div>

    <style jsx>{`
      .blogs {
        max-width: 50%;
        width: 100%;
        margin: 0 auto;
      }
      .like{
        font-weight: bold;
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
      .like-button{
        margin: 5px;
        background : none ;
        border : none; 
      }
      .like-button:hover{
        cursor: pointer
      }
      .like-button:focus{
        outline : 0 ;
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
        color: #5c636e;
        margin: 48px 0 0 0;
        padding: 10px;
      }

      a {
        color: #0582C6;
        text-decoration: none;
      }
    `}</style>
    <Footer />
  </div>
);

Home.getInitialProps = async ({ req }) => {

  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3001/api/posts");
  const json = await res.json();

  return { posts: json.posts };
};

export default Home;
