import CaliLogo from "../../../images/cali-logo.svg";
import CvIcon from "../../../images/portfolio-rounded-square.svg";
import LinkedInIcon from "../../../images/linkedin-rounded-square.png";
import TwitterIcon from "../../../images/twitter-rounded-square.svg";
import React, {useEffect} from "react";
import "./main-bio.scss";
import MainBioSocials from "./main-bio-socials/main-bio-socials";

export const MainBio = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <div className="main__bio">
            <div>
                <img className="main__bio-logo" src={CaliLogo} alt="Logo" style={{ opacity: isLoaded ? 1 : 0 }} onLoad={_ => setIsLoaded(true)}/>
            </div>
            <div className="main__bio-profile">
            </div>
            <MainBioSocials/>
            <div className="main__bio-description">
                Growth focused and collaborative Junior Full Stack Developer with 1 year of professional
                experience in an agile, customer focused environment at Trade Me. My role largely involves
                furthering the customer experience and increasing engagement across our platform through
                work done on the entire stack.
            </div>
        </div>
    )
}

export default MainBio;
