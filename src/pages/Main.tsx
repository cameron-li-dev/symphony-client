import React from "react";
import "./Main.scss";
import Carousel from "../components/Carousel/Carousel";

export const Main = () => {
    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <div className="container">
            <Carousel displayExtra={1} items={ pages }/>
            <Carousel displayExtra={2} items={ pages }/>
            <Carousel displayExtra={3} items={ pages }/>
        </div>
    )
}

export default Main
