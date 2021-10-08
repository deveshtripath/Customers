import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import Header from "./Header";
import Content from "./Content";
import logo from './img/71E5zB1qbIL5.png';
import logo1 from './img/71E5zB1qbIL 4.png';


function SidebarComponent({img,name,money,date}) {
    return (
        <div className="col-md-6">
                        <div className="phone d-flex justify-content-around">
                            <div className="d-flex">
                                <img src={img} alt=""/>
                                <div className="text">
                                    <h6 className="mt-2 mb-0">{name}</h6>
                                    <p className="m-0">red</p>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="price mt-2">
                                <h6>${money}</h6><br/>
                                <h6>$999</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center ml-5">
                            <button className="btn border ml-5">Pending</button>
                            <h6 className="ml-4">{date} june, 2021</h6>
                        </div>
                    </div>
    )
}

export default SidebarComponent
