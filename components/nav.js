import React from 'react'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/create">Create</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li className="right">
        <a href="/login">Login</a>
      </li>
      <li className="right">
        <a href="/register">Register</a>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
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
        color: #0c9463;
        text-decoration: none;
        font-size: 16px;
        font-weight:bold;
      }
    `}</style>
  </nav>
)

export default Nav
