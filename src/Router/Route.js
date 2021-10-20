import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Cube from "../Components/Cube";
import Home from "../Components/Home";
import Text from "../Components/Text";

const AppRouter = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Cube">
                    <Cube/>
                </Route>
                <Route exact path="/Text">
                    <Text/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default AppRouter;

