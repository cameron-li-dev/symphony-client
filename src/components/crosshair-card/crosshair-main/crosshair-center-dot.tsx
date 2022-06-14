import {ICrosshairCenterDot} from "../../../data/interfaces/ICrosshairConfig";

export const CrosshairCenterDot = (props: { centerDot?: ICrosshairCenterDot }) => {
    const { centerDot } = props;

    if (!centerDot) {
        return (
            <></>
        )
    }
    return (
        <div>

        </div>
    )
}

export default CrosshairCenterDot;