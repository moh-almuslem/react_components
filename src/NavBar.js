import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "./image/logo2.png"


function NavBar(props) {

    console.log( props.path )

  
    const [state, setState] = useState({})

 
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
      <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} width="100px" />
          </Link>
  
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <ul className='nav nav-pills'>
              <li className="nav-item"><Link to="/" className={`nav-link ${state['/']}`}>Home</Link></li>
              <li className="nav-item"><Link to="/about" className={`nav-link ${state['/about']}`}>About</Link></li>
              <li className="nav-item"><Link to="/contact" className={`nav-link ${state['/contact']}`}>Contact</Link></li>
            </ul>
          </ul>
  
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2"><Link to="/login" className={`nav-link ${state['/login']}`}>Login</Link></button>
            <button type="button" className="btn btn-warning"><Link to="/register" className={`nav-link ${state['/register']}`}>Register</Link></button>
          </div>
        </div>
      </div>
    </header>
    )


}

export default NavBar;


