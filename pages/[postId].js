import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Nav from "../components/nav"
import ReactMarkdown from "react-markdown";
import Alert from '@material-ui/lab/Alert';
import { FaRegHeart } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa';
import { MdInsertComment } from 'react-icons/md';
let moment = require('moment');

const counter = {

}
const textAreaStyle = {
  marginTop: "25px",
  padding: "10px",
  fontSize: "14px",
  maxWidth: "100%",
  minWidth: "100%",
  maxHeight: "150px",
  minHeight: "150px",
  borderRadius: "10px",
}
const buttonStyle = {
  fontSize: "16px",
  width: "80px",
  maxWidth: "100%",
  border: "none",
  marginTop: "15px",
  padding: "10px",
  borderRadius: "10px",
  fontWeight: "bold",
  color: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  backgroundColor: "#0582C6",
  float: "left",
}
const tagIcon = {
  marginRight: "10px",
}

const likeAction = (e,requestedId) =>{
  // fetch('/https://melihozden.herokuapp.com/like', {method: 'POST'})
  fetch(`https://melihozden.herokuapp.com/like/${requestedId}`, {method: 'POST',})
  e.preventDefault()
}

// Her post ile anlamlı resim koyma kullanıcı tarafından koyulacak 
class BlogPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      showCommentArea: false, 
      likeCount : this.props.post.postLike,
      isLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
    // console.log(props)
  }

  handleClick = () => {
    this.setState(state => ({
      showCommentArea: !state.showCommentArea
    }));
  }

  likeAction(e){
    // fetch('/https://melihozden.herokuapp.com/like', {method: 'POST'})
    this.setState({ isLoading: true });
    fetch(`https://melihozden.herokuapp.com/like/${this.props.post.postId}`, {method: 'POST',})
    .then((state)=>this.setState({likeCount: state.likeCount + 1 , isLoading : false}))
  }
  componentDidMount() {
  
  }

  render() {
    const post = this.props.post;
    const comments = this.props.comments;
    return (
      <div className="container">
        <Nav />
        <Head>
          <title>{post.postTitle}</title>
        </Head>
        <div className="blog">
          <h2 className="blog-title">
            {post.postTitle}
          </h2>
          {post.postTag != "No Tag" &&
            <div className="blog-tag">
              <FaTag size="1em" color="#5c636e" style={tagIcon} />
              {post.postTag}
            </div>
          }
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
                {this.state.likeCount}
              </li>
              <li>
                <button className="like-button" onClick={(e) => likeAction(e,post.postId)}>
                  <FaRegHeart size="2.2em" color="#c00000" />
                </button>
              </li>
              <li>
                <button className="like-button" onClick={this.handleClick}>
                    <MdInsertComment size="2.2em" />
                </button>
              </li>
            </ul>
          </div>
          {this.state.showCommentArea &&
            <div className="comment-div">
              <form method="POST" action={`https://melihozden.herokuapp.com/comment/${post.postId}`}>
                <textarea style={textAreaStyle} name="commentContent"></textarea>
                <button style={buttonStyle} type="submit" variant="contained" name="button" color="primary">Submit</button>
              </form>
            </div>
          }
          <h3 className="comment-title">Comments ({comments.length})</h3>
          <div className="comments">
            {comments.map((comment, i) => (
              <div className="comment">
                {comment.content}
                <div className="comment-date">{moment(comment.createdAt).format('ll')}</div>
              </div>
            ))}
          </div>

        </div>
        <style jsx>{`
  
  img{
    background-image: url(../images/moLogo.png);
  }
  .comment-div{
    width: 665px;
    height: 275px;
  }
  .comments{
    margin-left : 50px;
    margin-top : 10px;
    width : 100%;
  }
  .comment{
    margin : 10px;
    padding : 25px;
    font-size: 14px;
    border-bottom: 1px solid ;
  }
  .comment-date {
    text-align: right;
    font-weight: bold;
    color: #5c636e;
    padding: 10px;
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
  .blog-tag{
    text-align : right ;
    font-size : 16px; 
    font-weight: bold ; 
    color : #5c636e;
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

  }

}

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`https://melihozden.herokuapp.com/api/posts/${query.postId}`);
  const res2 = await fetch(`https://melihozden.herokuapp.com/comments/${query.postId}`);
  const json = await res.json();
  const json2 = await res2.json();
  return { post: json, comments: json2.comments };
};

export default BlogPost;
