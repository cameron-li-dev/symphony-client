import {ICrosshairCenterDot, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";
import {getOutlines} from "../crosshair-service";
import "./crosshair-center-dot.scss"

export const CrosshairCenterDot = (props: { colour: string, outlinesConfig: ICrosshairOutlines, centerDot: ICrosshairCenterDot }) => {
    const { colour, outlinesConfig, centerDot } = props;
    const style = {
        width: centerDot.dot.centerDotThickness,
        height: centerDot.dot.centerDotThickness
    }
    const outlineStyle = getOutlines(outlinesConfig);
    const outlineOffset = outlinesConfig.outlinesEnabled ? outlinesConfig.outline.outlineThickness : 0;

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
                ...outlineStyle,
                top: `-${outlineOffset}`,
                right: `-${outlineOffset}`
            }}></div>
        </div>
    )
}

export default CrosshairCenterDot;