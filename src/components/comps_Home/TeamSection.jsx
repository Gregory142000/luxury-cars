import React from "react"

import Button from "./Button"

import "../../assets/styles/styles_Home/TeamSection.css"

class TeamSection extends React.Component{

    render(){

        return(

            <section className="TeamSection">
                <div className="screen"></div>
                <div className="Team-Content">
                <p className="Team-text">Conoce al grupo de expertos que hacen de tu viaje más seguro, comodo y accesible</p>
                <Button className={"Button Button-Team"} href={"/team"} text={"Team"} />
                </div>
            </section>

        )

    }

}

export default TeamSection