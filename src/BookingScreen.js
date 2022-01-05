import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
function BookingScreen() {


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


  function bookingInfo() {

    const errors = [];

    // 1. Validate all of the required fields

   

    if (maternityCheckBox.checked=== false) {
      errors.push("Please choose at least one option");
    } else if (maternityCheckBox.checked=== true){

      formState = setFormState("successful") 

    }  
    
    if (newbornCheckBox.checked=== true){

      formState = setFormState("successful") 
    }  
    
    if (familyCheckBox.checked=== true){

      formState = setFormState("successful") 
    }  
    
     if (cakesmashCheckBox.checked=== true){

      formState = setFormState("successful") 
    }  

    let string=""
  for (string in errors){
    string.fontcolor("black", errors[string])
  }

    // 1.1 If there are errors, set the state to "validationFailed"
    if (errors.length > 0) {
      setFormState("validationFailed");
      setErrorsState(errors);
    }

    // 1.2 If there are no errors, set the state to "loading"
    else {
      setFormState("loading");
      setErrorsState([]);


      fetch(
        `${process.env.REACT_APP_BACKEND}/booking/product_listing`,
        {
          method: 'POST',
          body: formData
        }
      )
        // The .json() method will convert a 'stringified' object to a JavaScript object
        .then(
          (backendResponseJson) => backendResponseJson.json()
        )
        // 2.1 If the submission is successful, set state to "successful"
        .then(
          (backendResponse) => {
            console.log(backendResponse.status);
            if (backendResponse.status === "ok") {
              setFormState("successful");
            } else {
              setFormState("unsuccessful");
            }
          }
        )
        // 2.2 If the submission is successful, set state to "unsucessful"
        .catch(
          (err) => {
            console.log(err);
            setFormState("unsuccessful");
          }
        );
    }
  }

  if (!localStorage.getItem('jsonwebtoken')) {
    return (<Redirect to="/login" />)
  }

  else {

    return (





      <div className="table table-bordered" className="bg" style={{ "height": "1000px", "padding": "10px" }}>

        
<br/><br/><br/>

<table style={{"width":"600px"}}>
  <thead>
    <tr>
      <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>Baby's Name (optional) </th>
      <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>Baby's Birthday (optioanl)</th>
      <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>Parent's Name (optional)</th>
      <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>Date of Photosession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
    <input type="email" className="form-control" id="exampleFormControlInput1"/>
  </th>
      <th><input type="email" className="form-control" id="exampleFormControlInput1"/></th>
      <th><input type="email" className="form-control" id="exampleFormControlInput1"/></th>
      <th><input type="email" className="form-control" id="exampleFormControlInput1"/></th>
    </tr>
  
    
  </tbody>
</table >


      <br/>


        <table style={{"width":"600px"}}>
          
          <thead>
            <tr>
              <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>PHOTOSESSION TYPE</th>
              <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7" }}>PRICE</th>
              <th scope="col" style={{"width":"200px", "backgroundColor":"#FFFAE7"}}>CHOOSE</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" >MATERNITY PHOTOSHOOT</th>
              <th>1000</th>
              <th>
         
                <div className="form-check form-switch" style={{ "margin-left": "75px"}}>
                
                  <input ref={function (thisCheckbox) {maternityCheckBox = thisCheckbox}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                  
                </div>
               
              </th>
           
            </tr>
            <tr>
              <th scope="row">NEWBORN PHOTOSHOOT</th>
              <th>1000</th>
              <th>
                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input ref={
                    function (thisCheckbox) {
                      newbornCheckBox = thisCheckbox;
                    }
                  }


                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </th>

            </tr>
            <tr>
              <th scope="row">FAMILY PHOTO SHOOT</th>
              <th>1000</th>
              <th>

                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input

                    ref={
                      function (thisCheckbox) {
                        familyCheckBox = thisCheckbox;
                      }
                    }

                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </th>

            </tr>

            <tr>
              <th scope="row">CAKESMASH PHOTOSHOOT</th>
              <th>1000</th>
              <th>
                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input

                    ref={
                      function (thisCheckbox) {
                        cakesmashCheckBox = thisCheckbox;
                      }
                    }
                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </th>

            </tr>
          </tbody>
        </table>
        <br />



        {
          formState !== "loading" &&
          <div><center>
            <button
              onClick={bookingInfo}
              className="review"
              style={{ "padding": "10px", "font-size": "16px" }}>
              BOOK YOUR PHOTOSESSION
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
          <div className="alert alert-success">You have successfully booked a Photosession. <br/> If you want to modifiy your reservation, please contact us <Link to="/contact">here</Link>.</div>
        }

        {
          formState === "unsuccessful" &&
          <div className="alert alert-danger">An error occured. Please try again.</div>
        }

        {
          formState === "loading" &&
          <p>Loading...</p>
        }



        {/* <center>
          <Link to="/"><button className="review">Book</button></Link>
        </center> */}
      </div>
    )
  }
}
export default BookingScreen;

