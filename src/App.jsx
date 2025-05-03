import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Historia from "./components/Historia";
import Autor from "./components/Autor";
import Conclusao from "./components/Conclusao";
import Footer from "./components/Footer";

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <main className="container">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
            </button>

            <HeroSection />
            <Historia />
            <Autor />
            <Conclusao />
            <Footer />
        </main>
    );
}

export default App;
