import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Nav from "..//components/nav"

import TextField from '@material-ui/core/TextField';
import TextArea from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AccountCircle from '@material-ui/icons/AccountBox';

// var moment = require('moment');
// moment().format();

const titleStyle = {
  width: "50%",
  height: "50px",
  margin: "25px",
  fontSize: "48px",
  border: "none",
  fontWeight: "bold",
}
const detailsStyle = {
  width: "50%",
  height: "250px",
  maxWidth: "50%",
  minHeight: "50px",
  margin: "10px",
  paddingTop: "25px",
  fontSize: "18px",
  border: "none",
  fontWeight: "bold",
  borderBottom: "1px solid grey"
}

const alertStyle = {
  width:"50%",
  margin:"auto"
}
const buttonStyle = {
  fontSize : "16px",
  width: "120px",
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

class Create extends React.Component{

  constructor(){
    super()
    this.state = {
      success : false // success alert false at the beginning
    }
  }
  handleSubmit = (e) => {
    this.setState({
      success: true
    })
  }
  render(){
    const { success } = this.state;
    return(
      <div className="container">
    <Nav />
    <Head>
      <title>Create Post</title>
    </Head>
    {success && 
     <div style={alertStyle}>
        <Alert variant="filled" severity="success">
         Post has been publish successfully!
        </Alert>
      </div>
      }
    <div className="form-div">
      <h1>Post a Blog</h1>
        <form className="createForm" method="POST" onSubmit={event => {this.handleSubmit(event)}} action="http://localhost:3001/create">
            <Grid item>
              <TextField size="normal" label="Title" style={titleStyle} name="postTitle"/>
            </Grid>
            <Grid item>
              <TextArea style={detailsStyle} placeholder="..." name="postDetail"/>
            </Grid>
            <div className="button-div">
              <button style={buttonStyle} type="submit" variant="contained" name="button" color="primary">
              Publish
            </button>
            </div>
        </form>
      </div>
     



    <style jsx>{`
      .form-div{
        max-width: 75%;
        width: 100%;
        margin: 0 auto;
        border-radius: 10px;
        text-align:center;
      }    
      .button-div{
        width:50%;
        margin:auto;
      }
      h1{
        font-family: Arial sans-serif;
      }
      
      `}</style>
  </div>

// Create.getInitialProps = async ({ req }) => {
  
  //   // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  //   const res = await fetch("http://localhost:3001/api/posts");
  //   const json = await res.json();
  
  //   return { posts: json.posts };
  // };
  )
  }
  
}
export default Create;

