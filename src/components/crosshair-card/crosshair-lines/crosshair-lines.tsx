import "./crosshair-lines.scss";
import {crosshairColour, ICrosshairLines, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";
import {getOutlines} from "../crosshair-service";

export const CrosshairLines = (props: { colour: crosshairColour, outlinesConfig: ICrosshairOutlines, linesConfig: ICrosshairLines }) => {
    const { colour, outlinesConfig, linesConfig } = props;
    const style = {
        background: colour,
        opacity: linesConfig.lines.lineOpacity
    }
    const outlineStyle = getOutlines(outlinesConfig);
    const outlineOffset = outlinesConfig.outlinesEnabled ? outlinesConfig.outline.outlineThickness : 0;
    const firingErrorOffset = linesConfig.lines.firingErrorEnabled ? 4 : 0;

    if (linesConfig.linesEnabled) {
        return (
            <div>
                <div className="crosshair-lines">
                    <div className="crosshair-line" style={{
                        // Top
                        ...style,
                        width: linesConfig.lines.lineThickness + "px",
                        height: linesConfig.lines.lineLength + "px",
                        top: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength}px`
                    }}/>
                    <div className="crosshair-line" style={{
                        // Right
                        ...style,
                        width: linesConfig.lines.lineLength + "px",
                        height: linesConfig.lines.lineThickness + "px",
                        right: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength}px`
                    }}/>
                    <div className="crosshair-line" style={{
                        // Bottom
                        ...style,
                        width: linesConfig.lines.lineThickness + "px",
                        height: linesConfig.lines.lineLength + "px",
                        bottom: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength}px`
                    }}/>
                    <div className="crosshair-line" style={{
                        // Left
                        ...style,
                        width: linesConfig.lines.lineLength + "px",
                        height: linesConfig.lines.lineThickness + "px",
                        left: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength}px`
                    }}/>
                </div>
                <div className="crosshair-lines-outlines">
                    <div className="crosshair-line-outline" style={{
                        // Top
                        ...outlineStyle,
                        width: linesConfig.lines.lineThickness + "px",
                        height: linesConfig.lines.lineLength + "px",
                        top: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength + outlineOffset}px`
                    }}/>
                    <div className="crosshair-line-outline" style={{
                        // Right
                        ...outlineStyle,
                        width: linesConfig.lines.lineLength + "px",
                        height: linesConfig.lines.lineThickness + "px",
                        right: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength + outlineOffset}px`
                    }}/>
                    <div className="crosshair-line-outline" style={{
                        // Bottom
                        ...outlineStyle,
                        width: linesConfig.lines.lineThickness + "px",
                        height: linesConfig.lines.lineLength + "px",
                        bottom: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength + outlineOffset}px`
                    }}/>
                    <div className="crosshair-line-outline" style={{
                        // Left
                        ...outlineStyle,
                        width: linesConfig.lines.lineLength + "px",
                        height: linesConfig.lines.lineThickness + "px",
                        left: `-${firingErrorOffset + linesConfig.lines.lineOffset + linesConfig.lines.lineLength + outlineOffset}px`
                    }}/>
                </div>
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default CrosshairLines;
