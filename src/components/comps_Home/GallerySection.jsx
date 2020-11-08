import React from "react"

import Button from "./Button"

import "../../assets/styles/styles_Home/GallerySection.css"
import Polygon_1 from "../../assets/images/Polygon-1.png"
import Polygon_2 from "../../assets/images/Polygon-2.png"

class GallerySection extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            polygon1: "polygon_1 remove-polygon-1",
            polygon2: "polygon_2 remove-polygon-2"

        }

    }

    scrollSpy(){

        this.section = document.querySelectorAll("section")

        const cb = (entries) => {

            if(entries[0].isIntersecting){

               this.setState({

                    polygon1: "polygon_1",
                    polygon2: "polygon_2"

               }) 

            }

        }

        const observer = new IntersectionObserver(cb, {

            threshold: 0.7,

        })

        observer.observe(this.section[0])

    }

    componentDidMount(){

        this.scrollSpy()

    }

    render(){


        return(

            <section className="gallery-section" data-scroll-spy>
                <h2 className="gallery-title">Mira todos nuestros modelos y <br/>decide a donde ir</h2>
                <div className="section-gallery-box-1">
                    <img className={this.state.polygon1} src={Polygon_1} alt="Muestra de auto 1"/>
                </div>
                <div className="section-gallery-box-2">
                    <img className={this.state.polygon2} src={Polygon_2} alt="Muestra de auto 2"/>
                    <Button className={"Button Button-Gallery"} href={"/gallery"} text={"Gallery"}/>
                </div>           
            </section>

        )

    }

}

export default GallerySection