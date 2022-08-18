import "./valorant-create.scss";
import NavigationButton from "../../../components/button/navigation-button/navigation-button";
import defaultCrosshair from "../../../data/default-crosshair.json";
import React, {useEffect} from "react";
import CrosshairCard from "../../../components/valorant/crosshair-card/crosshair-card";
import CrosshairCreate from "../../../components/valorant/crosshair-create/crosshair-create";
import {exportCrosshair} from "../../../components/valorant/crosshair-card/crosshair-service";

export const ValorantCreate = () => {
    const [crosshair, setCrosshair] = React.useState(JSON.parse(JSON.stringify(defaultCrosshair)));
    const [exportCode, setExportCode] = React.useState("");

    useEffect(() => {
        setExportCode(exportCrosshair(crosshair));
    }, [crosshair]);

    return (
        <div className="valorant-create-container">
            <NavigationButton path="/valorant"/>
            <div className="valorant-create-content">
                <div>
                    <div className="valorant-create-content--display">
                        <CrosshairCard crosshair={crosshair}/>
                    </div>
                    <div style={{width: '128px', wordWrap: "break-word"}}>{exportCode}</div>
                </div>

                <div className="valorant-create-content--settings">
                    <CrosshairCreate crosshair={crosshair} updateCrosshair={setCrosshair}/>
                </div>
            </div>
        </div>
    );
}

export default ValorantCreate;
