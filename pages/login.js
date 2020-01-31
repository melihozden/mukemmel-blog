import React from 'react';
import Nav from "../components/nav";
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Fade from 'react-reveal/Fade';

const Login = () => (
  <div className="container">
    <Nav />
    <Grid container>
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={4}>
        <Fade bottom>
        <Alert variant="filled" severity="error">
         Membership system is not working currently!
        </Alert>
          <div className="logindiv">
            <a href="/">
              <img src={require('../images/blacktrans4x.png')} width="90" height="60" alt="Logo" className="login-logo" />
            </a>
            <h2>Login to Blog</h2>
            <form method="POST">
              <label>Email <span className="label-span">*</span></label>
              <input type="text" name="userName" className="login-input" />
              <label>Password <span className="label-span">*</span><span className="forgot"><a href="#">Forgot Password?</a></span></label>
              <input type="password" name="userPassword" className="login-input" /><br />
              <button type="submit" className="login-button">Login</button>
            </form>
            <div>
              <h5 className="h5-d">Don't have account? <a href="/register">Register</a></h5>
            </div>
            <hr />
            <div className="social-login">
              <button className="google-button">
                <img className="google-icon" src={require('../icons/google.png')} />Login with Google</button>
            </div>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={4}>

      </Grid>
    </Grid>
    <style jsx>{`
        h2{
          color : white;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
        }
        .h5-d{
          float: right ;
          color : black ;
          margin : 10px 20px;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
        }
        .login-logo{
           margin : 20px; 
        }
        .logindiv{
          margin : 0px auto ;
          text-align: center ;
          width : 400px;
          height : 600px;
          border-radius : 10px;
          background: linear-gradient(90deg, rgba(0,131,176,1) 0%, rgba(0,180,219,1) 100%);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
        }
        .login-input{
          width: 350px;
          margin : 5px 0 5px 0 ;
          padding: 10px;
          border: 0;
          outline: 0;
          border-bottom: 1px solid black;
          font-size : 16px;
          fontweight: bold ;
          background: linear-gradient(90deg, rgba(0,131,176,1) 0%, rgba(0,180,219,1) 100%);
        }
        .forgot{
          font-size: 12px;
          margin-left : 185px; 
        }
        .label-span{
          color : red;
        }
        hr{
          width : 350px;
          border: 1px solid black;
        }
        label{
          margin : 15px 0px 0px 20px ;
          font-size : 14px;
          font-weight : bold ;
          color : black ;
          float : left ;
        }
        input:focus{
          outline : none;
        }
        a {
          text-decoration: none;
        }
        h1{
          margin : 0px;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
        }
        .login-button{
          margin : 25px;
          height : 50px;
          color : white ;
          width: 250px;
          border-radius : 10px;
          border : none;
          font-size : 18px;
          font-weight : bold;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,Helvetica, sans-serif;
          //background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          background: linear-gradient(to right, #11998e, #38ef7d);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
        }
        .login-button:hover{
          cursor : pointer;
        }
        .google-button{
          margin : 40px;
          width : 250px;
          padding: 10px;
          align-items: center;
          justify-content: center;
          border: none ; 
          font-size : 18px;
          font-weight : bold;
          border-radius : 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
        }
        .google-button:hover{
          cursor : pointer;
        }
        .google-icon{
          float: left ;
        }
      `}
    </style>
  </div>
);

export default Login; 