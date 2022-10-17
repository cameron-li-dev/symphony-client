import "./App.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Valorant from "./pages/valorant/valorant";
import PathFind from "./pages/path-find/path-find";
import Components from "./pages/components/components";
import Blog from "./pages/blog/blog";
import Main from "./pages/main/main";
import Skills from "./pages/skills/skills";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/path-find" element={<PathFind/>}/>
                <Route path="/valorant/*" element={<Valorant/>}/>
                <Route path="/components" element={<Components/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </Router>
    );
}

export default App;
