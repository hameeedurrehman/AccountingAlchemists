import "./products.css";
import services from "../assets/accounting-services.jpg";
import finance from "../assets/financial-education.jpg";

function Products() {
  return (
    <div className="products">
      <div class="product-box">
        <div className="products-thumbnail">
          <img src={services} alt="..." />
          <a href="#services" id="overlay-img">
            <i class="fa-solid fa-arrow-down fa-beat-fade fa-2xl"></i>
          </a>
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
          <a href="/" id="overlay-img">
            <i class="fa-solid fa-arrow-right fa-beat-fade fa-2xl"></i>
          </a>
        </div>
        <div class="box-body">
          <a href="/">
          <h2 class="box-title">Financial Education</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Products