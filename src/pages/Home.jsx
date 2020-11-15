import React, { Fragment } from "react"

import CoverPage from "../components/comps_Home/CoverPage"
import GallerySection from "../components/comps_Home/GallerySection"
import TeamSection from "../components/comps_Home/TeamSection"
import ContactSection from "../components/comps_Home/ContactSection"
import NavButton from "../components/NavButton"

import "../assets/styles/styles_Home/Home.css"

function Home(props){


    return(

        <Fragment>
            <NavButton />
            <CoverPage />
            <GallerySection />
            <TeamSection />
            <ContactSection />
        </Fragment>
            
        )

}

export default Home