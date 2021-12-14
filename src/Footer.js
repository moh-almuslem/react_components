import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import background from './image/bottom.png'

function Footer(props) {


  const [state, setState] = useState({})

 
  useEffect(
    function() {
          setState(         
              {
                  // Usee spread syntax to copy a new blank object
                ...{}, 
                  //Overwrite with new key-value pair, where the key is the current path
                [props.path]: 'active'
              }
            )
    },
    [props.path]
)


    return (

      <div style={{ backgroundImage: `url(${background})` }}>
      
    
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className={`nav-link ${state['/']}`}>Home</Link></li>
      <li className="nav-item"><Link to="/about" className={`nav-link ${state['/about']}`}>About</Link></li>
      <li className="nav-item"><Link to="/contact" className={`nav-link ${state['/contact']}`}>Contact</Link></li>
    </ul>
    <p className="text-center text-muted">© 2021 Photography Group</p>
  </footer>
</div>
</div>
    )
}
export default Footer;