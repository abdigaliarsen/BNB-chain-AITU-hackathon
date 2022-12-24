import "./global-styles/app.sass";

import { Routes, Route } from "react-router-dom";
import { Landing, Demo } from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>
        </div>
    );
}

export default App;
