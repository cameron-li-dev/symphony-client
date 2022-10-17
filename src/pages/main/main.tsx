import "./main.scss";
import React, {useEffect} from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";
import { INavLink } from "../../data/interfaces/INavLink";
import MainNav from "../../components/main/main-nav/main-nav";
import ValorantLogo from "../../images/valorant-logo_brandlogos.net_kghsj.png";

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
    const [currentSection, setCurrentSection] = React.useState(1);
    const [currentNavMode, setCurrentNavMode] = React.useState(navLinks[currentSection].mode);
    const [displayVerticalNav, setDisplayVerticalNav] = React.useState(false);

    const handleScroll = () => {
        const content = document.getElementById('main-content');

        if (content) {
            setScrollPosition(content.scrollTop);

            let findSection = Math.round(content.scrollTop / (window.innerHeight * 0.9));
            if (findSection > 0) {
                setCurrentSection(findSection);
            }
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

    }, [currentSection, scrollPosition]);

    useEffect(() => {
        setCurrentNavMode(navLinks[currentSection].mode);
    }, [currentSection]);

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
                </div>
                <div id="projects" className="main-section">
                    <div className="main-projects-section">
                        <h1 className="main-projects-section-title">
                            Projects
                        </h1>
                        <div style={{width: "70%"}}>
                            <div className="main-section__gallery">
                                <div className="main-section__gallery-piece" style={{marginTop: "100px"}}>
                                    <a href="/valorant">
                                        <img src={ValorantLogo} alt={"Valorant Logo"} style={{background: "black", width: "250px", borderRadius: "16px"}}/>
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
                </div>
                <div id="third" className="main-section">
                    <div style={{width: "100%", height: "100%"}}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main
