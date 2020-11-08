import React from "react"
import { Link } from "react-router-dom"

import "../assets/styles/Footer.css"

function Footer(){

    return(

        <React.Fragment>
            <footer className="Footer">
                <div className="info-footer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit explicabo voluptatum sint est eum, ex ut perferendis odio facilis?</p>
                    <p>All rights reserved. 2020</p>
                    <p>Website create by <strong>Gregory Vicent</strong></p>
                </div>
                <hr/>
                <div className="socials-icons"> 
                    <Link to="#" target="_blank" ><i class="fab fa-instagram"></i></Link>
                    <Link to="#" target="_blank" ><i class="fab fa-twitter"></i></Link>
                    <Link to="#" target="_blank" ><i class="fab fa-telegram"></i></Link>
                </div>
            </footer>
        </React.Fragment>

    )

}

export default Footer