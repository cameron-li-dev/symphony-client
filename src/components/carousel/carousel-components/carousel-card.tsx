import './carousel-card.scss'
import IFeature from "../../../data/interfaces/IFeature";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";

enum CarouselCardState {
    Tick,
    Tock
}

const CarouselCardClasses = [
    "carousel-card-tick",
    "carousel-card-tock"
]


export const CarouselCard = (props: { item: IFeature }) => {
    const { item } = props;
    const [cardState, setCardState] = React.useState<CarouselCardState>(CarouselCardState.Tick);

    useEffect(() => {
        if (cardState === CarouselCardState.Tick) {
            setCardState(CarouselCardState.Tock);
        } else {
            setCardState(CarouselCardState.Tick);
        }
    // eslint-disable-next-line
    }, [item])

    return (
        <div className={ CarouselCardClasses[cardState] }>
            <div className="carousel-card-container">
                <Link className="carousel-card-link" to={ item.link }>
                    <div className="carousel-card-content">
                        <div className="carousel-card-content__title">
                            {item.title}
                        </div>
                        <div className="carousel-card-content__description">
                            {item.description}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CarouselCard;
