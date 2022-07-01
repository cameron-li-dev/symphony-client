import Button from "../button";
import "./navigation-button.scss";
import {Link} from "react-router-dom";

export const NavigationButton = (props: { path: string }) => {
    const { path } = props;
    return (
        <Button style={{background: "none", boxShadow: "none", margin: "18px", marginLeft: 0, marginRight: 0, padding: "8px 0 8px 24px", borderRadius: "64px"}}>
            <Link className="navigation-button-link" to={ path }>Back Icon</Link>
        </Button>
    )
}

export default NavigationButton;
