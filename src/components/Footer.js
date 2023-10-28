import "../components/footer.css"

function Footer() {
    return (
        <div >
            <footer id="footer">
                <div class="footer">
                    <div class="container">
                        <div class="footer-row">
                            <div class="footer-description">
                                <div class="footer-details">
                                    <div class="footer-logo">
                                        <img src="images/footerlogo.png" alt="" />
                                    </div>
                                    <div class="footer-heading">
                                        <span class="footer-heading-before">THE</span>
                                        <h2>Accounting Journal</h2>
                                        <span class="footer-heading-after">Accounting Alchemists</span>
                                    </div>
                                </div>
                                <div class="footer-paragraph">
                                    <p>We are highly Qualified experts of <b>Accounts</b> and <b>Finance</b>, Providing Financial Growth.</p>
                                </div>
                            </div>
                            <div class="footer-information">
                                <h2>Information</h2>
                                <ul>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="/blogs">Blogs</a></li>
                                    <li><a href="#testimonials">Testimonials</a></li>
                                    <li><a href="#footer">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="footer-connect">
                                <h2>Get Connected</h2>
                                <span>Join 70,000 + friends on their own Best Self</span>
                                <div class="">
                                    {/* <form>
                                        <label for=""></label>
                                        <input type="text" />
                                        <label for=""></label>
                                        <input type="image" src="/images/submitbtn.png" />
                                    </form> */}
                                    <div class="footer-icons">
                                        <i class="fa-brands fa-facebook-f fa-xl"></i>
                                        <i class="fa-brands fa-twitter fa-xl"></i>
                                        <i class="fa-brands fa-square-instagram fa-xl"></i>
                                        <i class="fa-solid fa-wifi wifi fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span class="footer-text">Copyright@ 2017 The BlackBook Daily Time Management | Privacy Policy </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;