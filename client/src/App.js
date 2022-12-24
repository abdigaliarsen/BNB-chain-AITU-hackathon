import { Button } from "./UI";

import "./global-styles/app.sass";

import { Header, Features, CTA, Meaning, Footer } from "./components";

function App() {
    return (
        <div className="App">
            <Header />
            <Features />
            <CTA />
            <Meaning />
            <Footer />
        </div>
    );
}

export default App;
