// Importación de Paquetes necesarios de React
import React from "react"

// Importación de Clases 
import "../../assets/styles/styles_Home/CoverPage.css"

// El componente "CoverPage" representa el carrusel con imagenes y mensajes al inicio de la pagina de "Home"
class CoverPage extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            p1Class: "Cover-Page-p",
            p2Class: "Cover-Page-p delete",
            p2TextOptions: [`Somos más que automóviles de lujo, Somos una pasión`, "Somos Velocidad", "Somos Comodidad", "Somos Rebeldía", "Somos Clase"],
            carsClass: ["Cover-Page backgroundUrl-1","Cover-Page backgroundUrl-2", "Cover-Page backgroundUrl-3", "Cover-Page backgroundUrl-4", "Cover-Page backgroundUrl-5"],
            className: "Cover-Page backgroundUrl-1",
            p2Text: "Somos más que automóviles de lujo, Somos una pasión",

        }

    }

    // "switchImage" cambia en intervalos de tiempo la clase del div padre del carrusel para representar imagenes diferentes, de igual forma se encarga de cotrolar los mesajes que muestra el carrusel.  
    switchImage(){

        this.count = 0

            this.switchImagesTime = setInterval(() => {


                this.setState({

                    className: "Cover-Page black-Page",

                })

                this.visibilityPage = setTimeout(() => {

                    if(this.count > 4) this.count = 0

                    this.setState({

                        className: this.state.carsClass[this.count], 
                        p2Text: this.state.p2TextOptions[this.count]

                    })

                }, 1500)

                this.count++

                console.log(this.count)

            }, 6000)

    }

    // "coverPage" es el primer metodo que se ejecuta al entrar en la pagina de Home, mediante promesas se encarga de sincronizar y representar los dos primeros mensajes que aparecen. 
    coverPage(){

        new Promise((resolve) => {

            this.timerClass = setTimeout(() => {

                resolve()

                this.setState({

                    p1Class: "Cover-Page-p delete"

                })

            }, 2000)

        }).then(() => {

            this.timerClass2 = setTimeout(() => {

                this.setState({

                    p2Class: "Cover-Page-p"
            
                })

            }, 1000)

        })

    }

    componentDidMount(){

        this.coverPage()
        this.switchImage()
        
    }

    componentWillUnmount(){

        clearTimeout(this.timerClass)
        clearTimeout(this.timerClass2)
        clearTimeout(this.visibilityPage)
        clearInterval(this.switchImagesTime)

    }

    render(){  

        return(

            <div className={this.state.className}>
                <p id="message-header-1" className={this.state.p1Class}>¿Quienes Sómos?</p>
                <p id="message-header-2" className={this.state.p2Class}>{this.state.p2Text}</p>
            </div>

        )

    }

}

export default CoverPage