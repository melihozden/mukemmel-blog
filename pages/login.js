import React from 'react';
import Nav from "../components/nav";
import Grid from '@material-ui/core/Grid';


const outStyle = {
    alignItems: 'center',
    fontSize: "48px",
    fontWeight: "bold",
  }
const  Login = () =>  (
  <div className="container">
    <Nav/>
    <Grid container>
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={4}>
        <div className="login-div">
          
        </div>
      </Grid>
      <Grid item xs={4}>

      </Grid>
    </Grid>




  </div>
);

export default Login ; 