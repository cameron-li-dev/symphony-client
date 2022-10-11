import React, {useEffect} from "react";
import {INavLink} from "../../../data/interfaces/INavLink";
import "./main-nav.scss";

export const MainNav = (props: {horizontal: boolean, links: INavLink[], colorMode?: string }) => {
    const { horizontal, links, colorMode } = props;
    const [navColor, setNavColor] = React.useState("black");

    useEffect(() => {
        if (!!colorMode) {
            if (colorMode === "dark") {
                setNavColor("black");
            } else {
                setNavColor("white");
            }
        }
    }, [colorMode]);

    if (links.length < 2) {
        return (
            <></>
        )
    }

    const linkButtons: any[] = generateLinkButtons(horizontal, links, navColor);

    if (horizontal) {
        return (
            <div className="main__bio-nav">
                <div className="main__bio-nav-bar">
                    {linkButtons}
                </div>
            </div>
        );
    }

    return (
        <div className="main__bio-nav-container--vertical">
            <div className="main__bio-nav--vertical">
                <div className="main__bio-nav-bar--vertical">
                    {linkButtons}
                </div>
            </div>
        </div>
    );
}

const generateLinkButtons = (horizontal: boolean, links: INavLink[], navColor: string) => {
    const linkButtons: any[] = [];
    const navClassName = horizontal ? "main__bio-nav-bar-link" : "main__bio-nav-bar--vertical-link";
    const navLineClassName = horizontal ? "main__bio-nav-line" : "main__bio-nav-line--vertical";
    links.forEach((link, index) => {
        let linkButton = (
            <a href={ link.link } key={link.link} className={navClassName} style={{color: navColor}}>
                { link.text }
            </a>
        );

        if (links.length === 1) {
            linkButtons.push(
                <>
                    <div key={"line-start"+link.link} className={navLineClassName + "--end"} style={{background: navColor}}></div>
                    {linkButton}
                    <div key={"line-end"+link.link} className={navLineClassName + "--end"} style={{background: navColor}}></div>
                </>
            );
        } else if (index === 0 && links.length > 1) {
            linkButtons.push(
                <>
                    <div key={"line-start"+link.link} className={navLineClassName + "--end"} style={{background: navColor}}></div>
                    {linkButton}
                    <div key={"line"+link.link} className={navLineClassName} style={{background: navColor}}></div>
                </>
            );
        } else if (links.length - 1 === index) {
            linkButtons.push(
                <>
                    {linkButton}
                    <div key={"line-end"+link.link} className={navLineClassName + "--end"} style={{background: navColor}}></div>
                </>
            );
        } else {
            linkButtons.push(
                <>
                    {linkButton}
                    <div key={"line"+link.link} className={navLineClassName} style={{background: navColor}}></div>
                </>
            );
        }
    });

    return linkButtons;
}

export default MainNav;
