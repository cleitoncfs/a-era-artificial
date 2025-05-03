import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copyright">
                © {new Date().getFullYear()} Divulgação do livro &quot;A era
                Digital&quot; - Todos os direitos reservados
            </p>
            <p className="footer-credits">
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    <span>Cleiton Santos</span>
                    <FaExternalLinkAlt className="link-icon" />
                </a>
            </p>
        </footer>
    );
}
