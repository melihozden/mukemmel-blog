import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FaRegHeart } from 'react-icons/fa';


let moment = require('moment');

const registerStyle = {
  width: "100%",
  margin: "5px 0 5px 0 ",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid black",
  fontSize: "16px",
  fontWeight: "bold",
}

const Home = ({ posts }) => (
  <div className="container">
    <Nav />
    <Head>
      <title>Melih Ozden</title>
    </Head>
    <div className="welcome">
      <Grid container>
        <Grid item xs={5}>
          <div className="community">
            <img src={require('../images/computer.png')} width="500" alt="computer" className="community-img" />
          </div>
        </Grid>
        <Grid item xs={7} >
          <div className="register">
            <div className="register-title"> Welcome Blogger! We all excited to see your Posts </div>
            <div className="register-subtitle"> Register and share your opinions </div>
            <div className="register-content">
              <form method="POST" action={`http://localhost:3001/register`}>
                <label>Username</label>
                <input type="text" style={registerStyle} name="userName" />
                <label>Email</label>
                <input type="text" style={registerStyle} name="userMail" />
                <label>Password</label>
                <input type="password" style={registerStyle} name="userPassword" />
                <button type="submit" className="registerButton">Register for blog</button>
              </form>
            </div>
          </div>

        </Grid>
      </Grid>

    </div>


    <div className="blogs">
      <h1>Some Blog you might look</h1>
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
              <FaRegHeart size="1.8em" color="#c00000" />
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
      label{
        font-size : 14px;
        font-weight : bold ;
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
      .welcome{
        margin : 0 auto;
        height : 600px ;
        background : #1a1a1e  ;
      }
      .community{
        float :right ;
      }
      .register{
        margin : 60px 10px;
        padding : 20px 20px;
        width: 40%;
        background : #fafafa;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
      }
      .register-content{
        padding-right: 15px;
        margin : 15px;
      }
      .register-title{
        font-size : 24px;
        font-weight : bold ;
        font-family : Andale Mono, monospace;
      }
      .register-subtitle{
        margin-top : 20px;
        font-size: 18px;
        font-weight : bold ;
        font-family : Andale Mono, monospace;
      }
      
      .registerButton{
        margin : 5px 10px;
        height : 50px;
        width : 100%;
        border-radius : 10px;
        font-size : 18px;
        font-weight : bold;
        border : none; 
        padding : 10px;
        background: linear-gradient(90deg, rgba(0,180,219,1) 0%, rgba(0,131,176,1) 100%);
        color : white;
      }
      .registerButton:hover{
        cursor : pointer;
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
