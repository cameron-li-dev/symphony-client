import "./App.css";
import Main from "./pages/main/main";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Valorant from "./pages/valorant/valorant";
import PathFind from "./pages/path-find/path-find";
import Components from "./pages/components/components";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/path-find" element={<PathFind/>}>
                </Route>
                <Route path="/valorant" element={<Valorant/>}>
                </Route>
                <Route path="/components" element={<Components/>}>
                </Route>
                <Route path="/" element={<Main/>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
