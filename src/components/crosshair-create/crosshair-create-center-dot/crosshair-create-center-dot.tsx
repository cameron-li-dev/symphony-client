import React, {useEffect} from "react";
import {ICrosshairCenterDot} from "../../../data/interfaces/ICrosshairConfig";
import {Slider} from "../../slider/slider";
import "../crosshair-create.scss";

const CrosshairCreateCenterDot = (props: { centerDot: ICrosshairCenterDot, updateCenterDot: (c: ICrosshairCenterDot) => void }) => {
    const [centerDot, setCenterDot] = React.useState(props.centerDot);
    const [centerDotEnabled, setCenterDotEnabled] = React.useState<boolean>(centerDot.dotEnabled);
    const [centerDotOpacity, setCenterDotOpacity] = React.useState<number>(centerDot.dot.centerDotOpacity);
    const [centerDotThickness, setCenterDotThickness] = React.useState<number>(centerDot.dot.centerDotThickness);

    useEffect(() => {
        setCenterDot(c => {
            return {
                dotEnabled: centerDotEnabled,
                dot: {
                    centerDotOpacity: centerDotOpacity,
                    centerDotThickness: centerDotThickness
                }
            }
        })
    }, [centerDotEnabled, centerDotOpacity, centerDotThickness]);

    useEffect(() => {
        props.updateCenterDot(centerDot);
    }, [props, centerDot])

    return (
        <>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Center Dot:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" style={{background: centerDotEnabled ? "darkgray" : "lightgray"}} onClick={() => setCenterDotEnabled(true)}>On</div>
                    <div className="crosshair-create-button" style={{background: !centerDotEnabled ? "darkgray" : "lightgray"}}  onClick={() => setCenterDotEnabled(false)}>Off</div>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Center Dot Opacity:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={1} step={0.01} defaultValue={centerDotOpacity} disabled={!centerDotEnabled} updateValue={setCenterDotOpacity}/>
                </div>
            </div>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Center Dot Thickness:
                </div>
                <div className="crosshair-create-slider">
                    <Slider min={0} max={10} step={1} defaultValue={centerDotThickness} disabled={!centerDotEnabled} updateValue={setCenterDotThickness}/>
                </div>
            </div>
        </>
    )
}

export default CrosshairCreateCenterDot;
