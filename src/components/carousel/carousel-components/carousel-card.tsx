import './carousel-card.scss'

export const CarouselCard = (props: { item: any }) => {
    const { item } = props;

    return (
        <div className="carousel-card-container">
            Item {item}
        </div>
    )
}

export default CarouselCard;
