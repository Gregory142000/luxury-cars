import React from "react"

import Panel from "./Panel"
import Photos from "./Photos"

import "../../assets/styles/styles_Gallery/ShowGallery.css"

class ShowGallery extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            cars: []

        }

    }

    searchCars(PhotosCars){

        this.setState({

            cars: PhotosCars

        })

    }

    render(){

        const myCars = this.state.cars

        return(

            <section className="Gallery-Section">
                <Panel onChange={this.searchCars} />
                <Photos cars={myCars} />
            </section>

        )

    }

}

export default ShowGallery