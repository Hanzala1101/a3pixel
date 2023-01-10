import React, { Component } from 'react'
import './career.css';
import Navbar from '../navbar/Nav.js';
import Footer from '../footer/Footer.js';
import Clients from '../index/Clients.js';


export default class Career extends Component {
    render() {
        return (<>
            {/* ========navbar========== */}
            <Navbar />
            <section className='mt-3 '></section>
            <div className="page-title">
      <div className="container mb-3">
        <div className="row">
          <div className="span12">
            <i className="icon-envelope-alt page-title-icon"></i>
            <h2>Career with us /</h2>
            <p>We are hiring for below positions</p>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-us container mb-3">
      <div className="row">
        <div className="contact-form span10">
          <p>
            Next Steps to Get In Touch With Us send Email to Us: 
            
              <a href="mailto:pritide@a3pixels.com">hr@a3pixels.com</a>
          
            . You can send your detailed resume/CV here.
          </p>
          <table cellSpacing="5" cellPadding="5" border="1" className="tableStyle3 table table-bordered responsive">
            <tr>
              <td>Sr</td>
              <td>Position</td>
              <td>Skills & Experience</td>
              <td>No. of positions</td>
              <td>Location </td>
              <td>Joining required by</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Project Coordinator</td>
              <td style={{ textAlign: 'left' }}>
                Engineer or BBA / MBA with good communication skills and very diligent. Must be very well versed with Excel, Powerpoint. Must be able to talk to the clients confidently and have good verbal and written communication skills.
              </td>
              <td>5 Positions</td>
              <td>Mumbai</td>
              <td>Next week</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Senior developers</td>
              <td style={{ textAlign: 'left' }}>
                Strong CSS3 / HTML5 / Javascript skills. Knowledge of PHP would be an added advantage.
              </td>
              <td>1 Position</td>
              <td>Mumbai</td>
              <td>Immediate</td>
            </tr>
          </table>
        </div>
        <div className="contact-address span5"></div>
      </div>
    </div>




    {/* hiyfvu7btg */}            {/* ===========clients=========== */}
            <Clients />
            {/* =============footer========== */}
            <Footer />
        </>
        )
    }
}
