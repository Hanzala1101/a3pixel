import React, { Component } from 'react'
import './Testimonial.css';

export default class testimonial extends Component {
  render() {
    return (<>
{/* <!-- TESTIMONIALS --> */}
            <div class="item">
              <div class="top11"></div>
              <img src={this.props.imgsrc} alt='' className='owl-img'/>
              <div class="shadow-effect">
                <p>{this.props.testidesc}<br/><b>{this.props.testiposition}</b></p>
              </div>
              <div class="testimonial-name">
              {this.props.testiname}
                </div>
            </div>
    {/* <!-- END OF TESTIMONIALS --> */}
    </>
    )
  }
}
