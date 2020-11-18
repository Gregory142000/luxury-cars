import React from "react";

import "../../assets/styles/styles_Gallery/CardPhotos.css";

function CardPhotos(props) {
    let dataPhotos = props.alt;

    return (
        <div
            className="CardPhotos active"
            data-photo={dataPhotos.toLowerCase()}
        >
            <img className="CardPhotos-img" src={props.src} alt={dataPhotos} />
            <p className="CardPhotos-Text">{dataPhotos}</p>
        </div>
    );
}

export default CardPhotos;
