import React from "react"

import CardPhotos from "./CardPhotos"

import "../../assets/styles/styles_Gallery/Photos.css"
import mustang1 from "../../assets/images/mustang1.webp"
import ferrari1 from "../../assets/images/ferrari1.webp"
import jaguar1 from "../../assets/images/jaguar1.jpg"
import bmw1 from "../../assets/images/bmw1.jpg"
import lamborghini1 from "../../assets/images/lamborghini1.jpg"
import rollsRoyce1 from "../../assets/images/rolls-royce1.jpg"
import audi1 from "../../assets/images/audi1.jpg"
import bugatti1 from "../../assets/images/bugatti1.jpg"
import porsche1 from "../../assets/images/porsche1.webp"

class Photos extends React.Component{

    render(){

        return(
        
            <div className="Photos">
                <CardPhotos src={mustang1} alt="Mustang" />
                <CardPhotos src={ferrari1} alt="Ferrari" />
                <CardPhotos src={jaguar1} alt="Jaguar" />
                <CardPhotos src={bmw1} alt="BMW" />
                <CardPhotos src={lamborghini1} alt="Lamborghini" />
                <CardPhotos src={rollsRoyce1} alt="Rolls-Royce" />
                <CardPhotos src={audi1} alt="Audi" />
                <CardPhotos src={bugatti1} alt="Bugatti" />
                <CardPhotos src={porsche1} alt="Porsche" />
            </div>

        )

    }

}

export default Photos