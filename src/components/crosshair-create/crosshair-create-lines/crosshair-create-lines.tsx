import React, {useEffect} from "react";
import {ICrosshairLines} from "../../../data/interfaces/ICrosshairConfig";
import {Slider} from "../../slider/slider";

const CrosshairCreateLines = (props: { isInner: boolean, lines: ICrosshairLines, updateLines: (lines: ICrosshairLines) => void }) => {
    const { isInner, updateLines } = props;
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
    }, [linesEnabled, lineOpacity, lineLength, lineThickness, lineOffset, movementError, movementErrorMultiplier, firingError, firingErrorMultiplier]);

    useEffect(() => {
        updateLines(lines);
    }, [lines]);

    const linePrefix: string = isInner ? "Inner Lines" : "Outer Lines";

    return (
        <div className="content-create-section">
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix}:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" onClick={() => setLinesEnabled(true)}>On</div>
                    <div className="crosshair-create-button" onClick={() => setLinesEnabled(false)}>Off</div>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Opacity:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={1} step={0.01} defaultValue={lineOpacity} disabled={!linesEnabled} updateValue={setLineOpacity}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Length:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={6} step={1} defaultValue={lineLength} disabled={!linesEnabled} updateValue={setLineLength}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Thickness:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={6} step={1} defaultValue={lineThickness} disabled={!linesEnabled} updateValue={setLineThickness}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Offset:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={10} step={1} defaultValue={lineOffset} disabled={!linesEnabled} updateValue={setLineOffset}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Movement Error:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" onClick={() => setMovementError(true)}>On</div>
                    <div className="crosshair-create-button" onClick={() => setMovementError(false)}>Off</div>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Movement Error Multiplier:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={5} step={0.01} defaultValue={movementErrorMultiplier} disabled={!linesEnabled && !movementError} updateValue={setMovementErrorMultiplier}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Firing Error:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" onClick={() => setFiringError(true)}>On</div>
                    <div className="crosshair-create-button" onClick={() => setFiringError(false)}>Off</div>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    {linePrefix} Firing Error Multiplier:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={5} step={0.01} defaultValue={firingErrorMultiplier} disabled={!linesEnabled && !firingError} updateValue={setFiringErrorMultiplier}/>
                </div>
            </div>
        </div>
    )
}

export default CrosshairCreateLines;
