import React from "react"
import { Link } from "react-router-dom"

import "../assets/styles/Navbar.css"

const Navbar = () => {

    return (

        <React.Fragment>

            <nav className="Navbar">
                <ul>
                    <li>
                        <Link to="/" className="link" >Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="link" >Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/team" className="link" >Team</Link>
                    </li>
                </ul>
            </nav>

        </React.Fragment>

    )

}

export default Navbar