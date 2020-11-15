import React from "react"

import CoverPageSection from "../components/CoverPageSection"
import TeamContent from "../components/comps_Team/TeamContent"

function Team(props){

    return(

        <React.Fragment>
            <CoverPageSection text="Team" className="Cover-Page-Section Team" />
            <TeamContent />
        </React.Fragment>

    )

}

export default Team