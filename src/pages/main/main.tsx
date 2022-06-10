import "./main.scss";
import React from "react";
import IFeature from "../../data/interfaces/IFeature";
import featuresData from "../../data/features.json"
import Carousel from "../../components/carousel/carousel";

export const Main = () => {
    const features: IFeature[] = JSON.parse(JSON.stringify(featuresData));

    return (
        <div className="main-container">
            <Carousel displayExtra={1} features={ features }/>
        </div>
    )
}

export default Main
