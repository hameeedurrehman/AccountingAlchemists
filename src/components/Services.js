import "../components/services.css";
import bookkeeping from "../components/assets/bookkeeping.jpg";
import tax from "../components/assets/tax-preparation-planning.jpg";
import financial from "../components/assets/financial-consulting.jpg";
import payroll from "../components/assets/payroll.png";
import virtualcfo from "../components/assets/virual-cfo.jpg";
import audit from "../components/assets/audit-support.jpg";

function Services() {
    return (
        <>
            <div class="work-row">
                <div class="container">
                    <h2 class="tagline">Services</h2>
                    <span class="work-tagline">The Accounting Alchemists helps organize and align the tactical day-to-day tasks with
                        larger life goals.</span>
                    <div class="work-detail">
                        <div class="work-box">
                            <div class="box-image">
                                <img src={bookkeeping} alt="" />
                            </div>
                            <div class="box-details">
                                <h3>Bookkeeping</h3>
                            </div>
                        </div>
                        <div class="work-box">
                            <div class="box-image">
                                <img src={tax} alt="" />
                            </div>
                            <div class="box-details">
                                <h3>Tax Planning and Preparation</h3>
                            </div>
                        </div>
                        <div class="work-box">
                            <div class="box-image">
                                <img src={financial} alt="" />
                            </div>
                            <div class="box-details">
                            <h3>Financial Consulting</h3>
                            </div>
                        </div>
                        <div class="work-box">
                            <div class="box-image">
                                <img src={payroll} alt="" />
                            </div>
                            <div class="box-details">
                            <h3>Payroll Processing</h3>
                            </div>
                        </div>
                        <div class="work-box">
                            <div class="box-image">
                                <img src={virtualcfo} alt="" />
                            </div>
                            <div class="box-details">
                            <h3>Virtual CFO</h3>
                            </div>
                        </div>
                        <div class="work-box">
                            <div class="box-image">
                                <img src={audit} alt="" />
                            </div>
                            <div class="box-details">
                            <h3>Audit Support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services