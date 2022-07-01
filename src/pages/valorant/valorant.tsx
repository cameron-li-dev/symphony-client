import "./valorant.scss";
import {Route, Routes} from "react-router-dom";
import ValorantRoot from "./valorant-root/valorant-root";
import ValorantCreate from "./valorant-create/valorant-create";

export const Valorant = () => {
    return (
        <Routes>
            <Route path="/create" element={<ValorantCreate/>}/>
            <Route path="/" element={<ValorantRoot/>}/>
        </Routes>
    )
}

export default Valorant;
