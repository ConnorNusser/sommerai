
import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/globals.css'
import { useRouter } from "next/navigation"

function Landing() {
    const router = useRouter();
    const goToSommer = () => {
        window.location.href = '/sommer'
    }

    const goToWhitepaper = () => {
        router.push('https://versed-space-f6b.notion.site/Research-Proposal-for-Clinical-Trial-c075f1d147d14c74a9d7b5461bbd7318')
    }

    return (
        <>


            {/* font awesome */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
                crossOrigin="anonymous"
            />
            {/* bootstrap css link */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            {/* Back to top button */}
            {/* <a id="button" /> */}
            {/* navigation */}

            <main>
                {/* hero section */}
                <section id="hero-section">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5 d-flex align-items-center">
                            <div className="col">
                                <h2 className="hero-title ml3">
                                    Your Mental
                                    <br /> Health Companion
                                </h2>
                                <p className="hero-subtitle">
                                    Sommer's vision is to give everyone FDA-approved mental health
                                    support, without appointments, at the lowest cost possible, for
                                    any situation they face.
                                </p>
                                <div className="hero-btns d-flex align-items-center">
                                    <button onClick={goToWhitepaper} className="hero-btn-1">Whitepaper</button>
                                    <button onClick={goToSommer} className="hero-btn-2">Access Sommer</button>
                                    {/* <div className="hero-btn-3">
                                        <img src="./assets/play-icon.png" alt="play-btn" />
                                        <h3 className="watch-text">Watch Video</h3>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src="./assets/hero-image.png"
                                    alt="hero-img"
                                    className="hero-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* logo section */}
                {/* <section id="logo-section">
                    <div className="container">
                        <div className="row">
                            <h3 className="featured-title">We Are Featured on</h3>
                            <div className="m-scroll">
                                <div className="m-scroll__title">
                                    <div className="logo-container">
                                        <img
                                            src="./assets/logos/logo-1.png"
                                            alt=""
                                            className="logo-1"
                                        />
                                        <img
                                            src="./assets/logos/logo-2.png"
                                            alt=""
                                            className="logo-2"
                                        />
                                        <img
                                            src="./assets/logos/logo-3.png"
                                            alt=""
                                            className="logo-3"
                                        />
                                        <img
                                            src="./assets/logos/logo-4.png"
                                            alt=""
                                            className="logo-4"
                                        />
                                        <img
                                            src="./assets/logos/logo-5.png"
                                            alt=""
                                            className="logo-5"
                                        />
                                        <img
                                            src="./assets/logos/logo-1.png"
                                            alt=""
                                            className="logo-6"
                                        />
                                        <img
                                            src="./assets/logos/logo-2.png"
                                            alt=""
                                            className="logo-7"
                                        />
                                        <img
                                            src="./assets/logos/logo-3.png"
                                            alt=""
                                            className="logo-8"
                                        />
                                        <img
                                            src="./assets/logos/logo-4.png"
                                            alt=""
                                            className="logo-9"
                                        />
                                        <img
                                            src="./assets/logos/logo-5.png"
                                            alt=""
                                            className="logo-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* sommer section */}
                <section id="sommer-section">
                    <div className="container">
                        <div className="row">
                            <div className="sommer-contents text-center">
                                <h2 className="sommer-title">What is Sommer?</h2>
                                <p className="sommer-subtitle">
                                    Sommer is an artificial intelligence therapist.
                                </p>
                                {/* <div className="watch-video">
                                    <img
                                        src="./assets/watch.png"
                                        alt="watch-icon"
                                        className="watch-icon"
                                    />
                                    <h3 className="watch-video-text">Watch Video</h3>
                                </div> */}
                            </div>
                            <img
                                src="./assets/sommer-illustration.png"
                                alt="sommer-illustration"
                                className="sommer-img"
                            />
                        </div>
                    </div>
                </section>
                {/* why sommer */}
                <section id="why-sommer-section">
                    <div className="why-sommer-background">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5 d-flex align-items-center">
                                <div className="col">
                                    <h2 className="why-sommer-title">
                                        Why Sommer? <br />
                                        Why AI?
                                    </h2>
                                    <p className="why-sommer-subtitle">
                                        After speaking with multiple clinical psychologists, family
                                        members, and friends we have determined that with Sommer:
                                    </p>
                                    <div className="why-sommer-points">
                                        <div className="point-1 d-flex align-items-center">
                                            <img
                                                src="./assets/check-sign.png"
                                                alt="check-sign"
                                                className="check-icon"
                                            />
                                            <p className="point-1-text">
                                                No more expensive one-hour only appointments.
                                            </p>
                                        </div>
                                        <div className="point-2 d-flex align-items-center">
                                            <img
                                                src="./assets/check-sign.png"
                                                alt="check-sign"
                                                className="check-icon"
                                            />
                                            <p className="point-2-text">
                                                No more bouncing between hotlines, apps, and different
                                                providers.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <img
                                        src="./assets/mobile-mockup.png
                      "
                                        alt="mobile-mockup"
                                        className="why-sommer-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* how sommer section */}
                <section id="how-sommer-section">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5 d-flex align-items-center">
                            <div className="col">
                                <img
                                    src="./assets/medical-illustration.png"
                                    alt="medical-img"
                                    className="how-sommer-medical-img"
                                />
                            </div>
                            <div className="col">
                                <h2 className="how-sommer-title">How Sommer is better?</h2>
                                <p className="how-sommer-subtitle">
                                    Sommer learns from clinical psychologists. This allows her to have
                                    the same level of empathy and skills.
                                </p>
                                <div className="how-sommer-points">
                                    <div className="how-sommer-contents">
                                        <div className="left-content">
                                            <div className="content-1 d-flex align-items-center">
                                                <img src="./assets/check-sign.png" alt="" />
                                                <p>Constantly learning from therapists.</p>
                                            </div>
                                            <div className="content-2 d-flex align-items-center">
                                                <img src="./assets/check-sign.png" alt="" />
                                                <p>24/7 Availability and Affordable.</p>
                                            </div>

                                        </div>
                                        <div className="right-content">
                                            <div className="content-3 d-flex align-items-center">
                                                <img src="./assets/check-sign.png" alt="" />
                                                <p>Actively listens and asks questions.</p>
                                            </div>
                                            <div className="content-4 d-flex align-items-center">
                                                <img src="./assets/check-sign.png" alt="" />
                                                <p>Helps you build tools and skills for different situations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="that-sommer-title">That’s Sommer.</h2>
                                <p className="that-sommer-subtitle">
                                    The difference between Sommer and other mental health apps is that
                                    she will be the first Artificial Intelligence Therapist regulated
                                    by the Food and Drug Administration and licensed by the American
                                    Psychological Association.
                                </p>
                                <button onClick={goToWhitepaper} className="how-sommer-btn">Whitepaper</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* research study section */}
                <section id="research-study-section">
                    <div className="research-background">
                        <div className="container">
                            <div className="row research-texts">
                                <h2 className="research-study-title">Research Study</h2>
                                <p className="research-study-subtitle">
                                    Currently conducting a research study help Sommer learn.
                                </p>
                                <div className="my-table mb-10">
                                    <table className="table">
                                        <tbody className="table-body">
                                            <tr className="first-tr">
                                                <td>Other types of Professionals</td>
                                                <td>Prescribe and Monitor Medication</td>
                                                <td>Assessment and Therapy</td>
                                            </tr>
                                            <tr className="second-tr">
                                                <td>Psychologists</td>
                                                <td>Psychiatrists</td>
                                                <td>Certified Peer Specialists</td>
                                            </tr>
                                            <tr className="third-tr">
                                                <td>Counselors, Clinicians, and Therapists</td>
                                                <td>Psychiatric or Mental Health Nurse Practitioners</td>
                                                <td>Social Workers</td>
                                            </tr>
                                            <tr className="fourth-tr">
                                                <td>Clinical Social Workers</td>
                                                <td>Primary Care Physicians</td>
                                                <td>Pastoral Counselors</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-bottom-bg">
                                    <p className="table-bottom-text">
                                        We follow the standards,
                                        ethics, and regulations set by the Food and Drug Administration,
                                        American Psychological Association, and Declaration of Helsinki while being HIPAA
                                        Compliant, and supervised by an Institutional Review Board.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* cards section */}
                <section id="card-section">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5">

                            <div className="flex justify-center items-center">
                                <div className="card flex flex-col justify-center items-center ">
                                    <div className="flex flex-col justify-center items-center ml-20 mr-20 ">
                                        <img
                                            src="./assets/invest-icon.png"
                                            alt="invest-icon"
                                            className="object-scale-down h-30 w-30 object-center mt-20"
                                        />
                                        <h3 className="careers-title">Invest</h3>
                                        <p className="text-center careers-subtitle ">
                                            We prefer
                                            investors who have dealt with mental illness in the past that
                                            know what it would be like if they had something like this
                                            during their time of need or that have invested in other
                                            health care companies or digital mental health apps.If you are interested in investing in us, please
                                            contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rvelez@sommerai.com">rvelez@sommerai.com</a>
                                        </p>
                                        {/* <button onClick={() => emailButtonClick("invest")} className="invest-button mb-20">Learn More</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="card flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center items-center ml-20 mr-20">
                                        <img
                                            src="./assets/careers-icon.png"
                                            alt="carrers-icon"
                                            className="object-scale-down h-30 w-30 object-center mt-20"
                                        />
                                        <h3 className="careers-title">Careers</h3>
                                        <p className="text-center careers-subtitle ">
                                            We use Large Language Models and Reinforcement Learning with
                                            Human Feedback and a lot of data to train Sommer. We are
                                            constantly searching for PhD Computer Scientists and PhD
                                            Clinical Psychologists to join us in our
                                            quest for a healthier world. Please send us your resume and
                                            tell us why you’d like to join us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rvelez@sommerai.com">rvelez@sommerai.com</a>.
                                        </p>
                                        {/* <button className="careers-button mb-20">Learn More</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* get in touch section */}
                {/* <section id="get-in-touch-section">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5">
                            <div>
                                <h2 className="get-in-touch-title">Get in touch</h2>
                                <h3 className="other-way-text">
                                    Others ways to connect
                                    <div className="sales-enquiries-texts">
                                        <p className="sales-enquiries-title">Sales Enquiries:</p>
                                        <h3 className="sales-enquiries-subtitle">
                                            Sales@EdgePerformance.io
                                        </h3>
                                    </div>
                                    <div className="customer-support-texts">
                                        <p className="customer-support-title">Customer Support:</p>
                                        <h3 className="customer-support-subtitle">
                                            Support@EdgePerformance.io
                                        </h3>
                                    </div>
                                    <div className="address-texts">
                                        <p className="address-title">Address:</p>
                                        <h3 className="address">
                                            8 The Green, Suite B, Dover, DE 19901
                                        </h3>
                                    </div>
                                    <div className="social-icons">
                                        <h3 className="social-media-text">Social Media</h3>
                                        <div className="social-contents">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-facebook" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-instagram" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div>
                                <h2 className="get-in-touch-right-text">
                                    Please fill out the quick form and write your thoughts we’d love
                                    to hear from you.
                                </h2>
                                <form className="contact-form" action="#" method="POST">
                                    <div className="row gx-5">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className="form-group-1">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className="form-group">
                                                <textarea
                                                    cols={15}
                                                    rows={5}
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <input
                                                className="submit-btn form-btn"
                                                type="submit"
                                                defaultValue="Submit"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            {/* footer section */}
            <footer id="footer-section">
                <div className="footer-background">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 gx-5">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="footer-logo-image">
                                    <img
                                        src="./assets/logo.png"
                                        alt="footer-logo"
                                        className="footer-logo-img"
                                    />
                                </div>
                                <p className="footer-left-text">
                                    Sommer's vision is to give everyone FDA-approved mental health support, without appointments, at the lowest cost possible, for any situation they face.
                                </p>
                                <p className="footer-left-text">
                                    Based in Seattle, WA
                                </p>
                            </div>
                            {/* <div class="col-2">&nbsp;</div> */}
                            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="footer-right-content-1 mx-auto">
                                            <h3 className="footer-about-title">Navigation</h3>
                                            <h4 className="footer-about-subtitle">Organizations</h4>
                                            <h4 className="footer-about-subtitle">Features</h4>
                                            <h4 className="footer-about-subtitle">Team</h4>
                                            <h4 className="footer-about-subtitle">Blog</h4>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="footer-right-content-2">
                                            <h3 className="footer-plan-title">Info</h3>
                                            <h4 className="footer-plan-subtitle">About us</h4>
                                            <h4 className="footer-plan-subtitle">Why Us</h4>
                                            <h4 className="footer-plan-subtitle">Company</h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="footer-right-content-3">
                                            <h3 className="subscribe-title">
                                                Subscribe to Our Newsletter
                                            </h3>
                                            <form>
                                                <div className="input-container">
                                                    <input type="text" name="name" placeholder="Email" />
                                                    <button className="button input-btn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="row copy-right-top-border">
                            <div className="col-12 col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6">
                                <p className="copy-right-text">
                                    All right reserved 2023
                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="copy-right-side-texts">
                                    {/* <div className="terms-text">
                                        <h4 className="privacy-text">PRIVACY POLICY &amp; COOKIES</h4>
                                    </div>
                                    <span className="middle-line" />
                                    <div className="privacy-text">
                                        <h4 className="terms-text">TERMS &amp; CONDITIONS</h4>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* text animation cdn link */}
            {/*  */}
            {/* jQuery CDN link */}
            {/* bootstrap js link */}
            {/* my script */}
        </>

    )
}

export default Landing


