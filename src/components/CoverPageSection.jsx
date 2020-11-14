import React from "react"

import "../assets/styles/CoverPageSection.css"

function CoverPageSection(props){

    return(

        <section className={props.className}>
            <h1 className="Contact-Title">{props.text}</h1>
        </section>

    )

}

export default CoverPageSection