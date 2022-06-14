import Button from "../button";
import "./navigation-button.scss";
import {Link} from "react-router-dom";

export const NavigationButton = (props: { path: string }) => {
    const { path } = props;
    return (
        <Button style={{margin: "16px", padding: "8px 24px 8px 24px", borderRadius: "64px"}}>
            <Link className="navigation-button-link" to={ path }>Main</Link>
        </Button>
    )
}

export default NavigationButton;
