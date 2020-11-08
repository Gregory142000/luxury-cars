// Importación de los modulos necesarios de React
import React from "react"
import { Link } from "react-router-dom"

// Importación de los estilos css 
import "../assets/styles/Navbar.css"

// El componente "Navbar" representa la barra de navegación superior que aparece en cada pagina
class Navbar extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            NavClassName: "Navbar",

        }

    }

    moveNavbar(){

        window.addEventListener("scroll", () => {

            if(window.scrollY !== 0){
    
                this.setState({
    
                    NavClassName: "Navbar Navbar-active Move-Navbar"
    
                })
    
            } else{
    
                this.setState({
    
                    NavClassName: "Navbar Navbar-active"
    
                })
    
            }

        })

    }


    classSwitchTime(){

        this.classSwitch = setTimeout(() => {

            this.setState({

                NavClassName: "Navbar Navbar-active"

            })

        }, 3000)

    }

    // Dentro del componentDidMount se agrego un setTimeout para cambiar la clase del Navbar transcurrido cierto tiempo. 
    componentDidMount(){

        this.moveNavbar()
        this.classSwitchTime()
        
    }

    componentWillUnmount(){

        clearTimeout(this.classSwitch)

    }

    render(){

        return (

            <React.Fragment>

                <nav className={this.state.NavClassName}>
                    <ul>
                        <li>
                            <Link to="/" className="link" >Home</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="link" >Gallery</Link>
                        </li>
                        <li>
                            <Link to="/team" className="link" >Team</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link" >Contact</Link>
                        </li>
                    </ul>
                </nav>

            </React.Fragment>

        )
    }
   

}

export default Navbar