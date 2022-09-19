import CvIcon from "../../../../images/portfolio-rounded-square.svg";
import LinkedInIcon from "../../../../images/linkedin-rounded-square.png";
import TwitterIcon from "../../../../images/twitter-rounded-square.svg";
import React, {useEffect} from "react";
import "./main-bio-socials.scss";

export const MainBioSocials = () => {
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
        <div className="main__bio-socials" style={{ opacity: isSocialsLoaded ? 1 : 0 }}>
            <div className="main__bio-socials-links">
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
    )
}

export default MainBioSocials;
