import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const SectionFaq = () => {
    const navigate = useNavigate();
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a
                        onClick={() => navigate("/about")}
                        className="link link-hover"
                    >
                        About us
                    </a>
                    <a
                        onClick={() => navigate("/country")}
                        className="link link-hover"
                    >
                        Country Data
                    </a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://www.instagram.com/rizkiafdl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaInstagram size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rizkiafdl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            <AiOutlineLinkedin size={32} />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Muhammad Rizki Afdolli</p>
                </aside>
            </footer>
        </div>
    );
};

export default SectionFaq;
