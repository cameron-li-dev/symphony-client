const SkillCard = (props: {title: string}) => {
    const { title } = props;
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                Content
            </div>
        </div>
    )
}

export default SkillCard;
