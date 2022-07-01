import NavigationButton from "../../../components/button/navigation-button/navigation-button";
import Button from "../../../components/button/button";
import { Link } from "react-router-dom";
import { ICrosshairImport } from "../../../data/interfaces/ICrosshair";
import crosshairData from "../../../data/crosshairs.json";
import { importCrosshair } from "../../../components/crosshair-card/crosshair-service";
import CrosshairCard from "../../../components/crosshair-card/crosshair-card";
import "./valorant-root.scss";

const ValorantRoot = () => {
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
    });

    return (
        <div className="valorant-container">
            <div className="valorant-header">
                <NavigationButton path="/"/>
                <Button style={{background: "none", boxShadow: "none", margin: "18px", marginRight: 0, padding: "8px 24px 8px 0", borderRadius: "64px"}}>
                    <Link className="navigation-button-link" to="/valorant/create">Create</Link>
                </Button>
            </div>
            <div className="valorant-content">
                { crosshairCards }
            </div>
        </div>
    )
}

export default ValorantRoot;
