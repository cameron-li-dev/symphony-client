import "./main.scss";
import React from "react";
import IFeature from "../../data/interfaces/IFeature";
import featuresData from "../../data/features.json"
import Carousel from "../../components/carousel/carousel";
import CvIcon from "../../images/portfolio-rounded-square.svg";
import LinkedInIcon from "../../images/linkedin-rounded-square.png";
import TwitterIcon from "../../images/twitter-rounded-square.svg";

export const Main = () => {
    const features: IFeature[] = JSON.parse(JSON.stringify(featuresData));

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-blurb">
                    blurb
                </div>
                <div className="main--socials">
                    <a id="cv" className="main--socials-link" href={"https://drive.google.com/file/d/19i9ADHHAguNaqNhMzdIlfOgAKMEsvF_e/view?usp=sharing"}>
                        <img className="main--socials-icon" src={CvIcon} alt="CV"/>
                    </a>
                    <a id="linkedin" className="main--socials-link" href={"https://www.linkedin.com/in/cameron-li-dev/"}>
                        <img className="main--socials-icon" src={LinkedInIcon} alt="LinkedIn"/>
                    </a>
                    <a id="twitter" className="main--socials-link" href={"https://twitter.com/cali_gat0r"}>
                        <img className="main--socials-icon" src={TwitterIcon} alt="Twitter"/>
                    </a>
                </div>
            </div>
            {/*<Carousel displayExtra={1} features={ features }/>*/}
        </div>
    )
}

export default Main
