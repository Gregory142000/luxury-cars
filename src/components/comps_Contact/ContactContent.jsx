import React from "react";

import "../../assets/styles/styes_Contact/ContactContent.css";

function ContactContent(props) {
    return (
        <section className="Contact-Content">
            <h2 className="Contact-Subtitle">Estamos Felices de Ayudarte</h2>
            <p className="Contact-Content-Text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                aliquid obcaecati quod vel amet repudiandae qui inventore
                dignissimos necessitatibus assumenda? Voluptatibus fugiat odit
                cumque eos officia dolore aspernatur eaque tempore saepe, nulla
                perferendis fuga explicabo architecto quos tempora maiores,
                debitis praesentium quis ea laborum ipsa omnis. Recusandae,
                perferendis! Mollitia iusto, recusandae animi amet sequi
                nesciunt sed quod quo itaque cupiditate natus quae illum
                aspernatur voluptate quasi perferendis eos possimus consequatur
                velit nihil quam veritatis? Architecto possimus unde aut, ad
                magnam repudiandae adipisci fugit provident porro? Ea fugiat rem
                modi dolorum rerum, ipsa sunt eligendi totam, asperiores
                incidunt maiores molestias eveniet?
            </p>
            <div className="Contact-Box-data">
                <div className="Contact-box">
                    <p className="Contact-Data">RIF:542345435</p>
                    <p className="Contact-Data">
                        Dirección: Lorem ipsum, dolor sit amet consectetur
                        adipisicing.
                    </p>
                    <p className="Contact-Data">
                        Horarios de atención al cliente:
                        <br /> 
                        5:00am - 8:00pm
                    </p>
                </div>
                <div className="Contact-box Numbers">
                    <p>Telefonos:</p>
                    <ul className="Contact-Numbers">
                        <li>
                            (5454) 454 544 56
                        </li>
                        <li>
                            (7878) 787 787 78
                        </li>
                        <li>
                            (1212) 121 121 21
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ContactContent;
