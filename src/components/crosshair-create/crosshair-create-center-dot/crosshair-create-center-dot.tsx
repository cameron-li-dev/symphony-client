import React, {useEffect} from "react";
import {ICrosshairCenterDot} from "../../../data/interfaces/ICrosshairConfig";
import {Slider} from "../../slider/slider";

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
        <div>
            <div className="valorant-create-content--settings-toggle">
                <div className="valorant-create-content--settings-toggle--title">Show Dot</div>
                <div className="valorant-create-content--settings-toggle--buttons">
                    <div onClick={() => setCenterDotEnabled(true)}>Yes</div>
                    <div onClick={() => setCenterDotEnabled(false)}>No</div>
                </div>
            </div>
            <div className="valorant-create-content--settings-slider-container">
                <div className="valorant-create-content--settings-slider--title">
                    Opacity
                </div>
                <div className="valorant-create-content--settings-slider">
                    <Slider min={0} max={1} step={0.01} defaultValue={centerDotOpacity} disabled={!centerDot.dotEnabled} updateValue={setCenterDotOpacity}/>
                </div>
            </div>
            <div className="valorant-create-content--settings-slider-container">
                <div className="valorant-create-content--settings-slider--title">
                    Thickness
                </div>
                <div className="valorant-create-content--settings-slider">
                    <Slider min={0} max={10} step={1} defaultValue={centerDotThickness} disabled={!centerDot.dotEnabled} updateValue={setCenterDotThickness}/>
                </div>
            </div>
        </div>
    )
}

export default CrosshairCreateCenterDot;
