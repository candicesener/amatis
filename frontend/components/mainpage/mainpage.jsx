import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from "../header/session_form/modal";

import { AuthRoute } from "../../util/route_util";

const MainPageContainer = () => (
    <div className="main-page">
        <AuthRoute exact path="/login" component={Modal} />
        <AuthRoute exact path="/signup" component={Modal} />
    </div>
);
export default MainPageContainer;
