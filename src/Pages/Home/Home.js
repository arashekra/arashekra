import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <>


        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div style={{ backgroundImage:" url('img/weeding.jpg')"}} id="swiper1" className="swiper-slide ak-slider">
                <div className="slide-title-inner-wrapper">

                    <div className="slide-title align-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-3 col-md-6 animation delay1 fadeInUp animated">

                                    <div id="save-the-date">
                                        <div id="save">Save</div>
                                        <div id="the-date">The Date</div>
                                        <div id="date">- 19<span className="pink-dot">.</span>12<span className="pink-dot">.</span>16 -</div>
                                    </div>

                                    <div className="banner-text light medium">
                                        <h4>*** WE ARE GETTING MARRIED ***</h4>
                                    </div>

                                    <div className="heart-divider" >
                                        <span className="white-line" ></span>
                                        <i className="de-icon-heart pink-heart"></i>
                                        <i className="de-icon-heart white-heart"></i>
                                        <span className="white-line"></span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                <div style={{ backgroundImage:" url('img/wedding-one.jpg')"}} id="swiper2" className="swiper-slide ak-slider">
                    Slide 2
                </div>
                <div style={{ backgroundImage:" url('img/wedding-two.jpg')"}} id="swiper3" className="swiper-slide ak-slider">
                    Slide 3
                </div>
            </div>

            <div className="swiper-pagination"></div>


            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
        </div>

        <Nav />

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-preview">
                    <a href="post.html">
                    <h2 className="post-title">
                        Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 className="post-subtitle">
                        Problems look mighty small from 150 miles up
                    </h3>
                    </a>
                    <p className="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on September 24, 2019</p>
                </div>
                <hr />
                <div className="post-preview">
                    <a href="post.html">
                    <h2 className="post-title">
                        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                    </h2>
                    </a>
                    <p className="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on September 18, 2019</p>
                </div>
                <hr />
                <div className="post-preview">
                    <a href="post.html">
                    <h2 className="post-title">
                        Science has not yet mastered prophecy
                    </h2>
                    <h3 className="post-subtitle">
                        We predict too much for the next year and yet far too little for the next ten.
                    </h3>
                    </a>
                    <p className="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on August 24, 2019</p>
                </div>
                <hr />
                <div className="post-preview">
                    <a href="post.html">
                    <h2 className="post-title">
                        Failure is not an option
                    </h2>
                    <h3 className="post-subtitle">
                        Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                    </h3>
                    </a>
                    <p className="post-meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on July 8, 2019</p>
                </div>
                <hr />

                <div className="clearfix">
                    <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
                </div>
            </div>
        </div>

        <hr />

        <Footer />
        </>
    );
};

export default Home;