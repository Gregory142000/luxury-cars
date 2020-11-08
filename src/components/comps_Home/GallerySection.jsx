import React from "react"

import Button from "./Button"

import "../../assets/styles/styles_Home/GallerySection.css"
import Polygon_1 from "../../assets/images/Polygon-1.png"
import Polygon_2 from "../../assets/images/Polygon-2.png"

class GallerySection extends React.Component{

    render(){

        return(

            <section className="gallery-section" >
                <h2 className="gallery-title">Mira todos nuestros modelos y <br/>decide a donde ir</h2>
                <div className="section-gallery-box-1">
                    <img className="polygon_1" src={Polygon_1} alt="Muestra de auto 1"/>
                </div>
                <div className="section-gallery-box-2">
                    <img className="polygon_2" src={Polygon_2} alt="Muestra de auto 2"/>
                    <Button className={"Button Button-Gallery"} href={"/gallery"} text={"Gallery"}/>
                </div>           
            </section>

        )

    }

}

export default GallerySection