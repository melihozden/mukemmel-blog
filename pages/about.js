import React from 'react';
import Nav from "../components/nav"
import Head from "next/head";

import Grid from '@material-ui/core/Grid';

// const gridSystem = {
//   background : "red",
//   width : "100px",
//   height : "100px",
// }

const About = () => (
  <div className="container">
    <Nav/>
    <Head>
      <title>About me</title>
    </Head>
    <div className="outer">
    <Grid container>
      <Grid item xs={2}>
          <div>

          </div>
      </Grid>
      <Grid item xs={5}>
        <h1>Who am I?</h1>
        <div className="textSection">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className="developerPhoto">
          <img src={require('../images/pphoto.jpg')}  width="350px" height="350px"alt="computer" className="community-img" />
         
        </div>
      </Grid>
      <Grid item xs={2}>
        <div>
        

        </div>
      </Grid>
    </Grid>
      </div>
       
       <Grid container>
        <Grid item xs={2}>
          <div>

          </div>
        </Grid>
        <Grid item xs={8} className="social">
          <div>
            
          </div>
        </Grid>
        <Grid item xs={2}>
           <div>
            
          </div>
        </Grid>
       </Grid>
    <style jsx>{`
    .developerPhoto{
      margin : 75px 50px;
    }
    .textSection{
      
    }
    .outer{
      margin-top : 50px;
    }
    img{
      border-radius : 50%;
    }
    .social{
      width : 100%;
      background: black;
    }
    ul{
      display : flex ; 
      list-style-type: none;
    }
    .icon{
      margin : 25px;
      width : 100px;
      height : 100px;
      background : black;
    }
    `
    }
    </style>
  </div>
);

export default About; 
