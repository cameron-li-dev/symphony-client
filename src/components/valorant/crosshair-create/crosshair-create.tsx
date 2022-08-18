import React, {useEffect} from "react";
import ICrosshair from "../../../data/interfaces/ICrosshair";
import {
    crosshairColour,
    ICrosshairCenterDot,
    ICrosshairLines,
    ICrosshairOutlines
} from "../../../data/interfaces/ICrosshairConfig";
import CrosshairCreateCenterDot from "./crosshair-create-center-dot/crosshair-create-center-dot";
import CrosshairCreateLines from "./crosshair-create-lines/crosshair-create-lines";
import CrosshairCreateOutlines from "./crosshair-create-outlines/crosshair-create-outlines";

const getRemainingColours = (currentColour: crosshairColour) => {
    const colourArray = Object.values(crosshairColour).slice();
    const filteredArray = colourArray.filter(colour => colour !== currentColour);
    return filteredArray as crosshairColour[];
}

const capitaliseFirstLetter = (colour: crosshairColour) => {
    return colour.toString().charAt(0).toUpperCase() + colour.toString().slice(1)
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
    }, [props, props.updateCrosshair, crosshair])

    useEffect(() => {
        console.log("colour changed", colour);
        const remainingColours = getRemainingColours(colour).filter(x => typeof x !== "number");
        setListOfColours(remainingColours);
    }, [colour]);

    const displayOtherColours = [];
    for(let c of listOfColours) {
        displayOtherColours.push(
            <div className="crosshair-create-colour-select" key={"crosshair-create-colour-select-" + c} onClick={() => {setColour(c); setShowColourModal(false)}}>
                {capitaliseFirstLetter(c)}
            </div>
        );
    }

    return (
        <div className="crosshair-create-container">
            <div className="crosshair-create-section-title">
                General
            </div>
            <div className="crosshair-create-section">
                <div className="crosshair-create-row">
                    <div style={{width: "300px"}}>
                        Colour
                    </div>
                    <div className="crosshair-create-drop-down-list">
                        <div className="crosshair-create-drop-down-button" onClick={() => {setShowColourModal(!showColourModal)}}>
                            {capitaliseFirstLetter(colour)}
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
                        <div className="crosshair-create-button" style={{background: overrideOffset ? "darkgray" : "lightgray"}}  onClick={() => setOverrideOffset(true)}>On</div>
                        <div className="crosshair-create-button" style={{background: !overrideOffset ? "darkgray" : "lightgray"}}  onClick={() => setOverrideOffset(false)}>Off</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="crosshair-create-section-title">
                Inner Lines
            </div>
            <div className="crosshair-create-section">
                <CrosshairCreateLines isInner={true} lines={innerLines} updateLines={setInnerLines}/>
            </div>
            <hr/>
            <div className="crosshair-create-section-title">
                Outer Lines
            </div>
            <div className="crosshair-create-section">
                <CrosshairCreateLines isInner={false} lines={outerLines} updateLines={setOuterLines}/>
            </div>
        </div>
    )
}

export default CrosshairCreate;
