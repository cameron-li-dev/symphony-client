import React from "react";
import "./main.scss";
import Carousel from "../components/carousel/carousel";
import IFeature from "../data/interfaces/IFeature";
import featuresData from "../data/features.json"

export const Main = () => {
    const features: IFeature[] = JSON.parse(JSON.stringify(featuresData));

    return (
        <div className="container">
            <Carousel displayExtra={1} features={ features }/>
        </div>
    )
}

export default Main
