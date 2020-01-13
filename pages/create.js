import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "..//components/nav"
// var moment = require('moment');
// moment().format();

const titleStyle = {
  width: "50%",
  height: "50px",
  margin: "25px",
  padding: "10px",
  fontSize: "36px",
  border: "none",
  fontWeight: "bold",
  borderBottom: "1px solid grey"
}
const detailsStyle = {
  width: "50%",
  height: "50px",
  margin: "10px",
  padding: "10px",
  fontSize: "18px",
  border: "none",
  fontWeight: "bold"
}


const Create = () => (
  <div className="container">
    <Nav />
    <Head>
      <title>Create Post</title>
    </Head>

    <div className="form-div">

      <form className="createForm" method="POST">
        <div>
          <input className="title" style={titleStyle} type="text" placeholder="Give a title to your post" />
        </div>
        <div>
          <input className="details" style={detailsStyle} type="text" placeholder="Details.." />
        </div>
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
