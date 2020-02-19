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
        <title>Melih Ozden</title>
        <link href="../styles/index.css" rel="stylesheet" />
      </Head>
        <Nav/>

        <Grid container>
          <Grid item xs={2}>

          </Grid>
          <Grid item xs={8}>
          <div className="center">
            <button>Melih Ozden's Personal Blog</button>
            <button>Community Blog</button>
          </div>
          </Grid>
          <Grid item xs={2}>

          </Grid>

        </Grid>
      </div>
    );
  }
}

export default Index;