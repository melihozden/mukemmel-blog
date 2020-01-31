import React from 'react';
import Nav from "../components/nav"
import Head from "next/head";

import Grid from '@material-ui/core/Grid';

const About = () => (
  <div className="container">
    <Nav />
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
          <div className="socialtitle">
            <h2>Follow me on social media</h2>
          </div>
          <div className="centering">
            <ul>
              <li>
                <div className="social-div">
                  <a href="https://github.com/melihozden" target="_blank"><img src={require('../icons/github.png')} /></a>
                </div>
              </li>
              <li>
                <div className="social-div">
                  <a href="https://www.instagram.com/melihozdens/" target="_blank"><img src={require('../icons/instagram.png')} /></a>
                </div>
              </li>
              <li>
                <div className="social-div">
                  <a href="https://linkedin.com/in/melihozden" target="_blank"><img src={require('../icons/linkedin.png')} /></a>
                </div>
              </li>
              <li>
                <div className="social-div">
                  <a href="https://twitter.com/mlhozdn" target="_blank"><img src={require('../icons/twitter.png')} /></a>
                </div>
              </li>
              <li>
                <div className="social-div">
                  <a href="https://www.youtube.com/channel/UCP8SZbJ0foq8JaPz0mMaJlg" target="_blank"><img src={require('../icons/youtube.png')} /></a>
                </div>
              </li>
              <li>
                <div className="social-div">
                  <a href="https://www.twitch.tv/divergiant" target="_blank"><img src={require('../icons/twitch.png')} /></a>
                </div>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="developerPhoto">
            <img src={require('../images/pphoto.jpg')} width="350px" height="350px" alt="computer" className="p-img" />

          </div>
        </Grid>
        <Grid item xs={2}>
          <div>

          </div>
        </Grid>
      </Grid>
    </div>
    <style jsx>{`
    .developerPhoto{
      margin : 75px 50px;
    }
    .outer{
      margin-top : 50px;
    }
    .p-img{
      border-radius : 50%;
    }
    .socialtitle{
      margin : 25px;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
      text-align: center;
    }
    .social-div{
      padding : 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius : 50% ;
    }
    .social-div:hover{
      transition: 0.25s;
      box-shadow: 0 8px 16px 8px rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.3);
    }
    .centering{
      margin: 0 auto;
    }
    ul{
      text-align: center;
      display : flex ; 
      list-style-type: none;
    }
    li{
      margin : 0px 20px;
    }
    `
    }
    </style>
  </div>
);

export default About; 
