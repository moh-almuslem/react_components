import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    function logout() {
        updateUser(
            {
                ...{}
            }
        )
        localStorage.clear()
    }


    // formState: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [formState, setFormState] = useState("initial");

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;

    let avatarInput;

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
    function updateUserInfo() {

        const errors = [];
        
        // 1. Validate all of the required fields
        if( firstNameField.value.length === 0 ) {
            errors.push("Please enter your first name");
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name");
        }
        if( emailField.value.length === 0 ) {
            errors.push("Please enter valid email");
        }
        if( passwordField.value.length === 0 ) {
            errors.push("Please enter valid password");
        }
      

        // 1.1 If there are errors, set the state to "validationFailed"
        if(errors.length > 0) {
            setFormState("validationFailed");
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "loading"
        else {
            setFormState("loading");
            setErrorsState([]);
           
            
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('phoneNumber', phoneField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND}/user/update`,
                {
                    method: 'PATCH',
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
            <div className='bg' style={{"height":"1200px"}}>
            <div>
            <br/><br/>
                    <h1 style={{"color": "Brown","font-size":"70px","fontFamily":"Cooper Black"}}><b>My Profile</b></h1>
                    <div className='container'>
                    
                    <table className="viewall" >
 
  {/* <tbody>  */}
  
    <tr>
      <th scope="row">Firstname</th>
      <td> <p style={{"color":"black"}}><b>{firstName}</b></p></td>
     
    </tr>
    <tr>
      <th scope="row">Lastname</th>
      <td><p style={{"color":"black"}}><b>{lastName}</b></p></td>
     
    </tr>

    <tr>
      <th scope="row">Email</th>
      <td > <p style={{"color":"black"}}><b>{email}</b></p></td>
  
    </tr>
    <tr>
      <th scope="row">Avatar</th>
      <td ><img src={avatar}/></td>
    
    </tr>
  {/* </tbody> */}
</table>
                    </div>


                    <br/>
                    <center>
                    <button onClick={logout}  className="review" style={{"backgroundColor":"maroon", "color":"white"}}> Log out</button>
                   
                    <button onClick={updateUserInfo}  className="review"> Update</button>
                    </center>
                </div>
                <br/>

                <h1>UPDATE INFO</h1>
            <br/>
<div style={{"margin":"15px"}}>
            <label>Enter your firstname *</label>
            <input ref={
                function(theInputElement) {
                    firstNameField = theInputElement;
                }
            } className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input 
            ref={
                function(thisInputField) {
                    lastNameField = thisInputField;
                }
            } 
            className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input ref={
                function(thisInputField) {
                    emailField = thisInputField
                }
            }
            className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input ref={
                function(thisInputField) {
                    passwordField = thisInputField
                }
            }
            className="field form-control" name="password" autocomplete="off" type="password" />

            <label>Enter your phone (optional)</label>
            <input ref={
                function(thisInputField) {
                    phoneField = thisInputField
                }
            }
            className="field form-control" name="phone" type="text" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input ref={(element)=>{ avatarInput = element}} 
            onChange={attachFile}
            className="field form-control" id="photo" name="file" 
            type="file" multiple="multiple"/>

           


            {/* {
                formState !== "loading" &&
                <div><center>
                    <button 
                    onClick={updateUserInfo}
                    className="review"
                    style={{"padding": "10px", "font-size": "16px"}}>
                        update
                    </button><br/><br/>
                    </center>
                </div>
            } */}

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
                <div className="alert alert-success">You have a successfully updated your account</div>
            }

            {
                formState === "unsuccessful" &&
                <div className="alert alert-success">You have a successfully updated your account</div>
            }

            {
                formState === "loading" &&
                <p>Loading...</p>
            }



</div>




                </div>
            
            
        )
    }
}

export default ProfileScreen;



