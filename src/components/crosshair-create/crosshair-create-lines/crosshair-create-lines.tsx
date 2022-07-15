import React, {useEffect} from "react";
import {ICrosshairLines} from "../../../data/interfaces/ICrosshairConfig";

const CrosshairCreateLines = (props: { lines: ICrosshairLines, updateLines: (lines: ICrosshairLines) => void }) => {
    const [lines, setLines] = React.useState(props.lines);
    const [linesEnabled, setLinesEnabled] = React.useState(lines.linesEnabled);
    const [lineOpacity, setLineOpacity] = React.useState(lines.lines.lineOpacity);
    const [lineLength, setLineLength] = React.useState(lines.lines.lineLength);
    const [lineThickness, setLineThickness] = React.useState(lines.lines.lineThickness);
    const [lineOffset, setLineOffset] = React.useState(lines.lines.lineOffset);
    const [movementError, setMovementError] = React.useState(lines.lines.movementErrorEnabled);
    const [movementErrorMultiplier, setMovementErrorMultiplier] = React.useState(lines.lines.movementError.multiplier);
    const [firingError, setFiringError] = React.useState(lines.lines.firingErrorEnabled);
    const [firingErrorMultiplier, setFiringErrorMultiplier] = React.useState(lines.lines.firingError.multiplier);

    useEffect(() => {
        setLines(l => {
            return {
                linesEnabled: linesEnabled,
                lines: {
                    lineOpacity: lineOpacity,
                    lineLength: lineLength,
                    lineThickness: lineThickness,
                    lineOffset: lineOffset,
                    movementErrorEnabled: movementError,
                    movementError: {
                        multiplier: movementErrorMultiplier
                    },
                    firingErrorEnabled: firingError,
                    firingError: {
                        multiplier: firingErrorMultiplier
                    }
                }
            }
        })
    }, [linesEnabled, lineOpacity, lineLength, lineThickness, lineOpacity, movementError, movementErrorMultiplier, firingError, firingErrorMultiplier]);

    useEffect(() => {
        props.updateLines(lines);
    }, [props, lines]);

    return (
        <div className="valorant-create-content--settings-lines">
            <div className="valorant-create-content--settings-toggle">
                <div className="valorant-create-content--settings-toggle--title">Show Inner Lines</div>
                <div className="valorant-create-content--settings-toggle--buttons">
                    <div onClick={() => setLinesEnabled(true)}>Yes</div>
                    <div onClick={() => setLinesEnabled(false)}>No</div>
                </div>
            </div>
        </div>
    )
}

export default CrosshairCreateLines;
