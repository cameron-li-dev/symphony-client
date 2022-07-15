import {crosshairColour, ICrosshairCenterDot, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";
import {getOutlines} from "../crosshair-service";
import "./crosshair-center-dot.scss"

export const CrosshairCenterDot = (props: { colour: crosshairColour, outlinesConfig: ICrosshairOutlines, centerDot: ICrosshairCenterDot }) => {
    const { colour, outlinesConfig, centerDot } = props;
    const style = {
        width: centerDot.dot.centerDotThickness,
        height: centerDot.dot.centerDotThickness
    }
    const outlineStyle = getOutlines(outlinesConfig);

    if (!centerDot.dotEnabled) {
        return (
            <div>
            </div>
        )
    }
    return (
        <div className="crosshair-dot-container">
            <div className="crosshair-dot" style={{
                ...style,
                background: colour,
                opacity: centerDot.dot.centerDotOpacity,
            }}>
            </div>
            <div className="crosshair-dot-outline" style={{
                ...style,
                ...outlineStyle
            }}></div>
        </div>
    )
}

export default CrosshairCenterDot;
