import React from "react";
import {IProject} from "../../../data/interfaces/IProject";
import "./main-project.scss";

const MainProject = (props: {project: IProject, rightFacing: boolean, marginTop: number}) => {
    const { project, rightFacing, marginTop } = props;

    const orientation = rightFacing ? {paddingRight: "8px"} : {paddingLeft: "8px"}
    return (
        <div className="main-section__gallery-piece" style={{marginTop: marginTop + "px", justifyContent: rightFacing ? "flex-start" : "flex-end"}}>
            <div className="main-section__gallery-piece-background" style={{...orientation, flexDirection: rightFacing ? "row" : "row-reverse"}}>
                <a href={project.target} style={{height: "250px"}}>
                    <img src={project.image} alt={"Project image"} className="main-section__gallery-piece-image"/>
                </a>
                <div style={{marginLeft: rightFacing ? "8px" : 0, marginRight: rightFacing ? 0 : "8px"}}>
                    <h2>
                        {project.title}
                    </h2>
                    <p>
                        {project.project_description}
                    </p>
                    <p>
                        {project.technology_description}
                    </p>
                    <a href={project.target} style={{fontSize: "16px", fontWeight: 600}}>
                        {project.button_text}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainProject;
