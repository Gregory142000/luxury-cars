import React from "react";

import CheckBoxes from "./CheckBoxes";

import "../../assets/styles/styles_Gallery/Panel.css";

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.selectCars = this.selectCars.bind(this);
    }

    selectCars() {
        let checkBox = document.querySelectorAll("input"),
            photos = document.querySelectorAll(".CardPhotos"),
            carsArray = [];

        checkBox.forEach((el) => {
            if (el.checked) carsArray.push(el.value);
        });

        photos.forEach((el) => {
            carsArray.indexOf(el.getAttribute("data-photo")) !== -1 ||
            carsArray.length === 0
                ? el.classList.add("active")
                : el.classList.remove("active");
        });
    }

    render() {
        return <CheckBoxes onChangeSearchCars={this.selectCars} />;
    }
}

export default Panel;
