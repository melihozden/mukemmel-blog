import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Nav from "..//components/nav"

import TextField from '@material-ui/core/TextField';
import TextArea from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
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


const Create = () => (
  <div className="container">
    <Nav />
    <Head>
      <title>Create Post</title>
    </Head>

    <div className="form-div">
      <form className="createForm" method="POST">
          <Grid item>
            <TextField label="Title" style={titleStyle}/>
          </Grid>
          <Grid item>
            <TextArea style={detailsStyle} placeholder="..."/>
          </Grid>
      </form>
      </div>




    <style jsx>{`
      .form-div{
        text-align:center;
      }     
     
      .details{

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
