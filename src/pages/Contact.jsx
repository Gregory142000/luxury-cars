import React from "react"

import CoverPageSection from "../components/CoverPageSection" 
import ContactContent from "../components/comps_Contact/ContactContent"
import NavButton from "../components/NavButton"

class Contact extends React.Component{

    render(){

        return(

            <React.Fragment>
                <NavButton />
                <CoverPageSection className="Cover-Page-Section Contact" text="Contact"/>
                <ContactContent />
            </React.Fragment>

        )

    }

}

export default Contact