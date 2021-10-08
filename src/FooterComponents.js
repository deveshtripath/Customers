import React from 'react'

function FooterComponents({name}) {
    return (
        <div className="row">
                    <div className="col-md-3 d-flex justify-content-between">
                        <div className="text">
                            <h5 className="font-weight-bold mb-3">{name}<a className="extra-toggle-collapse" data-toggle="collapse" href="#collapse5"><i className="fas fa-sort-down ml-5 pl-2"></i></a></h5>
                            <div id="collapse5" className="panel-collapse collapse">
                                <p>Loreum ipsum Loreum hshs shvhhsu hsvysx </p>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default FooterComponents
