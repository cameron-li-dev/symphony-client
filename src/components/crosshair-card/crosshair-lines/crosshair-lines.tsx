import "./crosshair-lines.scss";
import {ICrosshairLines, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";

export const CrosshairLines = (props: { colour: string, outlinesConfig: ICrosshairOutlines, linesConfig: ICrosshairLines }) => {
    const { colour, outlinesConfig, linesConfig } = props;
    const style = {
        background: colour,
        opacity: linesConfig.lines.lineOpacity
    }
    const outlineStyle = getOutlines(outlinesConfig);

    if (linesConfig.linesEnabled) {
        return (
            <div>
                <div className="crosshair-line" style={{
                    // Top
                    ...style,
                    ...outlineStyle,
                    width: linesConfig.lines.lineThickness + "px",
                    height: linesConfig.lines.lineLength + "px",
                    transform: `translate(-2px, -${linesConfig.lines.lineOffset + linesConfig.lines.lineLength + 2}px)`
                }}/>
                <div className="crosshair-line" style={{
                    // Right
                    ...style,
                    ...outlineStyle,
                    width: linesConfig.lines.lineLength + "px",
                    height: linesConfig.lines.lineThickness + "px",
                    transform: `translate(${linesConfig.lines.lineOffset + linesConfig.lines.lineThickness - 2}px, -2px)`
                }}/>
                <div className="crosshair-line" style={{
                    // Bottom
                    ...style,
                    ...outlineStyle,
                    width: linesConfig.lines.lineThickness + "px",
                    height: linesConfig.lines.lineLength + "px",
                    transform: `translate(-2px, ${linesConfig.lines.lineOffset + linesConfig.lines.lineThickness - 2}px)`
                }}/>
                <div className="crosshair-line" style={{
                    // Left
                    ...style,
                    ...outlineStyle,
                    width: linesConfig.lines.lineLength + "px",
                    height: linesConfig.lines.lineThickness + "px",
                    transform: `translate(-${linesConfig.lines.lineOffset + linesConfig.lines.lineLength + 2}px, -2px)`
                }}/>
            </div>
        )
    }

    return (
        <div></div>
    )
}

const getOutlines = (outlinesConfig: ICrosshairOutlines) => {
    if (outlinesConfig.outlinesEnabled) {
        if (outlinesConfig.outline.outlineOpacity > 0 && outlinesConfig.outline.outlineThickness > 0) {
            return {
                border: `${ outlinesConfig.outline.outlineThickness }px solid rgba(0, 0, 0, ${ outlinesConfig.outline.outlineOpacity })`
            }
        }
    }
    return {};
}

export default CrosshairLines;
