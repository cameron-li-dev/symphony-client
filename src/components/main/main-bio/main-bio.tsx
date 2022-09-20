import CaliLogo from "../../../images/cali-logo.svg";
import React from "react";
import "./main-bio.scss";

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
                        <a href={""}>
                            Test 1
                        </a>
                        <a href={""}>
                            Test 2
                        </a>
                        <a href={""}>
                            Test 3
                        </a>
                    </div>
                    <div className="main__bio-nav-line"/>
                </div>
            </div>
        </div>
    )
}

export default MainBio;
