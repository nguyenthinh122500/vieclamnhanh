import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="pb-2-5 mb-8 border-bottom border-color-light-white">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="mb-4 mb-xl-0">
                <h3 className="text-white">Subscribe to our Newsletter!</h3>
                <p className="text-white mb-0 opacity9">
                  Sign up for our newsletter and study us on social media.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <form
                className="quform newsletter-style-02 w-sm-90 w-sm-100"
                action="https://jobboard.websitelayout.net/quform/newsletter-two.php"
                method="post"
                encType="multipart/form-data"
                onclick
              >
                <div className="quform-elements">
                  <div className="row">
                    {/* Begin Text input element */}
                    <div className="col-md-8 mb-3 mb-md-0">
                      <div className="quform-element mb-md-0">
                        <div className="quform-input">
                          <input
                            className="form-control border-radius-5 text-center"
                            id="email_address"
                            type="text"
                            name="email_address"
                            placeholder="Subscribe with us"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Submit button */}
                    <div className="col-md-4">
                      <div className="quform-submit-inner">
                        <button
                          className="butn w-100 d-sm-block d-lg-inline-block radius"
                          type="submit"
                        >
                          <span>Subscribe</span>
                        </button>
                      </div>
                      <div className="quform-loading-wrap text-start">
                        <span className="quform-loading" />
                      </div>
                    </div>
                    {/* End Submit button */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mb-6 mt-n2-6">
          <div className="col-sm-6 col-lg-4 col-xxl-3 mt-2-6">
            <a href="index-03.html#!">
              <img
                src="img/logos/logo-white.png"
                className="w-70 mb-1-6"
                alt="..."
              />
            </a>
            <p className="mb-1-6 text-white opacity9">
              Advertise your jobs to hundreds of thousands of monthly customers
              and seek 15.8 million CV in our database.
            </p>
            <ul className="contact-list">
              <li className="text-white d-flex">
                <span className="fas fa-map-marker-alt pe-3 text-white" />
                66 Guild Street 512B, Great North Town.
              </li>
              <li>
                <span className="fa fa-phone-alt pe-3 text-white" />
                <a href="index-03.html#!">(+44) 123 456 789</a>
              </li>
              <li>
                <span className="fa fa-envelope pe-3 text-white" />
                <a href="index-03.html#!">info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-2 mt-2-6">
            <div className="ps-sm-2-9">
              <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Information</h3>
              <ul className="footer-list-style3">
                <li>
                  <a href="aboutus.html">About us</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog</a>
                </li>
                <li>
                  <a href="how-it-works.html">Our Process</a>
                </li>
                <li>
                  <a href="pricing-plans.html">Our Pricing</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-2 mt-2-6">
            <div className="ps-lg-2-9">
              <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Candidates</h3>
              <ul className="footer-list-style3">
                <li>
                  <a href="candidate-applied-job.html">Applied Job</a>
                </li>
                <li>
                  <a href="candidate-cv-manager.html">CV Manager</a>
                </li>
                <li>
                  <a href="candidate-shortlisted-jobs.html">Shortlisted Jobs</a>
                </li>
                <li>
                  <a href="candidate-job-alerts.html">Job Alerts</a>
                </li>
                <li>
                  <a href="candidate-dashboard.html">Dashboard</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-2 mt-2-6">
            <div className="ps-sm-2-9 ps-lg-0 ps-xxl-2-9">
              <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Employers</h3>
              <ul className="footer-list-style3">
                <li>
                  <a href="employer-packages.html">Job Packages</a>
                </li>
                <li>
                  <a href="employer-company-profile.html">Company Profile</a>
                </li>
                <li>
                  <a href="employer-manage-job.html">Manage Job</a>
                </li>
                <li>
                  <a href="employer-resume-alerts.html">Resume Alerts</a>
                </li>
                <li>
                  <a href="employer-post-job.html">Post a Job</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-5 col-xxl-3 mt-2-6">
            <div className="ps-lg-2-9">
              <h3 className="h5 mb-1-6 mb-lg-1-9 text-white">Mobile Apps</h3>
              <p className="text-white mb-4">
                Click and Get started in seconds
              </p>
              <div className="row">
                <div className="col-10">
                  <a href="index-03.html#" className="app-btn">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 mt-2">
                        <i className="fab fa-apple fs-3 text-white" />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <p className="mb-1 display-30 text-white">
                          Download On
                        </p>
                        <h6 className="mb-0 text-white">Apple Store</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-10">
                  <a href="index-03.html#" className="app-btn mb-0">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 mt-2">
                        <i className="fab fa-google-play fs-3 text-white" />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <p className="mb-1 display-30 text-white">Get In On</p>
                        <h6 className="mb-0 text-white">Google Play</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar borders-top border-color-light-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 text-center text-md-start mt-3 mt-md-0 order-2 order-md-1">
                <p className="d-inline-block text-white mb-0">
                  © <span className="current-year" /> Job Board Powered by
                  <a
                    href="https://www.chitrakootweb.com/"
                    target="_blank"
                    className="text-primary white-hover"
                  >
                    Chitrakoot Web
                  </a>
                </p>
              </div>
              <div className="col-md-5 text-center text-md-end order-1 order-md-2">
                <ul className="footer-social-style2">
                  <li>
                    <a href="index-03.html#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="index-03.html#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="index-03.html#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="index-03.html#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
