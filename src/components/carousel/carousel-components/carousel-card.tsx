import './carousel-card.scss'
import IFeature from "../../../data/interfaces/IFeature";
import {Link} from "react-router-dom";

export const CarouselCard = (props: { item: IFeature }) => {
    const { item } = props;

    return (
        <div className="carousel-card-container">
            <Link className="carousel-card-link" to={item.link}>
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
    )
}

export default CarouselCard;
