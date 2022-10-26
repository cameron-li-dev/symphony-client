import UpwardsArrow from "../../../images/upward-arrow.svg";
import DownwardsArrow from "../../../images/downward-arrow.svg";
import React from "react";
import "./section-nav.scss";

const SectionNav = (props: {upwards: boolean, target: string, visible: boolean}) => {
    const { upwards, target, visible} = props;
    const arrowPath = upwards ? UpwardsArrow : DownwardsArrow;
    const positionStyle = upwards ? {top: 0} : {bottom: 0};

    return (
        <a className="section-navigator" href={target} style={{...positionStyle, display: visible ? "flex" : "none"}}>
            <img src={arrowPath} alt="Arrow" style={{width: "25px"}}/>
        </a>
    );
}

export default SectionNav;
