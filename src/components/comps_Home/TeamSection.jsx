import React from "react"

import Button from "./Button"

import "../../assets/styles/styles_Home/TeamSection.css"

class TeamSection extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            pText: "Team-text remove-text",

        }

    }

    scrollSpy(){

        this.section = document.querySelectorAll("section")

        const cb = (entries) => {

            if(entries[0].isIntersecting){

               this.setState({

                    pText: "Team-text"

               }) 

            }

        }

        const observer = new IntersectionObserver(cb, {

            threshold: 0.7,

        })

        observer.observe(this.section[1])

    }

    componentDidMount(){

        this.scrollSpy()

    }

    render(){

        return(

            <section className="TeamSection">
                <div className="screen"></div>
                <div className="Team-Content">
                <p className={this.state.pText}>Conoce al grupo de expertos que hacen de tu viaje más seguro, comodo y accesible</p>
                <Button className={"Button Button-Team"} href={"/team"} text={"Team"} />
                </div>
            </section>

        )

    }

}

export default TeamSection