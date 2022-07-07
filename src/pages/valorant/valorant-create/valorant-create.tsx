import "./valorant-create.scss";
import NavigationButton from "../../../components/button/navigation-button/navigation-button";
import defaultCrosshair from "../../../data/default-crosshair.json";
import React from "react";
import CrosshairCard from "../../../components/crosshair-card/crosshair-card";
import ICrosshair from "../../../data/interfaces/ICrosshair";

export const ValorantCreate = () => {
    const [crosshair, setCrosshair] = React.useState<ICrosshair>(JSON.parse(JSON.stringify(defaultCrosshair)));

    const setCrosshairDot = () => {
        const crosshairToggle = !crosshair.config.centerDot.dotEnabled;

        setCrosshair({
            ...crosshair,
            config: {
                ...crosshair.config,
                centerDot: {
                    ...crosshair.config.centerDot,
                    dotEnabled: crosshairToggle
                }
            }
        });
    }

    const setShowInnerLines = () => {
        const innerLineToggle = !crosshair.config.innerLines.linesEnabled;

        setCrosshair({
            ...crosshair,
            config: {
                ...crosshair.config,
                innerLines: {
                    ...crosshair.config.innerLines,
                    linesEnabled: innerLineToggle
                }
            }
        });
    }

    const setShowOuterLines = () => {
        const outerLineToggle = !crosshair.config.outerLines.linesEnabled;

        setCrosshair({
            ...crosshair,
            config: {
                ...crosshair.config,
                outerLines: {
                    ...crosshair.config.outerLines,
                    linesEnabled: outerLineToggle
                }
            }
        });
    }

    return (
        <div className="valorant-create-container">
            <NavigationButton path="/valorant"/>
            <div className="valorant-create-content">
                <div className="valorant-create-content--display">
                    <CrosshairCard crosshair={crosshair}/>
                </div>
                <div className="valorant-create-content--settings">
                    <div onClick={() => setCrosshairDot()}>
                        Show Dot
                    </div>
                    <div onClick={() => setShowInnerLines()}>
                        Show Inner Lines
                    </div>
                    <div onClick={() => setShowOuterLines()}>
                        Show Outer Lines
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ValorantCreate;
