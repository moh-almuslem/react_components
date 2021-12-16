import {Route} from 'react-router-dom';
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import BottomImg from './BottomImg.js';
import React from 'react';



function LayoutRoute(props) {

    return (
        <>
            <NavBar {...props}/>
                 <Route path={props.path} exact={props.exact} component={props.component}/>
            <BottomImg/>
            <Footer {...props}/>
        </>

       
    )
}

export default LayoutRoute;