import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import logo from "./image/logo2.png"
import { UserContext } from './UserContext';



function NavBar(props) {

    console.log( props.path )

  
    
    const [state, setState] = useState({})
    const { loggedIn } = useContext(UserContext)

    console.log('loggedIn', loggedIn)


 
    useEffect(
      function() {
            setState(         
                {
                    // Use spread syntax to copy a new blank object
                  ...{}, 
                    //Overwrite with new key-value pair, where the key is the current path
                  [props.path]: 'active'
                }
              )
      },
      [props.path]
  )

    return (
      <header className="p-1 bg-light text-white">
      <div className="navbar">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} width="100px" />
          </Link>
  
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <ul className='nav nav-pills'>
              <li className="nav-item"><Link to="/" className={`nav-link ${state['/']}`}>HOME</Link></li>
              <li className="nav-item"><Link to="/photosession" className={`nav-link ${state['/photosession']}`}>INDIVIDUAL PHOTOSESSION</Link></li>
              <li className="nav-item"><Link to="/book" className={`nav-link ${state['/book']}`}>BOOK PHOTOSESSION</Link></li>
              <li className="nav-item"><Link to="/about" className={`nav-link ${state['/about']}`}>ABOUT</Link></li>
              <li className="nav-item"><Link to="/contact" className={`nav-link ${state['/contact']}`}>CONTACT</Link></li>
            </ul>
          </ul>
  
          <div className="text-end">
          <ul className='nav nav-pills'>



                          { 
                loggedIn === false &&
                <ul className='nav nav-pills'>
                    {/* <button type="button" className="btn btn-outline-light me-2"><Link to="/register" className={`nav-link ${state['/register']}`}>REGISTER</Link></button> */}
                    <li className="nav-item"><Link to="/register" className={`nav-link ${state['/register']}`}>REGISTER</Link></li>
                </ul>
              }
              { 
                loggedIn === false &&
                <ul className='nav nav-pills'>
                    {/* <button type="button" className="btn btn-outline-light me-2"><Link to="/login" className={`nav-link ${state['/login']}`}>LOGIN</Link></button> */}
                    <li className="nav-item"><Link to="/login" className={`nav-link ${state['/login']}`}>LOGIN</Link></li>
                </ul>
              }

             
              <ul className='nav nav-pills'>
                {/* <Link to="/profile" className={`nav-link ${state['/profile']}`}>PROFILE</Link> */}
                <li className="nav-item"><Link to="/profile" className={`nav-link ${state['/profile']}`}>PROFILE</Link></li>
              </ul>
              </ul>
          </div>
        </div>
      </div>
      </div>
    </header>
    )
}

export default NavBar;


