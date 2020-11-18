import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/NavButton.css";
import "../assets/hamburgers/dist/hamburgers.css";

class NavButton extends React.Component {
    constructor(props) {
        super(props);

        this.activeScreenNav = this.activeScreenNav.bind(this);
        this.removeClass = this.removeClass.bind(this);
    }

    activeScreenNav() {
        document
            .querySelector(".screenNav")
            .classList.toggle("screenNav-active");
        document.querySelector(".my-hamburger").classList.toggle("is-active");
    }

    removeClass() {
        window.scrollTo(0, 0);

        document
            .querySelector(".screenNav")
            .classList.remove("screenNav-active");
        document.querySelector(".my-hamburger").classList.remove("is-active");
    }

    componentWillUnmount() {
        this.removeClass();
    }

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.activeScreenNav}
                    class="hamburger hamburger--arrow my-hamburger"
                    type="button"
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div className="screenNav">
                    <ul className="list-NavButton">
                        <li>
                            <Link
                                onClick={this.removeClass}
                                className="itemNavButton"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={this.removeClass}
                                className="itemNavButton"
                                to="/gallery"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={this.removeClass}
                                className="itemNavButton"
                                to="/team"
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={this.removeClass}
                                className="itemNavButton"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default NavButton;
