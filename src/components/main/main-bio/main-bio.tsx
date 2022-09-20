import CaliLogo from "../../../images/cali-logo.svg";
import React from "react";
import "./main-bio.scss";
import MainBioSocials from "./main-bio-socials/main-bio-socials";

export const MainBio = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <div className="main__bio">
            <img className="main__bio-logo" src={CaliLogo} alt="Logo" style={{ opacity: isLoaded ? 1 : 0 }} onLoad={_ => setIsLoaded(true)}/>
            <div className="main__bio-profile">
                <div className="main__bio-profile-center">
                    <div className="main__bio-profile__center-piece">
                        <p>
                            CAM
                        </p>
                        <p>
                            ERON
                        </p>
                        <p>
                            LI
                        </p>
                    </div>
                </div>
                <div className="main__bio-nav">
                    <div className="main__bio-nav-bar">
                        <a>
                            Test 1
                        </a>
                        <a>
                            Test 2
                        </a>
                        <a>
                            Test 3
                        </a>
                    </div>
                    <div className="main__bio-nav-line">
                    </div>
                </div>
            </div>

            <MainBioSocials/>
        </div>
    )
}

export default MainBio;
