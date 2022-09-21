import CaliLogo from "../../../images/cali-logo.svg";
import React from "react";
import "./main-bio.scss";
import MainNav from "../main-nav/main-nav";
import {INavLink} from "../../../data/interfaces/INavLink";

export const MainBio = (props: {links: INavLink[]}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const { links } = props;

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
                <MainNav horizontal={true} links={links}/>

                <MainNav horizontal={false} links={links}/>
            </div>
        </div>
    )
}

export default MainBio;
