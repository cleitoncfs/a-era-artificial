import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        isVisible && (
            <button
                className="scroll-to-top"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                title="Topo"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollToTop;
