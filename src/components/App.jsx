import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Gallery from "../pages/Gallery"
import Contact from "../pages/Contact"
import Team from "../pages/Team"

function App(){

    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/Team" component={Team} /> 
            </Switch>
        </BrowserRouter>
    )

}

export default App