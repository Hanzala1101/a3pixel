import React from 'react'
import GLightbox from 'glightbox'
export default function Portfolio(props) {
//      const glightbox = GLightbox({
//     selector: '.glightbox'
//   });
    var classnames=require('classnames');
    return (
        <div className={classnames('col-6 col-lg-3 portfolio-item my-2 ',props.filter)}>
            <div className="portfolio-wrap">
                <a href={props.logo} data-gallery="portfolio-gallery-app" class="glightbox"><img src={props.logo} className="img-fluid" alt="" /></a>
                <div className="portfolio-info">
                    <h4><a href="portfolio-details.html" title="More Details">{props.PortTitle}</a></h4>
                    <p>{props.PortDec}</p>
                </div>
            </div>
        </div>
    )
}
