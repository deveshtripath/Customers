import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import FooterComponents from "./FooterComponents";


function Footer() {
    return (
        <section className="name">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <div className="icon">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="text ml-3">
                                <h6>Rajat kumar</h6>
                                <h6>Gugaon, Haryana, India</h6>
                                <h6>+911234567890</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr/>
                                
                <FooterComponents
                    name="Purchase History"
                />
                <hr/>
                <FooterComponents
                    name="Customer analytics"
                />
                
            </div>
        </section>
    )
}

export default Footer
