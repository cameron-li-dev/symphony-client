import React, {MouseEventHandler} from "react";
import './carousel-button.scss';
import IFeature from "../../../data/interfaces/IFeature";

export const CarouselButton = (props: { feature: IFeature, active: number, index: number, onClick?: MouseEventHandler<HTMLDivElement> }) => {
    const { feature, active, index, onClick } = props;
    const isActive = active === index ? "carousel-button--active" : "carousel-button";
    return (
        <div className={isActive} onClick={ onClick }>
            { feature.title }
        </div>
    )
}

export default CarouselButton;
