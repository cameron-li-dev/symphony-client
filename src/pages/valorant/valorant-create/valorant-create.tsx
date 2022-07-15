import "./valorant-create.scss";
import NavigationButton from "../../../components/button/navigation-button/navigation-button";
import defaultCrosshair from "../../../data/default-crosshair.json";
import React from "react";
import CrosshairCard from "../../../components/crosshair-card/crosshair-card";
import CrosshairCreate from "../../../components/crosshair-create/crosshair-create";

export const ValorantCreate = () => {
    const [crosshair, setCrosshair] = React.useState(JSON.parse(JSON.stringify(defaultCrosshair)));

    return (
        <div className="valorant-create-container">
            <NavigationButton path="/valorant"/>
            <div className="valorant-create-content">
                <div className="valorant-create-content--display">
                    <CrosshairCard crosshair={crosshair}/>
                </div>
                <div className="valorant-create-content--settings">
                    <CrosshairCreate crosshair={crosshair} updateCrosshair={setCrosshair}/>
                </div>
            </div>
        </div>
    );
}

export default ValorantCreate;
