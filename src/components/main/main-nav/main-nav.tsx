import React, {useEffect} from "react";
import {INavLink} from "../../../data/interfaces/INavLink";
import "./main-nav.scss";

export const MainNav = (props: {horizontal: boolean, links: INavLink[] }) => {
    const { horizontal, links } = props;

    if (links.length < 2) {
        return (
            <></>
        )
    }

    const linkButtons: any[] = [];
    links.forEach(link => {
       linkButtons.push(
           <a href={ link.link } key={link.link}>
               { link.text }
           </a>
       );
    });

    if (horizontal) {
        return (
            <div className="main__bio-nav">
                <div className="main__bio-nav-bar">
                    {linkButtons}
                </div>
                <div className="main__bio-nav-line"/>
            </div>
        );
    }
    return (
        <div className="main__bio-nav-container--vertical">
            <div className="main__bio-nav--vertical">
                <div className="main__bio-nav-bar--vertical">
                    {linkButtons}
                </div>
                <div className="main__bio-nav-line--vertical"/>
            </div>
        </div>
    );
}

export default MainNav;
