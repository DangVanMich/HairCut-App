import Link from 'next/link';
import { Container } from 'react-bootstrap';

const Content = () => (
  <div className="no-bottom no-top" id="content">
    <section id="de-carousel" className="no-top no-bottom carousel slide text-light carousel-fade" data-mdb-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active jarallax" data-video-src="mp4:video/local-video-1.mp4">
          <div className="mask">
            <div className="d-content relative z1000">
              <div className="wm wm-carousel">
                <div className="wow fadeInRight">haircut <span className="s1">shave</span> facial <span className="s1">massage</span></div>
              </div>                  
              <div className="v-center">
                <Container className="z1000">
                  <div className="row align-items-center text-center"> 
                    <div className="spacer-double"></div>
                    <div className="spacer-double"></div>
                    <div className="col-lg-12">
                      <h1>The Gentlemen's Choise</h1>                                                
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                      <p className="lead">Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home.</p>
                      <Link href="/services">
                        <a className="btn-main">Our Services</a>
                      </Link>
                    </div>
                  </div>                                        
                </Container>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </div>
        {/* Add more carousel items here if needed */}
      </div>
    </section>

    <section aria-label="section" className="no-top no-bottom">
      <Container>
        <div className="row">
          <div className="col-lg-12" data-jarallax-element="-50">
            <p className="lead big wow fadeInUp">Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home. From the moment you walk through our doors, you'll be greeted by friendly smiles and a warm ambiance that instantly puts you at ease.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <section id="section-testimonial" className="pt80">
      <Container fluid>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="wow fadeIn">Gallery</h2>
            <div className="de-separator"></div>
            <div className="spacer-single"></div>
          </div>
        </div>
        <div id="gallery" className="row g-3">
          {/* Gallery items */}
          <div className="col-md-4 item">
            <div className="de-image-hover rounded">
              <a href="images/gallery/gallery-item-1.jpg" className="image-popup">
                <span className="dih-title-wrap">
                  <span className="dih-title">Gallery Title</span>
                </span>
                <span className="dih-overlay"></span>
                <img src="images/gallery/gallery-item-1.jpg" className="lazy img-fluid" alt="" />
              </a>
            </div>
          </div>
          {/* Add more gallery items here */}
        </div>
      </Container>
    </section>

    <section className="no-top jarallax">
      <div className="de-gradient-edge-top"></div>
      <img src="images/background/1.jpg" className="jarallax-img" alt="" />
      <Container className="relative z1000">
        <div className="row align-items-center">
          <div className="col-lg-6" data-jarallax-element="-30">
            <img src="images/misc/man-2.png" className="img-fluid wow fadeInRight" alt="" />
          </div>
          <div className="col-lg-6" data-jarallax-element="-60">
            <h2 className="wow fadeInRight" data-wow-delay=".3s">We’ll  Crafting <span className="id-color">Confidence</span> Through Sharp Style</h2>
            <p className="wow fadeInRight" data-wow-delay=".4s">We take pride in providing top-notch grooming services that blend classic techniques with modern trends. Step into our warm and inviting space, where you'll find a team of skilled barbers dedicated to enhancing your style and confidence.</p>
            <Link href="/book">
              <a className="btn-main wow fadeInRight" data-wow-delay=".5s">Book Now</a>
            </Link>
          </div>
        </div>
      </Container>
      <div className="de-gradient-edge-bottom"></div>
    </section>

    <section aria-label="section" className="no-top">
      <Container>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="wow fadeIn">Our Services</h2>
            <div className="de-separator"></div>
          </div>
          <div className="col-lg-3 text-center" data-jarallax-element="-20">
            <div className="de-box-a">
              <div className="d-image">
                <img src="images/services/1.jpg" alt="" />
              </div>
              <div className="d-deco-1"></div>
              <div className="d-deco-2"></div>
            </div>
            <div className="spacer-20"></div>
            <h4>Haircuts</h4>
          </div>
          {/* Add more service items here */}
        </div>
        <div className="spacer-single"></div>
        <div className="text-center">
          <Link href="/services">
            <a className="btn-main">All Services &amp; Prices</a>
          </Link>
        </div>
      </Container>
    </section>

    <section className="jarallax no-top">
      <div className="de-gradient-edge-top"></div>
      <img src="images/background/1.jpg" className="jarallax-img" alt="" />
      <Container className="relative z1000">
        <div className="row gx-5">
          <div className="col-lg-6 text-center" data-jarallax-element="-50">
            <div className="d-sch-table">
              <h2 className="wow fadeIn">We're Open</h2>
              <div className="de-separator"></div>
              <div className="d-col">
                <div className="d-title">Mon - Thu</div>
                <div className="d-content id-color">7:30AM - 6:30PM</div>
              </div>
              <div className="d-col">
                <div className="d-title">Friday</div>
                <div className="d-content id-color">8:30AM - 8:30PM</div>
              </div>
              <div className="d-col">
                <div className="d-title">Sat - Sun</div>
                <div className="d-content id-color">9:30AM - 5:30PM</div>
              </div>
              <div className="d-deco"></div>
            </div>
          </div>
          <div className="col-lg-6 text-center" data-jarallax-element="-100">
            <div className="d-sch-table">
              <h2 className="wow fadeIn">Location</h2>
              <div className="de-separator"></div>
              <div className="d-col">
                <div className="d-title">Address</div>
                <div className="d-content id-color">100 Mainstreet Center, NY</div>
              </div>
              <div className="d-col">
                <div className="d-title">Phone</div>
                <div className="d-content id-color">+1 333 8080 1000</div>
              </div>
              <div className="d-col">
                <div className="d-title">Email</div>
                <div className="d-content id-color">contact@blaxcut.com</div>
              </div>
              <div className="d-deco"></div>
            </div>
          </div>
        </div>
      </Container>
      <div className="de-gradient-edge-bottom"></div>
    </section>

    <section aria-label="section" className="no-top">
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <div className="d-item">
            <span className="d-item-txt">Haircut</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Shave</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Faded</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Beards</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Moustache</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Facial</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Massages</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Content;
