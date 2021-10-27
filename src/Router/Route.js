import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Cube from "../Components/Cube";
import Home from "../Components/Home";
import TextItem from "../Components/Text";
import Wave from "../Components/Wave";

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
                <Route exact path="/TextItem">
                    <TextItem/>
                </Route>
                <Route exact path="/Wave"> 
                    <Wave/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default AppRouter;

