import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Gallery from "../pages/Gallery"
import Contact from "../pages/Contact"
import Team from "../pages/Team"
import Layout from "./Layout"

function App(){

    // if (window.location.href.match("luxury-cars")) window.location.href = "/";

    return(

        <BrowserRouter>
            <Layout>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/team" component={Team} /> 
                </Switch>
            
            </Layout>
        </BrowserRouter>
    )

}

export default App