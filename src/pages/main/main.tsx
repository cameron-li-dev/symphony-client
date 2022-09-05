import "./main.scss";
import React, {useEffect} from "react";
import IFeature from "../../data/interfaces/IFeature";
import featuresData from "../../data/features.json"
import CvIcon from "../../images/portfolio-rounded-square.svg";
import LinkedInIcon from "../../images/linkedin-rounded-square.png";
import TwitterIcon from "../../images/twitter-rounded-square.svg";

export const Main = () => {
    // const features: IFeature[] = JSON.parse(JSON.stringify(featuresData));
    const [isSocialsLoaded, setIsSocialsLoaded] = React.useState(false);
    const [isCvLoaded, setIsCvLoaded] = React.useState(false);
    const [isLinkedInLoaded, setIsLinkedInLoaded] = React.useState(false);
    const [isTwitterLoaded, setIsTwitterLoaded] = React.useState(false);

    useEffect(() => {
        if (isCvLoaded && isLinkedInLoaded && isTwitterLoaded) {
            setIsSocialsLoaded(true);
        } else {
            setIsSocialsLoaded(false);
        }
    }, [isCvLoaded, isLinkedInLoaded, isTwitterLoaded])

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main__bio">
                    <div className="main__bio-profile">
                    </div>
                    <div className="main__bio-socials">
                        <div className="main__bio-socials-links" style={{ opacity: isSocialsLoaded ? 1 : 0 }}>
                            <a id="cv" className="main__bio-socials-link" href={"https://drive.google.com/file/d/19i9ADHHAguNaqNhMzdIlfOgAKMEsvF_e/view?usp=sharing"}>
                                <img className="main__bio-socials-icon" src={CvIcon} alt="CV" onLoad={() => setIsCvLoaded(true)}/>
                            </a>
                            <a id="linkedin" className="main__bio-socials-link" href={"https://www.linkedin.com/in/cameron-li-dev/"}>
                                <img className="main__bio-socials-icon" src={LinkedInIcon} alt="LinkedIn" onLoad={() => setIsLinkedInLoaded(true)}/>
                            </a>
                            <a id="twitter" className="main__bio-socials-link" href={"https://twitter.com/cali_gat0r"}>
                                <img className="main__bio-socials-icon" src={TwitterIcon} alt="Twitter" onLoad={() => setIsTwitterLoaded(true)}/>
                            </a>
                        </div>
                    </div>
                    <div className="main__bio-description">
                        Growth focused and collaborative Junior Full Stack Developer with 1 year of professional
                        experience in an agile, customer focused environment at Trade Me. My role largely involves
                        furthering the customer experience and increasing engagement across our platform through
                        work done on the entire stack.
                    </div>
                </div>
                <div>
                    Skills
                </div>
                <div>
                    Projects
                </div>
            </div>
            {/*<Carousel displayExtra={1} features={ features }/>*/}
        </div>
    )
}

export default Main
