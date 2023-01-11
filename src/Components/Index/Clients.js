import React, { Component } from 'react';
import c_json from "./Clients.json"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  loop: 'true',
  center: 'true',
  margin: 30,
  items:7,
  autoplay: 'true',
  dots: 'true',
  autoplayTimeout: 1000,
  smartSpeed: 450,
  responsive: {
    
    800: {
      items: 7
    },
    300:{
      items: 3
    }

  }
};

class Clients extends Component {

  DisplayData = c_json.map(
    (info) => {
      return (
        <img className="img-scroll img-fluid" src={info.path} alt="" />
      )
    }
  )

  render() {
    return (
      <>
      <section id="clients" className="clients">
                <div className="container" data-aos="zoom-out">
                    <div className="section-title mb-0" data-aos="zoom-out">
                        <p>Our Clients</p>
                        {/* <h2>Who are our clients</h2> */}
                    </div>
          {/* <!-- ======= Clients Section ======= --> */}
          <OwlCarousel {...options} id="customers-carousel" class="owl-carousel container">
            {this.DisplayData.slice(1,10)}
          </OwlCarousel>
          <OwlCarousel {...options} id="customers-carousel" class="owl-carousel container">
            {this.DisplayData.slice(10,20)}
          </OwlCarousel>
        </div>
        </section>
      </>
    );
  }
}

export default Clients;