import React from "react"

import CoverPageSection from "../components/CoverPageSection"
import TeamContent from "../components/comps_Team/TeamContent"
import NavButton from "../components/NavButton"
 
function Team(props){

    return(

        <React.Fragment>
            <NavButton />
            <CoverPageSection text="Team" className="Cover-Page-Section Team" />
            <TeamContent />
        </React.Fragment>

    )

}

export default Team