import "./skills.scss";
import NavigationButton from "../../components/button/navigation-button/navigation-button";
import SkillCard from "../../components/skills/skill-card/skill-card";
import ISkills from "../../data/interfaces/ISkills";
import skillsJson from "../../data/skills.json";

export const Skills = () => {
    const skills: ISkills[] = JSON.parse(JSON.stringify(skillsJson));
    console.log(skills);

    return (
        <div className="skills-container">
            <div className="skills-header">
                <NavigationButton path="/"/>
            </div>
            <div className="skills-content">
                <SkillCard title="Web Development"/>
            </div>
        </div>
    )
}

export default Skills;
