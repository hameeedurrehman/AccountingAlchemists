import "../components/header.css";
import logo from "../components/assets/logo.png"

function Header() {
;
    return (
        <>
            <header>
                <div class="header">
                    <div class="container">

                        <div class="header-logo">
                            <a href="/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div class="header-navbar">
                            <nav>
                                <ul>
                                    <li><a href="#banner">Home</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Email Us</a></li>
                                    <li><a href="/">Our Story</a></li>
                                    <li><a href="/">Support</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header