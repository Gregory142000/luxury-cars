import React from "react"
import { Link } from "react-router-dom"

import "../assets/styles/Footer.css"

function Footer(){

    return(

        <React.Fragment>
            <footer className="Footer">
                <div className="socials-icons"> 
                    <Link to="#" target="_blank" ><img src="../assets/images/facebook.png" alt="Facebook Icon" className="icon"/></Link>
                    <Link to="#" target="_blank" ><img src="../assets/images/twitter.png" alt="Twitter Icon" className="icon"/></Link>
                    <Link to="#" target="_blank" ><img src="../assets/images/instagram.png" alt="Instagram Icon" className="icon"/></Link>
                </div>
                <hr/>
                <div className="info-footer">
                    <p>All rights reserved. 2020</p>
                    <p>Website create by Gregory Vicent</p>
                </div>
            </footer>
        </React.Fragment>

    )

}

export default Footer