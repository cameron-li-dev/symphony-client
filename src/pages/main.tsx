import React from "react";
import "./main.scss";
import Carousel from "../components/carousel/carousel";

export const Main = () => {
    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <div className="container">
            <Carousel displayExtra={1} items={ pages }/>
        </div>
    )
}

export default Main
