import React from "react"

import CoverPageSection from "../components/CoverPageSection"
import NavButton from "../components/NavButton"
import ShowGallery from "../components/comps_Gallery/ShowGallery"

class Gallery extends React.Component{

    render(){
        return(

            <React.Fragment>
                <NavButton />
                <CoverPageSection text="Gallery" className="Cover-Page-Section Gallery" />
                <ShowGallery /> 
            </React.Fragment>

        )
    }
 

}

export default Gallery