import React from "react"

import Employees from "./Employees"

import "../../assets/styles/styles_Team/TeamContent.css"
import person1 from "../../assets/images/person1.jpeg"
import person2 from "../../assets/images/person2.jpeg"
import person3 from "../../assets/images/person3.jpeg"
import person4 from "../../assets/images/person4.jpeg"
import person5 from "../../assets/images/person5.jpeg"
import person6 from "../../assets/images/person6.jpeg"

function TeamContent(props){

    return(

        <section className="Team-Section">
            <Employees name="Julio Rivas" src={person1}/>
            <Employees name="Marco Donald" src={person2}/>
            <Employees name="Daniela Gomez" src={person3}/>
            <Employees name="Nestor Parra" src={person4}/>
            <Employees name="Elizabeth Correa" src={person5}/>
            <Employees name="Anna Robinson" src={person6}/>
        </section>

    )

}

export default TeamContent