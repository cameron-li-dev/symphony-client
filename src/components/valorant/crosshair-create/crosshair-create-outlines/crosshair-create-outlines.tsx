import React, {useEffect} from "react";
import {ICrosshairOutlines} from "../../../../data/interfaces/ICrosshairConfig";
import "../crosshair-create.scss";
import {Slider} from "../../slider/slider";

const CrosshairCreateOutlines = (props: { outlines: ICrosshairOutlines, updateOutlines: (outlines: ICrosshairOutlines) => void}) => {
    const [outlines, setOutlines] = React.useState<ICrosshairOutlines>(props.outlines);
    const [outlinesEnabled, setOutlinesEnabled] = React.useState<boolean>(outlines.outlinesEnabled);
    const [outlineOpacity, setOutlineOpacity] = React.useState<number>(outlines.outline.outlineOpacity);
    const [outlineThickness, setOutlineThickness] = React.useState<number>(outlines.outline.outlineThickness);

    useEffect(() => {
        setOutlines(o => {
            return {
                outlinesEnabled: outlinesEnabled,
                outline: {
                    outlineOpacity: outlineOpacity,
                    outlineThickness: outlineThickness
                }
            }
        })
    }, [outlinesEnabled, outlineOpacity, outlineThickness]);

    useEffect(() => {
        props.updateOutlines(outlines);
    }, [props, outlines]);

    return (
        <>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Outlines:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" style={{background: outlinesEnabled ? "darkgray" : "lightgray"}}  onClick={() => setOutlinesEnabled(true)}>On</div>
                    <div className="crosshair-create-button" style={{background: !outlinesEnabled ? "darkgray" : "lightgray"}}  onClick={() => setOutlinesEnabled(false)}>Off</div>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Outline Opacity:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={1} step={0.01} defaultValue={outlineOpacity} disabled={!outlinesEnabled} updateValue={setOutlineOpacity}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Outline Thickness:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={10} step={1} defaultValue={outlineThickness} disabled={!outlinesEnabled} updateValue={setOutlineThickness}/>
                </div>
            </div>
        </>
    );
}

export default  CrosshairCreateOutlines;
