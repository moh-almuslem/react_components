import logo2 from "./image/logo2.png"
import contact from "./image/contact.jpeg"
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
function ContactScreen() {

  const [formState, setFormState] = useState("initial");


  let checkBox;
  let maternityCheckBox;
  let newbornCheckBox;
  let familyCheckBox;
  let cakesmashCheckBox;

  // FormData is a constructor for creating an object
  // that works like an HTML form element
  const formData = new FormData();

  // errorsState is for tracking the validation errors
  const [errorsState, setErrorsState] = useState([]);

  // attachFile() will append to formData the avatar file
  const attachFile = (evt) => {
    // Create an array from the file attachments
    const files = Array.from(evt.target.files);

    // For each attachment, append the file to formData
    files.forEach(
      (fileAttachment, index) => {
        formData.append(index, fileAttachment);
      }
    );
  }



  function sendMessage(){


    // formState = setFormState("successful") 

    alert("Message has been sent")

  }

  
  return (

    <div className="bg" style={{ "height": "1000px" }}>
      <br /><br />
      <h1 className="text-center">CONTACT US!</h1>
      <img src={contact}  width="300" height="300" loading="lazy"></img>
      <br />
          
        <form>
          <table style={{ "width": "600px" }}>
            <thead>
              <tr>
                <th scope="col" style={{ "width": "200px", "backgroundColor": "#FFFAE7" }}>YOUR EMAIL: </th>
                <th scope="col" style={{ "width": "200px", "backgroundColor": "#FFFAE7" }}>YOUR MESSAGE:</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="email" name="_replyto" />
                </th>
                <th><textarea name="message"></textarea></th>
              </tr>


            </tbody>
          </table >
          <br />
          <center>
           
{
          formState !== "loading" &&
          <div><center>
            <button
              onClick={sendMessage}
              className="review"
              style={{ "padding": "10px", "font-size": "16px" }}>
              SEND MESSAGE
            </button><br /><br />
          </center>
          </div>
        }

        {
          formState === "validationFailed" &&
          <div className="alert alert-danger">

            <ul>
              {
                errorsState.map(
                  (error) => {
                    return <li>{error}</li>
                  }
                )
              }
            </ul>

          </div>
        }

        {
          formState === "successful" &&
          <div className="alert alert-success">Your message has been sent.</div>
        }

        {
          formState === "unsuccessful" &&
          <div className="alert alert-danger">An error occured. Please try again.</div>
        }

        {
          formState === "loading" &&
          <p>Loading...</p>
        }



          </center>
        </form>
      
        <p className="lead" style={{ "color": "Brown", "font-size": "70px", "fontFamily": "Broadway" }} ><h2>We would love to hear from you!</h2></p>

     
      <center>

          <div className="col-10 col-sm-8 col-lg-6">
            <img src={logo2}  width="400" height="150" loading="lazy"/>
          </div>
          </center>
    </div>
  )
}

export default ContactScreen;