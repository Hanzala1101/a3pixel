import { React } from 'react'
import Navbar from './navbar/Navbar.js'
import Services from "./Index/Services.js";
import About from './Index/About.js';
import Latest from './Index/Latest.js';
import Clients from './Index/Clients';
import Testimonial from './Index/Testimonial.js';
import Portfolio from './Index/Portfolio.js';
import Footer from './navbar/footer.js';
import JsonData from './Index/portfolio.json';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScrollToTop from "react-scroll-to-top";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const options1 = {
    loop: 'true',
    autoplay: 'true',
    dots: 'false',
    autoplayTimeout: 4000,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
    }
};

const options2 = {
    loop: 'true',
    center: 'true',
    items: 3,
    margin: 0,
    autoplay: 'true',
    dots: 'true',
    autoplayTimeout: 3000,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        770: {
            items: 2
        },
        1024: {
            items: 3
        },


    }
};
export default function Index() {


    const DisplayData = JsonData.map(
        (info) => {
            return (
                <Portfolio logo={info.path} PortTitle={info.directory} PortDec={info.subdirectory} filter={info.filter} />
            )
        }
    )
    return (
        <>

            {/* <!-- ======= Header ======= --> */}
            <Navbar />

            {/* <!-- End Header --> */}

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <OwlCarousel {...options1} id="customers-banner" className="owl-carousel">
                            <img src="\img\about\Banner_01.png" alt="" className='img-fluid ' />
                            <img src="\img\about\Banner_02.png" alt="" className='img-fluid ' />
                            <img src="\img\about\Banner_03.png" alt="" className='img-fluid ' />
                            <img src="\img\about\Banner_04.png" alt="" className='img-fluid ' />
                            <img src="\img\about\Banner_05.png" alt="" className='img-fluid ' />
                        </OwlCarousel>
                    </div>
                </div>

                <div className="icon-boxes position-relative" id='services'>
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">

                            <Services linker="/services" name1="E-LEARNING &" name2="DEVELOPMENT" logo="\img\logos\Icon_01.png" />
                            <Services linker="/services" name1="TRANSLATION &" name2="LOCALIZATION" logo="/img/logos/Icon_02.png" />
                            <Services linker="/services" name1="WEBSITE & MULTIMEDIA" name2=" DEVELOPEMENT" logo="/img/logos/Icon_03.png" />
                            <Services linker="/services" name1="PRINT & IDENTITY" logo="/img/logos/Icon_04.png" />

                            {/* <!--End Icon Box --> */}

                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- End Hero Section --> */}

            <main id="main">

                {/* <!-- ======= About Us Section ======= --> */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title mb-2" data-aos="zoom-out">
                            <p>About Us</p>
                            {/* <h2>Below you can find more information about our company</h2> */}
                        </div>
                        <p className='mb-4'>The company provides effective web and e-Learning solutions that are easy to implement and use. Our efforts are directed at consistently building stimulating and state-of-the-art e-Learning products for our clients that makes online learning
                            a fun and enriching experience for the users. Over the years, we have perfected the ability to handle unstructured situations with ease, to give life to ideas and concepts that have never been implemented before, and to manage a multitude
                            of projects without slipping on deadlines. In each project that we undertake, we make every effort to maintain the highest standards of quality and efficiency. A3PIXELS has been profitable in every quarter and has shown a 100% growth
                            in revenues in every successive year since inception.</p>

                        <div className="row gy-4">

                            <div className="col-lg-5 ">
                                <div class="d-flex align-items-end flex-column">
                                    <div class=" pb-5"> <ul>
                                        <li>
                                            <h4 className="section-title mb-0"><b>OUR MISSION:</b></h4>
                                        </li>
                                        <li className="mt-0"><p> To provide our customers timely and cost-effective e-learning solutions and services aligned to their business goals. </p></li>

                                    </ul></div>

                                    <div class="mt-auto pt-5">
                                       
                                        <img className='img-fluid' src="/img/logos/about-side.png" alt="" />
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-7">
                                <div className="content ps-0 ps-lg-5 ">
                            <h4 className="section-title  "><b>WHAT WE DO</b></h4>
                                    <ul>
                                        <About Aboutstyle="yellow" Aboutlogo="\img\about\Icon_05.png" Aboutdec="Good user interface design helps people work more assertively, complete tasks more efficiently and build brand loyalty at the same time." AboutTitle="UI DESIGN" />

                                        <About Aboutstyle="grey" Aboutlogo="\img\about\Icon_07.png" Aboutdec="We specialize in creating customized learning solutions with latest technical language to cultivate visually outstanding, animated text, frame and more informative design.
                                               " AboutTitle="CUSTOMIZE SOLUTION" />

                                        <About Aboutstyle="yellow" Aboutlogo="\img\about\Icon_06.png" Aboutdec="Our experienced & talented professionals analyse the existing website and identify the most vital content for mobile browser compatibility.
                                                    " AboutTitle="MOBILE WEBSITE DESIGN" />

                                        <About Aboutstyle="grey" Aboutlogo="\img\about\Icon_08.png" Aboutdec=" Our innovative graphic designers create brochure designs, flyers, business cards, datasheets, magazines, post cards, booklets, newsletters." AboutTitle="BRANDING DESIGN" />
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Us Section --> */}


                {/* <!-- ======= Call To Action Section ======= --> */}
                <section id="call-to-action cta " className="call-to-action zoom-out yellow">

                    <div className="container">

                        <div className="row" data-aos="zoom-out">
                            <div className="col-lg-9 text-center text-lg-start">
                                <h3 className='text-uppercase'>Call To Action</h3>
                                <p className='m-0'> Click the button and fill the form if having any query or want to contact us we will reach to you as soon as we recive your form</p>
                            </div>

                            <div className="col-lg-3 cta-btn-container text-center my-4">
                                <a herf="/" className="cta-btn align-middle button" id="button" data-toggle="modal" data-target="#myModal">Call
                                    To Action</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                                <h4 className="modal-title" id="myModalLabel">ENQUIRY</h4>
                            </div>
                            <div className="modal-body">
                                <div id="response"></div>
                                <div className="form-group">
                                    <label for="requirements">Select Your requirements:</label>
                                    <select name="requirements" id="requirements" className='form-control'>
                                        <option value="elearning">E-Learning Developement</option>
                                        <option value="translation">Translation & Localization</option>
                                        <option value="website">Website Developement</option>
                                        <option value="print">Print & Media</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your company name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email e.g example@xyz.com" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Enter your requirement details..." clos='10' rows='2' />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Call To Action Section --> */}

                {/* Our lates work */}
                <section className="latest" data-aos="fade-up">
                    <div className="section-title  container" data-aos="zoom-out">
                        <p >OUR LATEST WORK</p>
                    </div>
                    <div className="icon-boxes position-relative">
                        <div className="container position-relative">
                            <div className="row gy-4 mt-5">
                                <Latest logo="/img/about/work1.jpg" CareerTitle="WEB SOLUTION" CareerDec="A Website is an extension of a company's overall communication strategy. We create websites using HTML5, CSS3, Jquery." />
                                <Latest logo="/img/about/work2.jpg" CareerTitle="WEB APPLICATION" CareerDec="We have expertise in Smart Phone Application Development, iPhone Game Development and Custom Mobile Application Development" />
                                <Latest logo="/img/about/work3.jpg" CareerTitle="K12 ANIMATIONS" CareerDec="We offer full production services in 2D, 3D, cell animation and corporate Videos (Audio and video), Multimedia Presentations / Slideshows." />
                                <Latest logo="/img/about/work4.jpg" CareerTitle="PRINT WORK" CareerDec="We develop the most effective marketing solutions based on your unique business needs, aiming to maximize returns on your marketing efforts." />

                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- ======= Testimonials Section ======= --> */}
                <section id="testimonials" className="testimonials yellow">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title mb-3" data-aos="zoom-out">
                            <p>Testimonial</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 newone" >
                                <OwlCarousel {...options2} id="customers-testimonials" class="owl-carousel">
                                    <Testimonial testidesc=" A terrific team to work with: splendid support and excellent work! With your extraordinary efforts, we delivered an eLearning program that met nearly all expectations and an aggressive deadline. I would like to thank everyone who worked on the project. Highly recommend this team and would seek out every opportunity to work with you in future." testiposition="Project Manager, Aptara Inc." testiname="Shabbeer Zafar" imgsrc='\img\team\Male_testimonials.png' />
                                    <Testimonial testidesc="“ Excellent team, led by a well-informed manager. " testiname="Neel Parnaik" testiposition="Associate Project Manager,  Aptara Inc." imgsrc='\img\team\Male_testimonials.png' />
                                    <Testimonial testidesc="“ The A3 Pixels team understands the work well and then performs with full enthusiasm. Output provided in our project was good. Help is extended whenever asked. We look forward working with you in future too. " testiname="Heeshma Shah" testiposition="Manager-Technical Services, Signet Chemical Corporation Pvt. Ltd." imgsrc='\img\team\Female_testimonials.png' />
                                    <Testimonial testidesc="“ A3 Pixels is a highly responsive team. During our interaction, changes or additions were immediately implemented either on the same day or the next. On completion of the task, we were informed of the same via email by their Admin. Much appreciated! " testiname="Roshni Udyavar Yehuda" testiposition="Head, Rachana Sansad Institute of Environmental Architecture" imgsrc='\img\team\Female_testimonials.png' />
                                </OwlCarousel>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Testimonials Section --> */}

                {/* <!-- ======= Portfolio Section ======= --> */}
                <section id="portfolio" className="portfolio sections-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title mb-3" data-aos="zoom-out">
                            <p>Portfolio</p>
                        </div>
                        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                            <div>
                                <ul className="portfolio-flters " id="portfolio-flters " >
                                    <li data-filter="*" class="filter-active">ALL</li>
                                    <li data-filter=".Elearning">E-LEARNING</li>
                                    <li data-filter=".Localization">LOCALIZATION</li>
                                    <li data-filter=".webdesigns">WEB DESIGN</li>
                                    <li data-filter=".Mobile_solution">MOBILE SOLUTION</li>
                                    <li data-filter=".Multimedia_solution">MULTIMEDIA PRESENTATION</li>
                                    <li data-filter=".printwork">LOGO & PRINT DESIGN</li>
                                </ul>
                                {/* <!-- End Portfolio Filters --> */}
                            </div>

                          
                            <div className="row   fixedsize">
                                {DisplayData}
                            </div>
                            {/* <!-- End Portfolio Container --> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Portfolio Section --> */}


            </main>
            {/* <!-- End #main --> */}
            {/* <!-- ======= Clients Section ======= --> */}
            
                    <Clients />
                
            {/* <!-- End Clients Section --> */}
            {/* <!-- ======= Footer ======= --> */}
            <Footer />
            {/* <!-- End Footer --> */}
            {/* <!-- End Footer --> */}

            <ScrollToTop smooth style={{ borderRadius: '50px', border: "2px solid #898989", height: '50px', width: '50px', boxShadow: "0 5px 15px rgba(0,0,0,0.2) " }} />

            {/* <div id="preloader"></div> */}
        </>
    )
}
