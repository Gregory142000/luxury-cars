import React from "react"

import Button from "./Button"

import "../../assets/styles/styles_Home/ContactSection.css"
import ImageContact from "../../assets/images/photo-1514316454349-750a7fd3da3a.jfif"

class ContactSection extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            img: "Image-Contact remove-img"

        }

    }

    scrollSpy(){

        this.section = document.querySelectorAll("section")

        const cb = (entries) => {

            if(entries[0].isIntersecting){

               this.setState({

                    img: "Image-Contact"

               }) 

            }

        }

        const observer = new IntersectionObserver(cb, {

            threshold: 0.7,

        })

        observer.observe(this.section[2])

    }

    componentDidMount(){

        this.scrollSpy()

    }

    render(){

        return(

            <section className="ContactSection" >
                <div className="Box-Contact-1">
                    <img className={this.state.img} src={ImageContact} alt="Carro de Muestra"/>
                </div>
                <div className="Box-Contact-2">
                    <p className="Contact-Text">Ponte en contacto con nosotros y haznos parte de tu camino</p>
                    <Button className={"Button Button-Contact"} href={"/contact"} text={"Contact"}/>
                </div>
            </section>

        )

    }

}

export default ContactSection