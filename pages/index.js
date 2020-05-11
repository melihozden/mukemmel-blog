import React, { Component } from 'react';
import Head from 'next/head';
import Nav from "../components/nav"
import { Grid } from '@material-ui/core';

//css Files
// import '../styles/index.css';


class Index extends Component {
  render() {
    return (
      <div>
        <Head>
        <title>Web Programming Odev</title>
        <link href="../styles/index.css" rel="stylesheet" />
      </Head>
        <Nav/>

        <Grid container>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={8} className="center">
          <div className="center" className="webodevdiv">
          <a href="/homepage"><button>Web Programlama Ödevi Blog</button></a>
            <button disabled>Community Blog (Kilitli)</button>
          </div>
          </Grid>
          <Grid item xs={2}>

          </Grid>
        </Grid>

        <style jsx>{`
        .webodevdiv{
          text-align:center;
        }
        button{
          height: 50px;
          border-radius: 10px; 
          border : none ;
          background-color : #0582C6;
          color: #FFFFFF;
          font-size : 18px;
          padding : 10px;
          font-weight: bold ;
        }
        button:hover{
          cursor: pointer;
        }
      `}</style>
      </div>
    );
  }
}

export default Index;