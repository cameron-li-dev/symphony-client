import "./main.scss";
import React, {useEffect} from "react";
import MainBio from "../../components/main/main-bio/main-bio";
import MainBioSocials from "../../components/main/main-bio/main-bio-socials/main-bio-socials";
import { INavLink } from "../../data/interfaces/INavLink";
import MainNav from "../../components/main/main-nav/main-nav";

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

export const Main = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [navPosition, setNavPosition] = React.useState(700);

    const handleScroll = () => {
        const content = document.getElementById('main-content');

        if (content) {
            setScrollPosition(content.scrollTop);
        }
    };

    const handleResize = () => {
        setNavPosition(window.innerHeight * .95);
    }

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
                <div className="main-content-vertical-nav" style={{display: scrollPosition > 50 ? 'flex' : 'none', opacity: scrollPosition > navPosition ? 1 : 0}}>
                    <MainNav horizontal={false} links={navLinks} colorMode={"light"}/>
                </div>
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
    );
}

export default Main
