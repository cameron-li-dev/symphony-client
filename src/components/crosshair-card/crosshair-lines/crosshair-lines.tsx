import "./crosshair-lines.scss";
import {crosshairColour, ICrosshairLines, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";

export const CrosshairLines = (props: { colour: crosshairColour, outlines: ICrosshairOutlines, lines: ICrosshairLines }) => {
    const { colour, outlines, lines } = props;
    const style = {
        background: colour,
        opacity: lines.lineOpacity
    }
    const outlineStyle = getOutlines(outlines);

    return (
        <div>
            <div className="crosshair-line" style={{
                ...style,
                ...outlineStyle,
                width: lines.lineThickness + "px",
                height: lines.lineLength + "px",
                transform: `translate(0, ${lines.lineOffset}px)`
            }}/>
            <div className="crosshair-line" style={{
                ...style,
                ...outlineStyle,
                width: lines.lineLength + "px",
                height: lines.lineThickness + "px",
                transform: `translate(${lines.lineOffset}px, 0)`
            }}/>
            <div className="crosshair-line" style={{
                ...style,
                ...outlineStyle,
                width: lines.lineThickness + "px",
                height: lines.lineLength + "px",
                transform: `translate(0, -${lines.lineOffset + 1}px)`
            }}/>
            <div className="crosshair-line" style={{
                ...style,
                ...outlineStyle,
                width: lines.lineLength + "px",
                height: lines.lineThickness + "px",
                transform: `translate(-${lines.lineOffset + 1}px, 0)`
            }}/>
        </div>
    )
}

const getOutlines = (outlines: ICrosshairOutlines) => {
    if (outlines.outlineOpacity > 0 && outlines.outlineThickness > 0) {
        return {
            border: `${ outlines.outlineThickness }px solid rgba(0, 0, 0, ${ outlines.outlineOpacity })`
        }
    }
    return {};
}

export default CrosshairLines;