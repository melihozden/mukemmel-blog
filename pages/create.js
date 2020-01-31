import React from "react";
import Head from "next/head";
import Nav from "..//components/nav"
import TextField from '@material-ui/core/TextField';
import TextArea from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

const titleStyle = {
  width: "100%",
  height: "50px",
  margin: "15px 15px",
  fontSize: "48px",
  border: "none",
  fontWeight: "bold",
}
const detailsStyle = {
  height: "250px",
  maxWidth: "100%",
  minWidth: "100%",
  maxHeight: "50%",
  minHeight: "150px",
  margin: "10px",
  padding: "10px",
  fontSize: "18px",
  borderRadius: "10px",
  fontWeight: "bold",
}

const alertStyle = {
  width: "50%",
  margin: "auto"
}

const tags = [
  'No Tag',
  'Agriculture',
  'Animals & Pets',
  'Architectural',
  'Arts',
  'Automotive & Vehicle',
  'Bussiness & Vehicle',
  'C#',
  'Children & Childcare',
  'Computer',
  'Construction & Tools',
  'Dating',
  'Education',
  'Entertainment',
  'Environmental & Green',
  'Fashion & Beauty',
  'Food & Drink',
  'Games',
  'Home & Design',
  'Industrial',
  'Internet',
  'IT',
  'Java',
  'Javascript',
  'Medical',
  'Photography',
  'Politics',
  'Programming',
  'Religion',
  'Retail',
  'Security',
  'Spa & Esthetics',
  'Sport',
  'Technology',
  'Travel & Hotel',

];
// post işlemi yapıldı onayı için (yukarıda çıkan yeşil bildirim) componenti stateful yazmak zorunda kaldım. 
class Create extends React.Component {

  constructor() {
    super()
    this.state = {
      success: false // success alert false at the beginning
    }
  }
  handleSubmit = (e) => {
    this.setState({
      success: true
    })
  }
  render() {
    const { success } = this.state;
    return (
      <div className="container">
        <Nav />
        <Head>
          <title>Create Post</title>
        </Head>
        {success &&
          <div style={alertStyle}>
            <Alert variant="filled" severity="success">
              Post has been publish successfully!
        </Alert>
          </div>
        }
        <div className="form-div">
          <h1>Post a Blog</h1>
          <form className="createForm" method="POST" onSubmit={event => { this.handleSubmit(event) }} action="https://melihozden.herokuapp.com/create">
            <Grid container>
              <Grid item xs={3}></Grid>

              <Grid item xs={6}>
                <TextField size="normal" label="Title" style={titleStyle} name="postTitle" />
                <select name="postTag" className="select-tag">
                  {
                    tags.map((tag, i) => (
                      <option key={i} value={tag}>{tag}</option>
                    ))
                  }
                </select>
                <TextArea style={detailsStyle} placeholder="..." name="postDetail" />
                <button type="submit">
                  Publish
              </button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </form>
        </div>

    <style jsx>{`
      label{
        width : 100%;
      }
      .select-tag{
        float :left ;
        font-size : 14px;
        margin-left : 10px;
        width : 200px; 
        height : 40px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      }
      .form-div{
        height : 100%;
        border-radius: 10px;
        text-align:center;
      }    
      button{
        width: 120px;
        padding: 10px;
        margin : 15px 10px;
        font-size : 16px;
        border-radius: 10px;
        border: none;
        font-weight : bold;
        color : white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: #0582C6;
        float : left ;
      }
      button:hover{
        cursor: pointer;
      }
      h1{
        font-family: Arial sans-serif;
      }
      .button-div{
        width:50%;
        margin:auto;
      }
      
      `}</style>
      </div>
    )
  }

}
export default Create;

