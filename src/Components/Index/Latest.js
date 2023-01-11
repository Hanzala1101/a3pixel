import React from 'react'
import './Latest.css'
export default function Latest(props) {
    return (
        <div className="container-fluid col-lg-3 col-sm-6 py-4">
            <div className="card">
                <div className="imgbx">
                    <div className="row2">
                        <img src={props.logo} className='img-fluid' alt="" />
                        <h5>{props.CareerTitle}</h5>
                    </div>
                </div>
                <div className="content">
                    <p>{props.CareerDec}</p>
                </div>
            </div>
        </div>
    )
}
