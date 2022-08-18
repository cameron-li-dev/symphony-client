import "./skills.scss";
import NavigationButton from "../../components/button/navigation-button/navigation-button";
import SkillCard from "../../components/skills/skill-card/skill-card";
export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-header">
                <NavigationButton path="/"/>
            </div>
            <div className="skills-content">
                <div className="skills-web-development">
                    <div className="skills-web-development-title-container">
                        <SkillCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
