import React from "react";
import "./Main.scss";

export const Main = () => {
    const [selected, setSelected] = React.useState<number>(0);

    const items: any[] = [];
    for (let i = 0; i < 3; i++) {
        const className: string = selected === i ? "item--active" : "item";
        items.push(
            (
                <li className={className} onClick={() => setSelected(i)}>
                    Test 1
                </li>
            )
        )
    }

    return (
        <div className="container">
            <ul className="carousel">
                {items}
            </ul>
            <div>
                Testing
            </div>
        </div>
    )
}

export default Main