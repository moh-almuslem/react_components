import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
function BookingScreen() {


  const [formState, setFormState] = useState("initial");


  let checkBox;
  let maternityCheckBox;
  let newbornCheckBox;
  let familyCheckBox;
  let cakemashCheckBox;

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

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>

</form>






      <br/>


        <table>
          <thead>
            <tr>
              <th scope="col">Photosession Type</th>
              <th scope="col">Price</th>
              <th scope="col">Choose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" >MATERNITY PHOTOSHOOT</th>
              <td>1000</td>
              <td>
                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input ref={
                    function (thisCheckbox) {
                      maternityCheckBox = thisCheckbox;
                    }
                  }
                    className="form-check-input" 
                    type="checkbox" 
                    role="switch" 
                    id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </td>

            </tr>
            <tr>
              <th scope="row">NEWBORN PHOTOSHOOT</th>
              <td>1000</td>
              <td>
                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input ref={
                    function (thisCheckbox) {
                      newbornCheckBox = thisCheckbox;
                    }
                  }


                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </td>

            </tr>
            <tr>
              <th scope="row">FAMILY PHOTO SHOOT</th>
              <td>1000</td>
              <td>

                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input

                    ref={
                      function (familyCheckBox) {
                        checkBox = familyCheckBox;
                      }
                    }

                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </td>

            </tr>

            <tr>
              <th scope="row">CAKESMASH PHOTOSHOOT</th>
              <td>1000</td>
              <td>
                <div className="form-check form-switch" style={{ "margin-left": "75px" }}>
                  <input

                    ref={
                      function (cakemashCheckBox) {
                        checkBox = cakemashCheckBox;
                      }
                    }
                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
              </td>

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
              Book
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
          <div className="alert alert-success">You have successfully booked a Photosession</div>
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

