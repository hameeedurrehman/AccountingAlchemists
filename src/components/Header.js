import "../components/header.css";
import logo from "../components/assets/logo.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [header, setHeader] = useState('header')
    const scrollFunc = () => {
        if (window.scrollY < 70) {
            setHeader('header')
        } else if (window.scrollY > 70) {
            setHeader('setHeader')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollFunc)
    }, [])
    return (
        <>
            <header>
                <div class={header} >
                    <nav class="navbar navbar-expand-lg navbar-dark ms-2 me-2">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">
                                <img src={logo} alt="" />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#products">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/blogs">Blogs</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#testimonials">Testimonials</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#footer">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header