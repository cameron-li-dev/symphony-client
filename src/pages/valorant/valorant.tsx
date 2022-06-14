import "./valorant.scss";
import NavigationButton from "../../components/button/navigation-button/navigation-button";
import crosshairData from "../../data/crosshairs.json";
import ICrosshair from "../../data/interfaces/ICrosshair";
import CrosshairCard from "../../components/crosshair-card/crosshair-card";

export const Valorant = () => {
    const crosshairs: ICrosshair[] = JSON.parse(JSON.stringify(crosshairData));

    const crosshairCards: any[] = [];
    for (let crosshair of crosshairs) {
        crosshairCards.push(
            <CrosshairCard key={ "crosshair-card-" + crosshair.title } crosshair={ crosshair }/>
        )
    }
    return (
        <div className="valorant-container">
            <div className="valorant-header">
                <NavigationButton path="/"/>
            </div>
            <div className="valorant-content">
                { crosshairCards }
            </div>
        </div>
    )
}

export default Valorant;
