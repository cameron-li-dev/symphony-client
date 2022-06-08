import React, {MouseEventHandler} from "react";
import './CarouselButton.scss';

export const CarouselButton = (props: { active: number, index: number, onClick?: MouseEventHandler<HTMLDivElement> }) => {
    const { active, index, onClick } = props;
    const isActive = active === index ? "carousel-button--active" : "carousel-button";
    return (
        <div className={isActive} onClick={onClick}>
            Item {index}
        </div>
    )
}

export default CarouselButton;
