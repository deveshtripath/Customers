import React from 'react'

function Content() {
    return (
        <section className="name">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <div className="icon">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="text ml-3 col-md-3">
                                <h6>Rajat kumar</h6>
                                <h6>Gugaon, Haryana, India <a className="extra-toggle-collapse" data-toggle="collapse" href="#collapse2"><i className="fas fa-sort-down ml-5"></i></a></h6>
                                <div id="collapse2" className="panel-collapse collapse">
                                    <p>Loreum ipsum Loreum hshs shvhhsu hsvysx </p>
                                </div>
                                <h6>+911234567890</h6>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
