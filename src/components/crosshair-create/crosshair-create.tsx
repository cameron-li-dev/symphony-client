import React, {useEffect} from "react";
import ICrosshair from "../../data/interfaces/ICrosshair";
import {
    crosshairColour,
    ICrosshairCenterDot,
    ICrosshairLines,
    ICrosshairOutlines
} from "../../data/interfaces/ICrosshairConfig";
import CrosshairCreateCenterDot from "./crosshair-create-center-dot/crosshair-create-center-dot";
import CrosshairCreateLines from "./crosshair-create-lines/crosshair-create-lines";
import CrosshairCreateOutlines from "./crosshair-create-outlines/crosshair-create-outlines";

const CrosshairCreate = (props: { crosshair: ICrosshair, updateCrosshair: (crosshair: ICrosshair) => void}) => {
    const [crosshair, setCrosshair] = React.useState<ICrosshair>(props.crosshair);
    const [colour, setColour] = React.useState<crosshairColour>(crosshair.config.colour);
    const [overrideOffset, setOverrideOffset] = React.useState<boolean>(crosshair.config.overrideOffset);
    const [outlines, setOutlines] = React.useState<ICrosshairOutlines>(crosshair.config.outlines);
    const [centerDot, setCenterDot] = React.useState<ICrosshairCenterDot>(crosshair.config.centerDot);
    const [innerLines, setInnerLines] = React.useState<ICrosshairLines>(crosshair.config.innerLines);
    const [outerLines, setOuterLines] = React.useState<ICrosshairLines>(crosshair.config.outerLines);

    useEffect(() => {
        setCrosshair(c => {
            return {
                ...c,
                config: {
                    ...c.config,
                    colour: colour,
                    outlines: outlines,
                    centerDot: centerDot,
                    innerLines: innerLines,
                    outerLines: outerLines
                }
            }
        });
    }, [colour, centerDot, innerLines, outerLines, outlines]);

    useEffect(() => {
        props.updateCrosshair(crosshair);
    }, [props, crosshair])

    return (
        <div className="crosshair-create-container">
            <div className={"general"}>
                <div>
                    Colour
                </div>
                <CrosshairCreateOutlines outlines={outlines} updateOutlines={setOutlines}/>
                <CrosshairCreateCenterDot centerDot={centerDot} updateCenterDot={setCenterDot}/>
                <div>
                    Offset
                </div>
            </div>
            {/*<CrosshairCreateLines lines={innerLines} updateLines={setInnerLines}/>*/}
            {/*<CrosshairCreateLines lines={outerLines} updateLines={setOuterLines}/>*/}
        </div>
    )
}

export default CrosshairCreate;
