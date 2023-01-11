import React from 'react'

export default function footer() {
    return (<>
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-4 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <div className="maplogo pb-2">
                                <img src="/img/footer_logo.png" className="img-fluid" alt="" />
                            </div>
                        </a>
                        <p className='text-white'>
                            <div className='d-flex align-items-start'>
                                <i class="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;<p>Hind Service Industries, SVS Rd, Chandrakant Dhuru Wadi, Dadar, Mumbai, Maharashtra 400028</p></div>
                            <i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;
                            sales@a3pixels.com <br /> <br />
                        </p>
                        <div className="social-links d-flex my-4">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.7569700805925!2d72.82680943608283!3d19.025075496608988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf565ca045e1%3A0x7fb713676527a2f8!2sHind%20Service%20Industries!5e0!3m2!1sen!2sin!4v1668770176670!5m2!1sen!2sin" className='footer-map'
                            allowFullScreen referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                </div>
            </div>
        </footer>
        <div className="text-center yellow m-0">
            <div className="copyright">
                &copy; Copyright <strong><span>A3pixels.com</span></strong>. All Rights Reserved
            </div>
        </div></>
    )
}
