import { Button } from "./UI";

import "./global-styles/app.sass";

import { Header, Features } from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <Features />
        </div>
    );
}

export default App;
