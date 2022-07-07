import "./valorant-create.scss";
import NavigationButton from "../../../components/button/navigation-button/navigation-button";
import defaultCrosshair from "../../../data/default-crosshair.json";
import React, {useCallback, useEffect} from "react";
import CrosshairCard from "../../../components/crosshair-card/crosshair-card";
import ICrosshair from "../../../data/interfaces/ICrosshair";
import {ICrosshairCenterDot, ICrosshairLines, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";
import {Slider} from "../../../components/slider/slider";

export const ValorantCreate = () => {
    const [crosshair, setCrosshair] = React.useState<ICrosshair>(JSON.parse(JSON.stringify(defaultCrosshair)));
    const [outlines, setOutlines] = React.useState<ICrosshairOutlines>(crosshair.config.outlines);
    const [centerDot, setCenterDot] = React.useState<ICrosshairCenterDot>(crosshair.config.centerDot);
    const [centerDotOpacity, setCenterDotOpacity] = React.useState<number>(centerDot.dot.centerDotOpacity);
    const [centerDotThickness, setCenterDotThickness] = React.useState<number>(centerDot.dot.centerDotThickness);
    const [innerLines, setInnerLines] = React.useState<ICrosshairLines>(crosshair.config.innerLines);
    const [outerLines, setOuterLines] = React.useState<ICrosshairLines>(crosshair.config.outerLines);
    useEffect(() => {
        setCrosshair(c => {
            return {
                ...c,
                config: {
                    ...c.config,
                    outlines: outlines,
                    centerDot: centerDot,
                    innerLines: innerLines,
                    outerLines: outerLines
                }
            }
        });
        console.log(centerDotOpacity);
    }, [centerDot, innerLines, outerLines, outlines]);

    useEffect(() => {
        setCenterDot(c => {
            return {
                ...c,
                dot: {
                    ...c.dot,
                    centerDotOpacity: centerDotOpacity,
                    centerDotThickness: centerDotThickness
                }
            }
        })
    }, [centerDotOpacity, centerDotThickness]);

    return (
        <div className="valorant-create-container">
            <NavigationButton path="/valorant"/>
            <div className="valorant-create-content">
                <div className="valorant-create-content--display">
                    <CrosshairCard crosshair={crosshair}/>
                </div>
                <div className="valorant-create-content--settings">
                    <div className="valorant-create-content--settings-main">
                        <div className="valorant-create-content--settings-toggle">
                            <div className="valorant-create-content--settings-toggle--title">Show Outlines</div>
                            <div className="valorant-create-content--settings-toggle--buttons">
                                <div onClick={() => setOutlines({
                                    ...outlines,
                                    outlinesEnabled: true
                                })}>Yes</div>
                                <div onClick={() => setOutlines({
                                    ...outlines,
                                    outlinesEnabled: false
                                })}>No</div>
                            </div>
                        </div>
                        <div className="valorant-create-content--settings-toggle">
                            <div className="valorant-create-content--settings-toggle--title">Show Dot</div>
                            <div className="valorant-create-content--settings-toggle--buttons">
                                <div onClick={() => setCenterDot({
                                    ...centerDot,
                                    dotEnabled: true
                                })}>Yes</div>
                                <div onClick={() => setCenterDot({
                                    ...centerDot,
                                    dotEnabled: false
                                })}>No</div>
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
                    <div className="valorant-create-content--settings-lines">
                        <div className="valorant-create-content--settings-toggle">
                            <div className="valorant-create-content--settings-toggle--title">Show Inner Lines</div>
                            <div className="valorant-create-content--settings-toggle--buttons">
                                <div onClick={() => setInnerLines({
                                    ...innerLines,
                                    linesEnabled: true
                                })}>Yes</div>
                                <div onClick={() => setInnerLines({
                                    ...innerLines,
                                    linesEnabled: false
                                })}>No</div>
                            </div>
                        </div>
                    </div>
                    <div className="valorant-create-content--settings-lines">
                        <div className="valorant-create-content--settings-toggle-lines">
                            <div className="valorant-create-content--settings-toggle--title">Show Outer Lines</div>
                            <div className="valorant-create-content--settings-toggle--buttons">
                                <div onClick={() => setOuterLines({
                                    ...outerLines,
                                    linesEnabled: true
                                })}>Yes</div>
                                <div onClick={() => setOuterLines({
                                    ...outerLines,
                                    linesEnabled: false
                                })}>No</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ValorantCreate;
