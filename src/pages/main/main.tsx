import "./main.scss";
import React, {useEffect} from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";
import { INavLink } from "../../data/interfaces/INavLink";
import MainNav from "../../components/main/main-nav/main-nav";
import ValorantLogo from "../../images/valorant-logo_brandlogos.net_kghsj.png";
import SectionNav from "../../components/main/section-nav/section-nav";

const navLinks: INavLink[] = [
    {
        link: "#main",
        text: "Main",
        mode: "dark"
    },
    {
        link: "#projects",
        text: "Projects",
        mode: "dark"
    },
    {
        link: "#third",
        text: "Third",
        mode: "dark"
    }
];

export const Main = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [navPosition, setNavPosition] = React.useState(700);
    const [currentSection, setCurrentSection] = React.useState(0);
    const [currentNavMode, setCurrentNavMode] = React.useState(navLinks[currentSection].mode);
    const [displayVerticalNav, setDisplayVerticalNav] = React.useState(false);

    const handleScroll = () => {
        const content = document.getElementById('main-content');

        if (content) {
            setScrollPosition(content.scrollTop);

            let findSection = Math.round(content.scrollTop / (window.innerHeight * 0.9));
            setCurrentSection(findSection);
        }
    };

    const handleResize = () => {
        setNavPosition(window.innerHeight * .95);
    }

    useEffect(() => {
        if (scrollPosition > 50) {
            setDisplayVerticalNav(true);
        } else {
            setDisplayVerticalNav(false);
        }

    }, [scrollPosition]);

    useEffect(() => {
        if (!displayVerticalNav && currentSection > 0) {
            setDisplayVerticalNav(true);
        }
        setCurrentNavMode(navLinks[currentSection].mode);
    }, [currentSection, displayVerticalNav]);

    useEffect(() => {
        const content = document.getElementById('main-content');

        if (content) {
            content.addEventListener('scroll', handleScroll, { passive: true });
        }

        window.addEventListener('resize', handleResize, { passive: true })

        return () => {
            window.removeEventListener('resize', handleResize);

            if (content) {
                content.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    return (
        <div className="main-container">
            <div id="main-content" className="main-content">
                <div className="main-content-vertical-nav" style={{display: displayVerticalNav ? 'flex' : 'none', opacity: scrollPosition > navPosition ? 1 : 0}}>
                    <MainNav horizontal={false} links={navLinks} colorMode={currentNavMode}/>
                </div>
                <div id="main" className="main-section">
                    <MainBio links={ navLinks }/>
                    <MainBioSocials/>
                    <SectionNav upwards={false} target={"#projects"} visible={currentSection === 0} sectionNumber={1} setSection={setCurrentSection}/>
                </div>
                <div id="projects" className="main-section">
                    <SectionNav upwards={true} target={"#main"} visible={currentSection === 1} sectionNumber={0} setSection={setCurrentSection}/>
                    <div className="main-projects-section" style={{opacity: currentSection === 1 ? 1 : 0}}>
                        <div className="main-projects-section-title-container">
                            <h1 className="main-projects-section-title" style={{color: "#4F85AC"}}>
                                PROJECTS
                            </h1>
                        </div>
                        <div style={{width: "70%"}}>
                            <div className="main-section__gallery">
                                <div className="main-section__gallery-piece" style={{marginTop: "100px"}}>
                                    <div style={{display: "flex", background: "#F8F8F8", borderRadius: "16px", paddingRight: "8px"}}>
                                        <a href="/valorant" style={{height: "250px"}}>
                                            <img src={ValorantLogo} alt={"Valorant Logo"} className="main-section__gallery-piece-image"/>
                                        </a>
                                        <div style={{marginLeft: "16px"}}>
                                            <h2>
                                                Valorant Crosshairs
                                            </h2>
                                            <p>
                                                Crosshair display and generator for the popular first person shooter, Valorant.
                                            </p>
                                            <p>
                                                This project is created in React, SCSS, and Typescript to display and create different crosshairs.
                                            </p>
                                            <a href="/valorant" style={{fontSize: "16px", fontWeight: 600}}>
                                                Visit here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-section__gallery-piece" style={{flexDirection: "row-reverse", marginTop: "40px"}}>
                                    <div style={{marginRight: "16px"}}>
                                        <h2>
                                            Path finding algorithms
                                        </h2>
                                        <p>
                                            Table based implementation of Djikstra's and A* search path finding algorithms.
                                        </p>
                                        <a href="/path-find" style={{fontSize: "16px", fontWeight: 600}}>
                                            Take a look
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SectionNav upwards={false} target={"#third"} visible={currentSection === 1} sectionNumber={2} setSection={setCurrentSection}/>
                </div>
                <div id="third" className="main-section">
                    <SectionNav upwards={true} target={"#projects"} visible={currentSection === 2} sectionNumber={1} setSection={setCurrentSection}/>
                    <div style={{width: "100%", height: "100%"}}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main
