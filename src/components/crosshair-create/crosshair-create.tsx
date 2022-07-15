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

const getRemainingColours = (currentColour: crosshairColour) => {
    const colourArray = Object.values(crosshairColour);
    console.log(colourArray);
    colourArray.splice(currentColour, 1);
    return colourArray as crosshairColour[];
}

const CrosshairCreate = (props: { crosshair: ICrosshair, updateCrosshair: (crosshair: ICrosshair) => void}) => {
    const [crosshair, setCrosshair] = React.useState<ICrosshair>(props.crosshair);
    const [colour, setColour] = React.useState<crosshairColour>(crosshair.config.colour);
    const [overrideOffset, setOverrideOffset] = React.useState<boolean>(crosshair.config.overrideOffset);
    const [outlines, setOutlines] = React.useState<ICrosshairOutlines>(crosshair.config.outlines);
    const [centerDot, setCenterDot] = React.useState<ICrosshairCenterDot>(crosshair.config.centerDot);
    const [innerLines, setInnerLines] = React.useState<ICrosshairLines>(crosshair.config.innerLines);
    const [outerLines, setOuterLines] = React.useState<ICrosshairLines>(crosshair.config.outerLines);
    const [showColourModal, setShowColourModal] = React.useState<boolean>(false);
    const [listOfColours, setListOfColours] = React.useState<crosshairColour[]>(getRemainingColours(colour));

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

    useEffect(() => {
        const remainingColours = getRemainingColours(colour).filter(x => typeof x !== "number");
        setListOfColours(remainingColours);
    }, [colour]);

    const displayOtherColours = [];
    for(let c of listOfColours) {
        displayOtherColours.push(
            <div className="crosshair-create-colour-select" key={"crosshair-create-colour-select-" + c} onClick={() => {setColour(c); setShowColourModal(false)}}>
                {c}
            </div>
        );
    }

    return (
        <div className="crosshair-create-container">
            <div className="crosshair-create-row">
                <div style={{width: "300px"}}>
                    Colour
                </div>
                <div className="crosshair-create-drop-down-list">
                    <div className="crosshair-create-drop-down-button" onClick={() => {setShowColourModal(!showColourModal)}}>
                        {colour}
                    </div>
                    <div className="crosshair-create-colour-modal" style={{display: `${showColourModal ? 'block' : 'none'}`}}>
                        {displayOtherColours}
                    </div>
                </div>
            </div>

            <CrosshairCreateOutlines outlines={outlines} updateOutlines={setOutlines}/>
            <CrosshairCreateCenterDot centerDot={centerDot} updateCenterDot={setCenterDot}/>
            <div className="crosshair-create-row">
                <div className="crosshair-create-title">
                    Offset:
                </div>
                <div className="crosshair-create-buttons">
                    <div className="crosshair-create-button" onClick={() => setOverrideOffset(true)}>On</div>
                    <div className="crosshair-create-button" onClick={() => setOverrideOffset(false)}>Off</div>
                </div>
            </div>
            <hr/>
            <CrosshairCreateLines isInner={true} lines={innerLines} updateLines={setInnerLines}/>
            <CrosshairCreateLines isInner={false} lines={outerLines} updateLines={setOuterLines}/>
        </div>
    )
}

export default CrosshairCreate;
