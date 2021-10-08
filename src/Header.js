import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';


function Header() {
    return (
        <>
    <section className="customer">
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-6 col-sm-12 order-md-2">
                <div className="header__search pb-2">
            <input type="text" className="header__searchInput" placeholder="Search Item"/>
            
            {/* <SearchIcon className="header__searchIcon"/> */}
            </div> 
            </div> 
                <div className="col-md-4 col-sm-12 d-flex justify-content-around head order-md-1 ">
                    <h4><a href="/">Customer</a></h4>
                    <h4><a href="/">Visitor</a></h4>
                </div>
            </div>
        </div>
      </section>
      </>
    )
}

export default Header
