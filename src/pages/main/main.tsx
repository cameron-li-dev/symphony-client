import "./main.scss";
import React, {useEffect} from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";
import { INavLink } from "../../data/interfaces/INavLink";
import MainNav from "../../components/main/main-nav/main-nav";
import ValorantLogo from "../../images/valorant-logo_brandlogos.net_kghsj.png";
import SectionNav from "../../components/main/section-nav/section-nav";
import {IProject} from "../../data/interfaces/IProject";
import MainProject from "../../components/main/main-project/main-project";

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

const projects: IProject[] = [
    {
        title: "Valorant Crosshairs",
        project_description: "This project is a crosshair display and generator for the popular first person shooter, Valorant. The generator offering allows users to create crosshairs outside of the game which can then be exported and used within the game",
        technology_description: "Made using a mix of React, Scss, and Typescript.",
        button_text: "Visit here",
        target: "/valorant",
        image: ValorantLogo
    },
    {
        title: "Path finding algorithms",
        project_description: "Table based implementation of Djikstra's and A* search path finding algorithms.",
        technology_description: "Made using a mix of React, Scss, and Typescript.",
        button_text: "Visit here",
        target: "/path-find",
        image: ValorantLogo
    },
    {
        title: "Third project",
        project_description: "Project description",
        technology_description: "Technology description",
        button_text: "Go",
        target: "/skills",
        image: ValorantLogo
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

    }, [scrollPosition, displayVerticalNav]);

    useEffect(() => {
        if (currentSection > 0) {
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
                    <div className="main-section-body" style={{opacity: currentSection === 0 ? 1 : 0}}>
                        <div className="main-main-section-title-container">
                            <h1 className="main-main-section-title" style={{color: "#BC3333"}}>
                                MAIN
                            </h1>
                        </div>
                        <MainBio links={ navLinks }/>
                        <MainBioSocials/>
                        <SectionNav upwards={false} target={"#projects"} visible={currentSection === 0}/>
                    </div>
                </div>
                <div id="projects" className="main-section">
                    <div className="main-section-body" style={{opacity: currentSection === 1 ? 1 : 0}}>
                        <SectionNav upwards={true} target={"#main"} visible={currentSection === 1}/>
                        <div className="main-projects-section">
                            <div className="main-projects-section-title-container">
                                <h1 className="main-projects-section-title" style={{color: "#4F85AC"}}>
                                    PROJECTS
                                </h1>
                            </div>
                            <div style={{width: "70%"}}>
                                <div className="main-section__gallery">
                                    <MainProject project={projects[0]} rightFacing={true} marginTop={100}/>
                                    <MainProject project={projects[1]} rightFacing={false} marginTop={64}/>
                                    <MainProject project={projects[2]} rightFacing={true} marginTop={64}/>
                                </div>
                            </div>
                        </div>
                        <SectionNav upwards={false} target={"#third"} visible={currentSection === 1}/>
                    </div>
                </div>
                <div id="third" className="main-section">
                    <div className="main-section-body" style={{opacity: currentSection === 2 ? 1 : 0}}>
                        <SectionNav upwards={true} target={"#projects"} visible={currentSection === 2}/>
                        <div style={{width: "100%", height: "100%"}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main
