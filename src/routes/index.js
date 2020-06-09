import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Profilepage from "../pages/Profilepage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/profile" component={Profilepage} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}