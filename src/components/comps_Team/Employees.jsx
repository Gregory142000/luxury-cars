import React from "react"

import "../../assets/styles/styles_Team/Employees.css"

function Employees(props){

    return(

        <div className="Employee-Card">
            <img className="Image-Employee" src={props.src} alt=""/>
            <div className="Info-Employee">
                <h2 className="Name-Employee">{props.name}</h2>
                <p className="Description-Employee">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perferendis inventore ab sint iste magni consequuntur voluptate fugiat a earum?</p>
            </div>
        </div>

    )

}

export default Employees