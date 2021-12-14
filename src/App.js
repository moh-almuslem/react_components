import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import MainScreen from "./MainScreen";
import RegistrationScreen from './RegistrationScreen'
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import LogintScreen from "./LoginScreen";


function App() {

    return(
        

        <BrowserRouter>
            <Switch>
                 <LayoutRoute path="/" exact={true} component={MainScreen} />
                 <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                 <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                 <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                 <LayoutRoute path="/login" exact={true} component={LogintScreen} />
            </Switch>
        </BrowserRouter>

        
    )

}

export default App;