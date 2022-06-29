import "./crosshair-lines.scss";
import {crosshairColour, ICrosshairLines, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";

export const CrosshairLines = (props: { colour?: crosshairColour, outlines?: ICrosshairOutlines, lines?: ICrosshairLines }) => {
    const { colour, outlines, lines } = props;
    const style = {
        background: colour,
        // opacity: lines?.lineOpacity
    }
    const outlineStyle = getOutlines(outlines);

    // if (lines) {
    //     return (
    //         <div>
    //             <div className="crosshair-line" style={{
    //                 // Top
    //                 ...style,
    //                 ...outlineStyle,
    //                 width: lines.lineThickness + "px",
    //                 height: lines.lineLength + "px",
    //                 transform: `translate(-2px, -${lines.lineOffset + lines.lineLength + 2}px)`
    //             }}/>
    //             <div className="crosshair-line" style={{
    //                 // Right
    //                 ...style,
    //                 ...outlineStyle,
    //                 width: lines.lineLength + "px",
    //                 height: lines.lineThickness + "px",
    //                 transform: `translate(${lines.lineOffset + lines.lineThickness - 2}px, -2px)`
    //             }}/>
    //             <div className="crosshair-line" style={{
    //                 // Bottom
    //                 ...style,
    //                 ...outlineStyle,
    //                 width: lines.lineThickness + "px",
    //                 height: lines.lineLength + "px",
    //                 transform: `translate(-2px, ${lines.lineOffset + lines.lineThickness - 2}px)`
    //             }}/>
    //             <div className="crosshair-line" style={{
    //                 // Left
    //                 ...style,
    //                 ...outlineStyle,
    //                 width: lines.lineLength + "px",
    //                 height: lines.lineThickness + "px",
    //                 transform: `translate(-${lines.lineOffset + lines.lineLength + 2}px, -2px)`
    //             }}/>
    //         </div>
    //     )
    // }
    return (
        <div></div>
    )
}

const getOutlines = (outlines?: ICrosshairOutlines) => {
    // if (outlines) {
    //     if (outlines.outlineOpacity > 0 && outlines.outlineThickness > 0) {
    //         return {
    //             border: `${ outlines.outlineThickness }px solid rgba(0, 0, 0, ${ outlines.outlineOpacity })`
    //         }
    //     }
    // }
    return {};
}

export default CrosshairLines;
