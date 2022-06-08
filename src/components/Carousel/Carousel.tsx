import React from "react";
import './Carousel.scss';
import CarouselButton from "./CarouselComponents/CarouselButton";
import CarouselCard from "./CarouselComponents/CarouselCard";

export const Carousel = (props: { items: any[], displayExtra: number }) => {
    const [selected, setSelected] = React.useState<number>(0);
    const [currentItem, setCurrentItem] = React.useState();
    const { items, displayExtra } = props;

    if (items.length < displayExtra || items.length < 3) {
        return EmptyCarousel();
    }

    const addButtons = (initial: any[], start:number, finish: number, isIncrement: boolean = true, counter: number) => {
        let tempCount = counter;
        if (isIncrement) {
            for (let extra = start; extra < finish; extra++) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
                );
                tempCount++;
            }
        } else {
            for (let extra = start; extra < finish; extra--) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
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
            // for (let extra = items.length + prefix; extra < items.length; extra++) {
            //     carouselButtons.push(
            //         <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
            //     );
            //     counter++;
            // }
        }
        else if (selected === items.length) {
            counter = addButtons(carouselButtons, items.length - prefix + 1, items.length - 1, true, counter);
            // for (let extra = items.length - prefix + 1; extra < items.length - 1; extra++) {
            //     carouselButtons.push(
            //         <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
            //     );
            //     counter++;
            // }
        }

        if (counter < displayExtra) {
            addButtons(carouselButtons, selected - displayExtra + counter, selected, true, counter);
            // for (let extra = selected - displayExtra + counter; extra < selected; extra++) {
            //     carouselButtons.push(
            //         <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
            //     );
            // }
        }
        carouselButtons.push(
            <CarouselButton active={ selected } index={ selected } onClick={() => setSelected(selected)}/>
        );
        counter = 0;
        const suffix = selected + displayExtra + 1;
        for (let extra = selected + 1; extra < suffix; extra++) {
            if (extra < items.length) {
                carouselButtons.push(
                    <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
                );
                counter++;
            } else {
                break;
            }
        }
        if (counter < displayExtra) {
            const suffix = displayExtra - counter;
            addButtons(carouselButtons, 0, suffix, true, counter)
            // for (let extra = 0; extra < suffix; extra++) {
            //     carouselButtons.push(
            //         <CarouselButton active={ selected } index={ extra } onClick={() => setSelected(extra)}/>
            //     );
            // }
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

const InfiniteCarousel = () => {

}

export default Carousel;
