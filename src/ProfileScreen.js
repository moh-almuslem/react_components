import React, { useContext } from 'react';
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

    if (!localStorage.getItem('jsonwebtoken')) {
        return (<Redirect to="/login" />)
    }
    else {
        return (
            <div className='bg' style={{"height":"1000px"}}>
            <div>
               
                    <h1 style={{"color": "Brown","font-size":"70px","fontFamily":"Cooper Black"}}><b>My Profile</b></h1>
                    <div className='container'>
                    
                    <table class="table table-bordered">
 
  <tbody>
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
      <td colspan="2"> <p style={{"color":"black"}}><b>{email}</b></p></td>
    </tr>
    <tr>
      <th scope="row">Avatar</th>
      <td colspan="2"><img src={avatar}/></td>
    </tr>
  </tbody>
</table>
                    </div>


                    <br/>
                    <center>
                    <button onClick={logout}  className="review"> Log out</button>
                    </center>
                </div>  
                </div>
            
            
        )
    }
}

export default ProfileScreen;



