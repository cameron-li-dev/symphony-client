import "./crosshair-card.scss";
import ICrosshair from "../../data/interfaces/ICrosshair";
import CrosshairLines from "./crosshair-lines/crosshair-lines";
import CrosshairCenterDot from "./crosshair-main/crosshair-center-dot";
import { importCrosshair } from "./crosshair-service";
import React, {useEffect} from "react";

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

    useEffect(() => {
        let imported = importCrosshair("0;c;4P;h;0;0t;1;0l;9;0o;7;0a;0.46;0e;1.787;1t;8;1l;9;1o;33;1a;0.974;1m;0;1e;2.602");
        console.log(imported);
    }, [])


    return (
        <div className="crosshair-card-container" style={{background: cardBackgroundColours[backgroundColour]}} onClick={() => toggleBackgroundColour()}>
            <div className="crosshair-card-content">
                {/*<CrosshairCenterDot centerDot={defaultCrosshair.config.centerDot}/>*/}
                {/*<CrosshairLines colour={defaultCrosshair.config.colour} outlines={defaultCrosshair.config.outlines} lines={defaultCrosshair.config.innerLines}/>*/}
                {/*<CrosshairLines colour={defaultCrosshair.config.colour} outlines={defaultCrosshair.config.outlines} lines={defaultCrosshair.config.outerLines}/>*/}
            </div>
        </div>
    )
}

export default CrosshairCard;
