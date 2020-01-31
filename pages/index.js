import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer"
import Grid from '@material-ui/core/Grid';
import { FaHeart } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const validator = require("email-validator");


let moment = require('moment');
let shortNumber = require('short-number');

const registerStyle = {
  width: "100%",
  margin: "5px 0 5px 0 ",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid black",
  fontSize: "16px",
  fontWeight: "bold",
}
const tagIcon = {
  marginRight: "10px",
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userMail: '',
      userPassword: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = () => {
    // console.log(validator.validate(this.state.userMail));
  }

  render() {
    const posts = this.props.posts;
    const { username, email, password } = this.state;
    return (
      <div className="container">
        <Nav mode={true} />
          <title>Melih Ozden</title>
        <div className="welcome">
          <Grid container>
            <Grid item xs={6}>
              <div className="community">
                <img src={require('../images/computer.png')} width="500" alt="computer" className="community-img" />
              </div>
            </Grid>
            <Grid item xs={6} >
              <div className="register">
                <div className="register-title"> Welcome Blogger! We all excited to see your Posts </div>
                <div className="register-subtitle"> Register and share your opinions </div>
                <div className="register-content">
                  <form method="POST" action={`https://melihozdenblog.herokuapp.com`} onSubmit={this.handleSubmit}>
                    <label>Username <span>*</span></label>
                    <input type="text" style={registerStyle} name="userName" value={username} onChange={this.handleChange} />
                    <label>Email <span>*</span></label>
                    <input type="text" style={registerStyle} name="userMail" value={email} onChange={this.handleChange} />
                    <label>Password <span>*</span></label>
                    <input type="password" style={registerStyle} name="userPassword" value={password} onChange={this.handleChange} />
                    <button type="submit" className="registerButton">Register for blog</button>
                  </form>
                  <h5 className="h5-d">Already have account? <a href="/login">Login</a></h5>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="blogs">
          <h1>Some Blogs you might look</h1>
          {posts.map((post, i) => (
            <Fade bottom>
              <div className="blog" key={i}>
                <h2 className="blog-title">
                  {post.tag != "No Tag" &&
                    <div className="blog-tag">
                      <FaTag size="1em" color="#5c636e" style={tagIcon} />
                      {post.tag}
                    </div>
                  }
                  <Link href={post._id}>
                    <a className="blog-title-link">{post.title}</a>
                  </Link>
                </h2>
                <div className="blog-text">
                  {post.detail.substring(0, 500) + " ..."}
                  <div>
                    <button className="readmore">
                      <a href={post._id} className="readmore-a">Read More</a>
                    </button>
                  </div>
                </div>
                <div className="blog-date">{moment(post.createdAt).format('ll')}</div>
                <div className="div-like">
                  <FaHeart size="1.8em" color="#c00000" />
                  <span className="span-like">{shortNumber(post.like)}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <style jsx>{`
      .h5-d{
        color : black ;
        margin-top : 5px;
      }
      .span-like{
        font-size : 14px;
        font-weight: bold;
        margin : 0px 5px;
      }
      .blogs {
        margin: 0 auto;
        min-width: 750px;
        width: 55%;
      }
      .readmore-a{
        color : white ;
      }
      .readmore{
        margin : 10px 0px;
        background : #0582C6;
        width : 100px;
        height  :35px;
        text-align: center;
        font-size:  14px;
        font-weight : bold ;
        border-radius : 10px;
        border: none ;
      }
      .like{
        margin : 0px;
        color : #5c636e;
        font-weight: bold;
      }
      label{
        font-size : 14px;
        font-weight : bold ;
        color : black ;
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
      .blog-tag{
        text-align : right ;
        font-size : 16px; 
        font-weight: bold ; 
        color : #5c636e;
      }
      .blog-date {
        text-align: right;
        font-weight: bold;
        color: #5c636e;
        margin: 48px 0 0 0;
        padding: 10px;
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
        width: 350px;
        background : #fafafa;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
      }
      .register-content{
        padding-right: 15px;
        margin : 15px;
      }
      .register-title{
        color : black;
        font-size : 24px;
        font-weight : bold ;
        font-family : Andale Mono, monospace;
      }
      .register-subtitle{
        color : black;
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
  }
}
Home.getInitialProps = async ({ req, }) => {
  const res = await fetch("https://melihozden.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
