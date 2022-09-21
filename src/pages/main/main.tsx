import "./main.scss";
import React from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";
import { INavLink } from "../../data/interfaces/INavLink";

export const Main = () => {
    const navLinks: INavLink[] = [
        {
            link: "#first",
            text: "First"
        },
        {
            link: "#second",
            text: "Second"
        },
        {
            link: "#third",
            text: "Third"
        }
    ];

    return (
        <div className="main-container">
            <div className="main-content">
                <div id="first" className="main-section">
                    <MainBio links={ navLinks }/>
                    <MainBioSocials/>
                </div>
                <div id="second" className="main-section">
                    <div style={{width: "100%", height: "100%", background: "black"}}>

                    </div>
                </div>
                <div id="third" className="main-section">
                    <div style={{width: "100%", height: "100%"}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
