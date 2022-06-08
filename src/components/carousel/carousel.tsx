import React from "react";
import './carousel.scss';
import CarouselButton from "./carousel-components/carousel-button";
import CarouselCard from "./carousel-components/carousel-card";

export const Carousel = (props: { items: any[], displayExtra: number }) => {
    const [selected, setSelected] = React.useState<number>(0);
    const { items, displayExtra } = props;

    const onSelect = (index: number) => {
        setSelected(index);
    }

    if (items.length < displayExtra || items.length < 3) {
        return EmptyCarousel();
    }

    const addButtons = (initial: any[], start:number, finish: number, isIncrement: boolean = true, counter: number) => {
        let tempCount = counter;
        if (isIncrement) {
            for (let extra = start; extra < finish; extra++) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => onSelect(extra)}/>
                );
                tempCount++;
            }
        } else {
            for (let extra = start; extra < finish; extra--) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => onSelect(extra)}/>
                );
                tempCount++;
            }
        }
        return tempCount;
    }

    const carouselButtons: any[] = [];
        let counter = 0;
        const prefix = selected - displayExtra;
        if (prefix < 0) {
            counter = addButtons(carouselButtons, items.length + prefix, items.length, true, counter);
        }
        else if (selected === items.length) {
            counter = addButtons(carouselButtons, items.length - prefix + 1, items.length - 1, true, counter);
        }

        if (counter < displayExtra) {
            addButtons(carouselButtons, selected - displayExtra + counter, selected, true, counter);
        }
        carouselButtons.push(
            <CarouselButton active={ selected } index={ selected } onClick={() => onSelect(selected)}/>
        );
        counter = 0;
        const suffix = selected + displayExtra + 1;
        for (let extra = selected + 1; extra < suffix; extra++) {
            if (extra < items.length) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => onSelect(extra)}/>
                );
                counter++;
            } else {
                break;
            }
        }
        if (counter < displayExtra) {
            const suffix = displayExtra - counter;
            addButtons(carouselButtons, 0, suffix, true, counter)
        }
    return (
        <div className="carousel-container">
            <ul className="carousel-content">
                { carouselButtons }
            </ul>
            <CarouselCard item={ items[selected]}/>
        </div>
    )
}

const EmptyCarousel = () => {
    return (
        <div/>
    )
}

export default Carousel;
