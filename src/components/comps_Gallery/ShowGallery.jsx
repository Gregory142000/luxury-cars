import React from "react"

import Panel from "./Panel"
import Photos from "./Photos"

import "../../assets/styles/styles_Gallery/ShowGallery.css"

class ShowGallery extends React.Component{

    render(){

        return(

            <section className="Gallery-Section">
                <Panel  />
                <Photos  />
            </section>

        )

    }

}

export default ShowGallery