import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';



const appBarStyle = {
  background: "#fafafa",
  // background: "#1e2023",
  boxShadow: "none",
}
const darkModeStyle = {
  color : "#000",
}

const Nav = () => (
  <AppBar position="sticky" style={appBarStyle}>
    <ul>
      <li className="logo">
        <a href="/"><img src={require('../images/blacktrans4x.png')} width="60" height="40" alt="Logo" /></a>
      </li>
      <li>
        <a href="/create">Make a Post</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/about">About Me</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li style={darkModeStyle}>
        <button>Dark Mode</button>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        background-color:#fafafa;
        //color: white;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
      }
      .logo{
        margin : 0px !important;
      }
      nav {
        text-align: center;
        display:relative;
      }
      ul {
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        padding: 6px 8px;
        margin: 12px;
        float:left;
        list-style-type: none;
      }
      li:last-child{
        float:right;
      }
      a {
        color: #0582C6;
        text-decoration: none;
        font-size: 16px;
        font-weight:bold;
      }
      .main-logo{
        font-weight:bold;
        padding: 4px 16px;
      }
      button{
        width : 100px;
        height : 25px;
        border : 1px solid black ;
        border-radius :  10px ; 
        background : none ;
      }
      button:hover{
        cursor : pointer;
      }
      `}</style>
  </AppBar>
)

export default Nav
