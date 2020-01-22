import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';



const appBarStyle = {
  background: "#fafafa",
  // background: "#1e2023",
  boxShadow: "none",
}

const Nav = () => (
  <AppBar position="sticky" style={appBarStyle}>
    <ul>
      <li className="logo">
        <a href="/"><img src={require('../images/blacktrans4x.png')} width="60" height="40" alt="Logo" /></a>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/create">Create</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/aboutme">About Me</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li className="switch">
        {/* Dark Mode will be written here */}
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        background-color:#fafafa;
        // color: white;
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
        display: flex;
      }
      nav > ul {
        padding: 4px 16px;
      }
      .right{
        float:right;
      }
      li {
        display: flex;
        padding: 6px 8px;
        margin: 12px;
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
      `}</style>
  </AppBar>
)

export default Nav
