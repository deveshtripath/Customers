import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import logo from './img/71E5zB1qbIL5.png';
import logo1 from './img/extracharge.png';

import SidebarComponents from "./SidebarComponent";

function Sidebar() {
    return (
        <div className="row pt-4">
                    <SidebarComponents
                        img={logo}
                        name="Apple iphone 12"
                        money={3444}
                        date={12}
                    />
                    <SidebarComponents
                        img={logo1}
                        name="Apple iphone 11"
                        money={1299}
                        date={34}
                    />
        </div>
    )
}

export default Sidebar
