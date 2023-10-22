import "../components/header.css";
import logo from "../components/assets/logo.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [header, setHeader] = useState('header')
    const scrollFunc = () => {
        if (window.scrollY < 70){
            setHeader('header')
        } else if(window.scrollY > 70) {
            setHeader('setHeader')
        }
    }
    useEffect(()=> {
        window.addEventListener("scroll", scrollFunc)
    },[])
    return (
        <>
            <header>
                <div class={header} >
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
                                    <li><a href="#services">Services</a></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
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