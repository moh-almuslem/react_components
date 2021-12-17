import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import MainScreen from "./MainScreen";
import RegistrationScreen from './RegistrationScreen'
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import LoginScreen from "./LoginScreen";
import PhotosessionScreen from "./PhotosessionScreen";
import BookingScreen from "./BookingScreen";

import ProfileScreen from './ProfileScreen.js';
function App() {

    return(
        

        <BrowserRouter>
            <Switch>
                 <LayoutRoute path="/" exact={true} component={MainScreen} />
                 <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                 <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                 <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                 <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                 <LayoutRoute path="/photosession" exact={true} component={PhotosessionScreen} />
                 <LayoutRoute path="/book" exact={true} component={BookingScreen} />
                 <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
            </Switch>
        </BrowserRouter>

        
    )

}

export default App;