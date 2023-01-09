import React from 'react'

export default function Portfolio(props) {
    var classnames=require('classnames');
    return (
        <div className={classnames('col-6 col-lg-3 portfolio-item',props.filter)}>
            <div className="portfolio-wrap">
                <a href={props.logo} data-gallery="portfolio-gallery-app" className="glightbox"><img src={props.logo} className="img-fluid" alt="" /></a>
                <div className="portfolio-info">
                    <h4><a href="portfolio-details.html" title="More Details">{props.PortTitle}</a></h4>
                    <p>{props.PortDec}</p>
                </div>
            </div>
        </div>
    )
}
