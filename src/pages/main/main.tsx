import "./main.scss";
import React from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";

export const Main = () => {
    return (
        <div className="main-container">
            <div className="main-content">
                <div id="first" className="main-section">
                    <MainBio/>
                    <MainBioSocials/>
                </div>
                <div id="second" className="main-section">
                    <div style={{width: "100%", height: "100%", background: "black"}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
