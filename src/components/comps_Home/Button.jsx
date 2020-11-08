import React from "react"
import { Link } from "react-router-dom"

import "../../assets/styles/styles_Home/Button.css"

function Button(props){

    return(

        <React.Fragment>
            <Link className={props.className} to={props.href}>{props.text}</Link>
        </React.Fragment>

    )

}

export default Button