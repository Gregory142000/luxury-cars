import React from "react"

import "../../assets/styles/styles_Home/CoverPage.css"

class CoverPage extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            $p1: <p id="message-header-1" className="Cover-Page-p">¿Quienes Sómos?</p>,
            $p2: <p id="message-header-2" className="Cover-Page-p delete">Sómos más que automóviles de lujo,<br/>Sómos una pasión</p>

        }

    }

    componentDidMount(){

        new Promise((resolve) => {

            this.timerClass = setTimeout(() => {

                resolve()

                this.setState({

                    $p1: <p id="message-header-1" className="Cover-Page-p delete">¿Quienes Sómos?</p>
         
                })

            }, 3000)

        }).then(() => {

            this.timerClass2 = setTimeout(() => {

                this.setState({

                    $p2: <p id="message-header-2" className="Cover-Page-p">Sómos más que automóviles de lujo,<br/>Sómos una pasión</p>
            
                })

            }, 1000)

        }).catch()

    }

    componentWillUnmount(){

        clearTimeout(this.timerClass)
        clearTimeout(this.timerClass2)

    }

    render(){  

        return(

            <div className="Cover-Page">
                {this.state.$p1}
                {this.state.$p2}
            </div>

        )

    }

}

export default CoverPage