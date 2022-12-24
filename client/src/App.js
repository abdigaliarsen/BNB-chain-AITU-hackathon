import "./global-styles/app.sass";

import { Routes, Route } from "react-router-dom";
import { Landing, Demo } from "./pages";

import Approvement from "./pages/Demo/comp/Approvement";
import Rejection from "./pages/Demo/comp/Rejection";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/approved" element={<Approvement />} />
                <Route path="/rejected" element={<Rejection />} />
            </Routes>
        </div>
    );
}

export default App;
