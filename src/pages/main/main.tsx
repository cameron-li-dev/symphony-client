import "./main.scss";
import React, {useEffect} from "react";
import IFeature from "../../data/interfaces/IFeature";
import featuresData from "../../data/features.json"
import MainBio from "../../components/main/main-bio/main-bio";

export const Main = () => {
    // const features: IFeature[] = JSON.parse(JSON.stringify(featuresData));

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-section">
                    <MainBio/>
                </div>
                <div>
                    Skills
                    <div>
                        Frameworks
                        <div className="main__skills-section">
                            <div className="main__skills-row">
                                <div className="main__skills-row__skill-left">
                                    <div className="main__skills-row__skill-title">
                                        Angular
                                    </div>
                                </div>
                                <div className="main__skils-row__skill-right">
                                    <div className="main__skills-row__skill-right-bar">
                                        <label className="main__skills-row__skill-right-bar-value">
                                            1 year
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
