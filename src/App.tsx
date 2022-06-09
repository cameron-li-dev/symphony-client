import "./App.css";
import Main from "./pages/main";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/path-find">
                </Route>
                <Route path="/valorant">
                </Route>
                <Route path="/components">
                </Route>
                <Route path="/" element={<Main/>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
