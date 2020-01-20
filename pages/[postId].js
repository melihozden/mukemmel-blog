import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Nav from "../components/nav"
import ReactMarkdown from "react-markdown";
import Alert from '@material-ui/lab/Alert';
import { FaRegHeart } from 'react-icons/fa';
import { MdInsertComment } from 'react-icons/md';

let moment = require('moment');

let showCommentArea = false ; 
const counter = {

}

const textAreaStyle = {
  marginTop : "50px",
  maxWidth: "680px",
  minWidth: "680px",
  maxHeight: "250px",
  minHeight: "150px",
  width: "100%",
  borderRadius : "10px",

}
const buttonStyle = {
  fontSize : "16px",
  width: "80px",
  border: "none",
  marginTop : "15px",
  padding: "10px",
  borderRadius: "10px",
  fontWeight : "bold",
  color : "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  backgroundColor: "#0582C6",
  float : "left",
}

const buttonClicked = () =>{
  console.log(showCommentArea)
  if(showCommentArea == false){
    showCommentArea = true ;
  }
  else{
    showCommentArea = false ;
  }
}

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
      {/* <div className="relatedImage">
        <img />
      </div> */}
      <div className="blog-text">
        <ReactMarkdown source={post.postDetail} />
      </div>
      <div className="blog-date">{moment(post.postDate).format('ll')}</div>
      <div>
        <ul>
          <li style={counter}>
            {post.postLike}
          </li>
          <li>
            <button className="like-button">
              <FaRegHeart size="2.2em" color="#c00000"/>
            </button>
          </li>
          <li>
            <button className="like-button" >
              <MdInsertComment size="2.2em"/>
            </button>
          </li>
        </ul>
    </div>
    {showCommentArea && 
     <div>
        <textarea style={textAreaStyle}></textarea>
        <button style={buttonStyle} type="submit" variant="contained" name="button" color="primary">Submit</button>
      </div>
      }
    </div>
    <style jsx>{`

      img{
          background-image: url(../images/moLogo.png);
      }
      ul{
        margin: 0px;
        padding : 0px;
        list-style-type: none;
      }
      li{
        color : #393e46;
        display: inline;
      }
      .like-button{
        background : none ;
        border : none; 
      }
      .like-button:hover{
        cursor: pointer
      }
      .like-button:focus{
        outline : 0 ;
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
        color: #5c636e;
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
     return { post : json };
};

export default BlogPost;
