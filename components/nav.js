import React from 'react'
import AppBar from '@material-ui/core/AppBar';

const appBarLight = {
  background: "#fafafa",
  boxShadow: "none",
}
const appBarDark = {
  background: "#1e2023",
  boxShadow: "none",
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkModeToggle: false,
    }
  };
  handleClick = () => {
    this.setState(state => ({
      darkModeToggle: !state.darkModeToggle
    }))
    if (localStorage.getItem('mode') == "light") {
      localStorage.setItem('mode', 'dark')
    }
    else {
      localStorage.setItem('mode', 'light')
    }
    // console.log(localStorage.getItem('mode'))
  }

  componentDidMount = () =>{

    if(localStorage.getItem('mode') == 'light'){
      this.setState(state =>({
        darkModeToggle : !state.darkModeToggle
      }))
    }
    else{
      this.setState(state =>({
        darkModeToggle : !state.darkModeToggle
      }))
    }

  }
  render() {
    return (
      <AppBar position="sticky" style={ this.state.darkModeToggle ? appBarDark : appBarLight}>
        <ul>
          <li className="logo">
            {
              this.state.darkModeToggle ? <a href="/"><img src={require('../images/whitetrans2x.png')} width="60" height="40" alt="Logo" /></a> :
                <a href="/"><img src={require('../images/blacktrans4x.png')} width="60" height="40" alt="Logo" /></a>
            }
          </li>
          <li>
            <a href="/create">Make a Post</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
              <a href="/login">Login</a>
          </li>
          <li className="darkModeStyle">
            <button onClick={this.handleClick} className="darkModeBtn">Dark Mode</button>
          </li>
        </ul>
        <style jsx>{`
      :global(body) {
        margin: 0;
        background: ${this.state.darkModeToggle ? '#1e2023' : '#fafafa'};
        color: ${this.state.darkModeToggle ? 'white' : 'black'};
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
        color : ${this.state.darkModeToggle ? 'white' : 'black'};
        border: ${this.state.darkModeToggle ? '1px solid white' : '1px solid black'};
        border-radius :  10px ; 
        background : none ;
      }
      button:hover{
        cursor : pointer;
      }
      .darkModeBtn:focus {
        outline: none;
      }
      `}</style>
      </AppBar>
    )
  }
}

export default Nav
