import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import MainPageContainer from "./mainpage/mainpage";
import UserShowContainer from "./users/user_show_container";

import Modal from "./header/session_form/modal";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <HeaderContainer />
        </header>

        <Switch>
            <ProtectRoute
                exact path="/users/:userId"
                component={UserShowContainer}
            />
            <Route exact path="/signup" component={MainPageContainer} />
            <Route exact path="/login" component={MainPageContainer} />
            <Route exact path="/" component={MainPageContainer} />
            <Redirect to="/"></Redirect>
        </Switch>

    </div>
);
export default App;
