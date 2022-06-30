import "./valorant.scss";
import NavigationButton from "../../components/button/navigation-button/navigation-button";
import crosshairData from "../../data/crosshairs.json";
import CrosshairCard from "../../components/crosshair-card/crosshair-card";
import {ICrosshairImport} from "../../data/interfaces/ICrosshair";
import {importCrosshair} from "../../components/crosshair-card/crosshair-service";

export const Valorant = () => {
    const crosshairs: ICrosshairImport[] = JSON.parse(JSON.stringify(crosshairData));

    const crosshairCards: any[] = [];
    crosshairs.forEach((crosshair, index) => {
        let imported = importCrosshair(crosshair.config);
        imported = {
            ...imported,
            title: crosshair.title
        };
        console.log(imported);
        crosshairCards.push(
            <CrosshairCard key={ "crosshair-card-" + crosshair.title + index } crosshair={ imported }/>
        )
    })

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
