import "./products.css";
import services from "../assets/accounting-services.jpg";
import finance from "../assets/financial-education.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
    <div className="products">
      <h1> Products</h1>
      <div className="wrapper" id="products">
        <div class="product-box">
          <div className="products-thumbnail">
            <img src={services} alt="..." />
            {/* <a href="#services" id="overlay-img">
              <i class="fa-solid fa-arrow-down fa-beat-fade fa-2xl"></i>
            </a> */}
          </div>
          <div class="box-body">
            <a href="#services">
              <h2 class="box-title">Our Services</h2>
            </a>
          </div>
        </div>
        <div class="product-box">
          <div className="products-thumbnail">
            <img src={finance} alt="..." />
          </div>
          <div class="box-body">
            <Link to="/blogs">
              <h2 class="box-title">Financial Education</h2>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Products