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
            <div className='bg' style={{"height":"1000px", "width": "1000px"}}>
            <div>
                <div className="container py-5"  style={{"margin-top": "5em", "max-width": "75em"}}>
                    <h1 style={{"color": "Brown","font-size":"70px","fontFamily":"Cooper Black"}}><b>My Profile</b></h1>
                    <div className='container'>
                    <div>
                        <ul>
                            <li style={{"color":"black"}}><b>{firstName}</b></li>
                            <li style={{"color":"black"}}><b>{lastName}</b></li>
                            <li style={{"color":"black"}}><b>{email}</b></li>
                            <li style={{"color":"black"}}><b>{avatar}</b></li>
                        </ul>
                    </div>
                    <center>
                    <button onClick={logout}  className="review"> Log out</button>
                    </center>
                </div>  
                </div>
            </div>
            </div>
        )
    }
}

export default ProfileScreen;