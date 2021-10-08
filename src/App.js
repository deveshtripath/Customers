import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import Header from "./Header";
import Content from "./Content";
import Setup from "./Setup";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


function App() {
  return (
    <div classNameName="App">
      
    <Header/>
      

    <div className="boorder mt-2 ml-2 mr-2 p-2"> 

        <Content/>
        {/* <!-- Customer name End --> */}

        {/* <!-- Purchase History Start --> */}
        <section className="history mt-1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-between">
                        <h5 className="font-weight-bold">Purchase History</h5>

                    </div>
                </div>
              <Sidebar/>
              <hr/>
            </div>
        </section>
        {/* <!-- Purchase History End --> */}

        {/* <!-- Analytics Start --> */}
        <Setup/>
        {/* <!-- Analytics End --> */}
    </div>

    {/* <!-- Again Start --> */}
    <div className="boorder mt-0 ml-2 mr-2 mb-2 p-2">
        <Footer/>
    </div>
    </div>
  );
}

export default App;
