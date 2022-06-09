import React, {MouseEventHandler} from "react";
import './carousel-button.scss';

export const CarouselButton = (props: { title: string, active: number, index: number, onClick?: MouseEventHandler<HTMLDivElement> }) => {
    const { title, active, index, onClick } = props;
    const isActive = active === index ? "carousel-button--active" : "carousel-button";
    return (
        <div className={isActive} onClick={onClick}>
            { title }
        </div>
    )
}

export default CarouselButton;
