import React from "react";

function CheckBoxes(props) {
    
    function selectCars() {
        props.onChangeSearchCars();
    }

    return (
        <div className="Panel">
            <div className="Panel-row">
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="mustang"
                        id="mustang"
                    />
                    <label htmlFor="mustang">MUSTANG</label>
                </div>
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="ferrari"
                        id="ferrari"
                    />
                    <label htmlFor="ferrari">FERRARI</label>
                </div>
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="jaguar"
                        id="jaguar"
                    />
                    <label htmlFor="jaguar">JAGUAR</label>
                </div>
            </div>
            <div className="Panel-row">
                <div className="Panel-item middle">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="bmw"
                        id="bmw"
                    />
                    <label htmlFor="bmw">BMW</label>
                </div>
                <div className="Panel-item middle">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="lamborghini"
                        id="lamborghini"
                    />
                    <label htmlFor="lamborghini">LAMBORGHINI</label>
                </div>
                <div className="Panel-item middle">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="rolls-royce"
                        id="rolls-royce"
                    />
                    <label htmlFor="rolls-royce">ROLLS-ROYCE</label>
                </div>
            </div>
            <div className="Panel-row">
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="audi"
                        id="audi"
                    />
                    <label htmlFor="audi">AUDI</label>
                </div>
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="bugatti"
                        id="bugatti"
                    />
                    <label htmlFor="bugatti">BUGATTI</label>
                </div>
                <div className="Panel-item">
                    <input
                        onChange={selectCars}
                        type="checkbox"
                        value="porsche"
                        id="porsche"
                    />
                    <label htmlFor="porsche">PORSCHE</label>
                </div>
            </div>
        </div>
    );
}

export default CheckBoxes;
