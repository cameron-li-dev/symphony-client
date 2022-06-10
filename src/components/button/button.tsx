import "./button.scss";

export const Button = (props: { children?: any, style?: any }) => {
    const { children, style } = props;

    return (
        <div className="button-container" style={ style }>
            { children }
        </div>
    )
}

export default Button;
