import React, { Fragment } from "react"

import CoverPage from "../components/comps_Home/CoverPage"
import GallerySection from "../components/comps_Home/GallerySection"
import TeamSection from "../components/comps_Home/TeamSection"
import ContactSection from "../components/comps_Home/ContactSection"

import "../assets/styles/styles_Home/Home.css"

class Home extends React.Component{

    render(){

        return(

            <Fragment>
                <CoverPage />
                <GallerySection />
                <TeamSection />
                <ContactSection />
            </Fragment>
            
        )

    }

}

export default Home