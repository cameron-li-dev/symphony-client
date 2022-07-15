import "./skills.scss";
import NavigationButton from "../../components/button/navigation-button/navigation-button";
export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-header">
                <NavigationButton path="/"/>
            </div>
            <div className="skills-content">
                <div className="skills-web-development">
                    <div className="skills-web-development-title-container">
                        <div className="skills-web-development-title-content">
                            Web Development
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
