import "./crosshair-card.scss";
import ICrosshair from "../../../data/interfaces/ICrosshair";
import CrosshairLines from "./crosshair-lines/crosshair-lines";
import CrosshairCenterDot from "./crosshair-main/crosshair-center-dot";
import React from "react";
const cardBackgroundColours = [
    "darkslateblue",
    "lightslategray",
    "darkseagreen",
    "darkorange",
    "darkred",
    "darkgoldenrod"
]

export const CrosshairCard = (props: { crosshair: ICrosshair }) => {
    const [backgroundColour, setBackgroundColour] = React.useState<number>(0);
    const { crosshair } = props;

    const toggleBackgroundColour = () => {
        if (backgroundColour === cardBackgroundColours.length - 1) {
            setBackgroundColour(0);
        } else {
            setBackgroundColour(backgroundColour + 1);
        }
    }

    return (
        <div className="crosshair-card-container" style={{background: cardBackgroundColours[backgroundColour]}} onClick={() => toggleBackgroundColour()}>
            <div className="crosshair-card-content">
                <CrosshairCenterDot colour={crosshair.config.colour} outlinesConfig={crosshair.config.outlines} centerDot={crosshair.config.centerDot}/>
                <CrosshairLines colour={crosshair.config.colour} outlinesConfig={crosshair.config.outlines} linesConfig={crosshair.config.innerLines}/>
                <CrosshairLines colour={crosshair.config.colour} outlinesConfig={crosshair.config.outlines} linesConfig={crosshair.config.outerLines}/>
            </div>
        </div>
    )
}

export default CrosshairCard;
