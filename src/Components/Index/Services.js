import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css'
export default function Services(props) {
    return (
        
        <Link to={props.linker} className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
                <div className="icon"><img src={props.logo} /></div>
                <h4 className="title"><p>
                    <p>{props.name1} <br />{props.name2} <br /></p>
                </p></h4>
            </div>
        
        </Link>
    )
}
