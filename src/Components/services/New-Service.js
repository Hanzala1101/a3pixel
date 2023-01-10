import React, { Component } from 'react'
import './New-Service.css';
import Navbar from '../navbar/Navbar.js';
import Footer from '../navbar/footer.js';
import Clients from '../Index/Clients.js';
import Translation from './translation.js';
import WebMul from './web&mul.js';


export default class NewService extends Component {
    constructor(props) {
        super(props)

        // Set initial state 
        this.state = {
            bannertext1:
                'SERVICES',
            bannertext2:
                'E-LEARNING DEVELOPEMENT'
        }


        // Binding this keyword 
        this.updateState = this.updateState.bind(this)
    }

    updateState(event) {
        // Changing state 
        this.setState({
            bannertext2: event.target.id
        })
    }


    render() {
        return (<>
            {/* ========navbar========== */}
            <div className='fixed-top'>
                <Navbar />

                {/* =============E-learning section========= */}
                <section className="mt-3" >
                    <div className='row grey1'>
                        <div className='row  p-3 col-12'>
                            <div className='col-1'></div>
                            <div className="col-md-5 col-sm-12 d-flex justify-content-left my-auto hidden">
                                <p className='font-weight-bold text-left  ' ><h1 className='extrasize'>{this.state.bannertext1}</h1>
                                    <p className='extrasize1 '>{this.state.bannertext2}</p></p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="\img\serlogo\services1.png" className='img-fluid' alt='' />

                            </div>
                        </div>
                    </div>
                    <div className='row portfolio'>
                        <ul id="portfolio-flters" className="col-12 d-flex justify-content-center serport nav-pills portfolio-filter" data-aos="fade-up">
                            <a href='#elearning'><li id='E-LEARNING DEVELOPEMENT' onClick={this.updateState} className="filter-active pl-4 pr-4 probutton"> E-LEARNING DEVELOPEMENT</li></a>
                            <a href='#trans'><li className='probutton' id='TRANSLATION & LOCALIZATION' onClick={this.updateState} > TRANSLATION & LOCALIZATION</li></a>
                            <a href='#web'><li className='probutton' id='WEB & MULTIMIDIA DEVELOPEMENT' onClick={this.updateState} > WEB & MULTIMIDIA DEVELOPEMENT</li></a>
                            <a href='#print'><li className='probutton' id='PRINT & IDENTITY' onClick={this.updateState}> PRINT & IDENTITY</li></a>
                        </ul>
                    </div>
                </section>
            </div>
            <div className='row elearning ' id='elearning'>
                <p className=' container mt-5 mb-0 '>
                    We have expertise in both: across -the -board -support to serious e-Learning solutions; and custom e-learning content creation in areas like Behavioral/Soft Skills, Software Simulation, Standard Operating Procedures, Domain Skills - Sales, Finance, HR, and Operations etc. Product Training, Interactive Game Based Approach, Vocational Courses.
                    <br />
                    <br />
                    Our wbt/cbt's are powerful, intuitive, self-paced, self-learning tools which impart in-depth know-how to employees in a simple and lucid style. We integrate audio-visuals to make the content more interesting and the learning experience more exciting.</p><br /><br />

                <section className='row bacimg '>
                    <div className='col-lg-6 yellow pt-5  pb-4 d-flex justify-content-center'>
                        <div className='col-9'>
                            <b className='font-20'>CUSTOM E-LEARNING CONTENT CREATION</b>
                            <ul className='pl-4 gap'>
                                <li>Behavioral/Soft Skills</li>
                                <li>Software Simulation</li>
                                <li>Standard Operating Procedures</li>
                                <li>Domain Skills - Sales, Finance, HR, Operations etc.</li>
                                <li>Product Training</li>
                                <li>Interactive Game Based Approach</li>
                                <li>Vocational Courses</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 grey pt-5 d-flex justify-content-center'>
                        <div className='col-10 '>
                            <b className='font-20'>REPURPOSING OF CONTENT</b>
                            <ul className='pl-4 gap'>
                                <li>Technical/Version Upgrade</li>
                                <li>Interactivity Enhancement – Using of Graphics, Templates, Illustrations, 2D animations, Voiceover</li>
                                <li>SCORM compliance - Making content compliant with SCORM and accessibility guidelines</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='container'>
                    <div className='yellowless'>
                    <b  >Our technical experts are well-versed with appropriate languages and tools, and develop effective wbt/cbt's training programmes.</b><br /><br />
                    <div className=' row '>
                        <div className='col-lg-6 col-12 p-4'>

                            <div className='row  '>
                                <div className="lanbox">
                                    <div className="img-square-wrapper ">
                                        <b >TOOL</b>
                                    </div>
                                    <div className="card-body1">
                                        <p className='m-0'>ARTICULATE STORYLINE / ARTICULATE STUDIO / FLASH / LECTORA / CAPTIVATE / AUTHORWARE / BREEZ / EXPRESSION BLEND<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' col-lg-6  col-12 p-4'>
                            <div className='row  '>
                                <div className="lanbox">
                                    <div className='img-square-wrapper'>
                                        <b>LANGUAGES</b>
                                    </div>
                                    <div className="card-body1">
                                        <p className='m-0'>HTML5 / CSS3 / JQUERY / JAVASCRIPT / ACTIONSCRIPT 2.0 / XML / SILVERLIGHT 1.0 / JOOMLA / WORDPRESS / DRUPAL<br /></p>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    </div>
                </section>


            </div>
            <p className='text-center justify-content-center font-weight-bold'>
                At A3Pixels, our people are equipped and trained to develop and deliver world-class e-learning products time after time.<br /> Product development includes the following stages.</p>
            <div id='trans' className='row portfolio' >
                <ul className="d-flex justify-content-center portfolio-filter">
                    <li className='probutton1'>Project planning</li>
                    <li className='probutton1'>Conceptualizing <br /> Storyboarding</li>
                    <li className='probutton1 '>Executing<br /> Development of design and<br /> actual Learning Materials</li>
                    <li className='probutton1'>Fine tuning<br /> Material Revision</li>
                    <li className='probutton1'>Final Cut<br /> Course Delivery</li>
                </ul>
            </div>


            <div className='row desc pb-3'>
                <div className='lightyellcir col-11'>
                    <div className='yellowcir col-lg-3 col-4  text-center justify-content-center'>
                        <img src='\img\serlogo\Logo_01.png' className='img-fluid' alt='' />
                        <p class="text-uppercase"> PLANNING <br />THE PROJECT</p>
                    </div> <p className='col-9 p-4 my-auto'>
                        At this stage, the client's e-learning requirement is analysed and the project is broken down into key issues to be addressed at each stage of the project. The Project Plan also clearly outlines and identifies the scope of work, the people on the team and their individual responsibilities, the process break-down with estimated timelines, and a clear documented understanding of the final deliverable.

                        This is shared with the client to ensure the agency and the client have clearly understood the project and can jointly work towards a quality e-learning product in optimum timelines.</p>
                </div>
            </div>

            <div className='row desc justify-content-end pb-3'>
                <div className='lightyellcir1 col-11 justify-content-end'>
                    <p className='col-8 p-4 my-auto'>
                        Once the project plan is approved by the client, the team initiates the design work. Instructional designers and / or concept developers on the project develop a storyboard that outlines visuals, text and audio, video elements, interactions, navigation and content sequencing in the e-learning course. Storyboards serve as the course blueprint or design guide and give direction to the course development team.</p>
                    <div className='yellowcir1 col-lg-3 col-4  text-center justify-content-center'>
                        <img src='\img\serlogo\Logo_02.png' className='img-fluid' alt='' />
                        <p class="text-uppercase text-white">Creating the  <br />Storyboard</p>
                    </div>
                </div>
            </div>

            <div className='row desc pb-3'>
                <div className='lightyellcir col-11'>
                    <div className='yellowcir col-lg-3 col-4  text-center justify-content-center'>
                        <img src='\img\serlogo\Logo_03.png' className='img-fluid' alt='' />
                        <p class="text-uppercase">Producing the  <br />Learning Materials</p>
                    </div> <p className='col-8 p-4 my-auto'>
                        This is the actual production stage where course learning materials are created based on the storyboard developed during the design phase. At the end of this stage, course material is ready for pilot testing (see below Figure for the same).</p>
                </div>
            </div>

            <div className='row desc justify-content-end pb-3'>
                <div className='lightyellcir1 col-11 justify-content-end'>
                    <p className='col-8 p-4 my-auto'>
                        By conducting ongoing formative evaluation, we at A3pixels improve the e-learning product as it is being developed. While a Summative Evaluation is usually conducted to do the final assessment of the product, the project is constantly undergoing formative evaluation for improvement. The learners' feedback from the pilot testing rounds is seriously considered and analyzed to revise the course materials. This responsive evaluation and development process enables us to quickly revise the material and check effectiveness of the new material as well.</p>
                    <div className='yellowcir1 col-lg-3 col-4  text-center justify-content-center'>
                        <img src='\img\serlogo\Logo_04.png' className='img-fluid' alt='' />
                        <p class="text-uppercase text-white">Fine tuning and   <br />revising Course Material</p>
                    </div>
                </div>
            </div>

            <div className='row desc pb-3'>
                <div className='lightyellcir col-11'>
                    <div className='yellowcir col-lg-3 col-4  text-center justify-content-center'>
                        <img src='\img\serlogo\Logo_05.png' className='img-fluid' alt='' />
                        <p class="text-uppercase">Course Delivered</p>
                    </div> <p className='col-8 p-4 my-auto'>

                        All online course material is accessible by learners at any time, from anywhere in the world. The product of the implementation phase is a course delivered, with a set of well-maintained learning materials available for registration.</p>
                </div>
            </div>

            {/* =============Translation============== */}
            <Translation />

            {/* ==========WebMul======== */}
            <WebMul />
            {/* ===========clients=========== */}
            <Clients />
            {/* =============footer========== */}
            <Footer />
        </>
        )
    }
}
