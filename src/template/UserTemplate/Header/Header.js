import React from 'react'

export default function Header() {
  return (
    <header className="header-style1 menu_area-light" style={{background:'#26ae61'}}>
    <div className="navbar-default border-bottom border-color-light-white">
      {/* start top search */}
      <div className="top-search bg-secondary">
        <div className="container-fluid px-sm-1-6 px-lg-2-9">
          <form
            className="search-form"
            action="https://jobboard.websitelayout.net/search.html"
            method="GET"
            acceptCharset="utf-8"
          >
            <div className="input-group">
              <span className="input-group-addon cursor-pointer">
                <button
                  className="search-form_submit fas fa-search text-white"
                  type="submit"
                />
              </span>
              <input
                type="text"
                className="search-form_input form-control"
                name="s"
                autoComplete="off"
                placeholder="Type & hit enter..."
              />
              <span className="input-group-addon close-search mt-1">
                <i className="fas fa-times" />
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* end top search */}
      <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="menu_area alt-font">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="navbar-header navbar-header-custom">
                  {/* start logo */}
                  <a href="index.html" className="navbar-brand">
                    <img
                      id="logo"
                      src="img/logos/logo-white.png"
                      alt="logo"
                    />
                  </a>
                  {/* end logo */}
                </div>
                <div className="navbar-toggler bg-secondary" />
                {/* menu area */}
                <ul
                  className="navbar-nav ms-auto"
                  id="nav"
                  style={{ display: "none" }}
                >
                  <li>
                    <a href="index-03.html#!">Home</a>
                    <ul className="row gx-1 megamenu">
                      <li className="col-lg-2">
                        <a
                          href="index-01.html"
                          className="d-none d-lg-block"
                        >
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Home 01
                          </span>
                          <img
                            src="img/content/home-01.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                        <a
                          href="index-01.html"
                          className="d-lg-none d-block"
                        >
                          Home 01
                        </a>
                      </li>
                      <li className="col-lg-2">
                        <a
                          href="index-02.html"
                          className="d-none d-lg-block"
                        >
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Home 02
                          </span>
                          <img
                            src="img/content/home-02.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                        <a
                          href="index-02.html"
                          className="d-lg-none d-block"
                        >
                          Home 02
                        </a>
                      </li>
                      <li className="col-lg-2">
                        <a
                          href="index-03.html"
                          className="d-none d-lg-block"
                        >
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Home 03
                          </span>
                          <img
                            src="img/content/home-03.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                        <a
                          href="index-03.html"
                          className="d-lg-none d-block"
                        >
                          Home 03
                        </a>
                      </li>
                      <li className="col-lg-2">
                        <a
                          href="index-04.html"
                          className="d-none d-lg-block"
                        >
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Home 04
                          </span>
                          <img
                            src="img/content/home-04.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                        <a
                          href="index-04.html"
                          className="d-lg-none d-block"
                        >
                          Home 04
                        </a>
                      </li>
                      <li className="col-lg-2">
                        <a
                          href="index-05.html"
                          className="d-none d-lg-block"
                        >
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Home 05
                          </span>
                          <img
                            src="img/content/home-05.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                        <a
                          href="index-05.html"
                          className="d-lg-none d-block"
                        >
                          Home 05
                        </a>
                      </li>
                      <li className="col-lg-2 d-none d-lg-block">
                        <a href="index-03.html#!">
                          <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                            Commingsoon
                          </span>
                          <img
                            src="img/content/comingsoon.jpg"
                            className="d-none d-lg-block shadow"
                            alt="..."
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-03.html#!">Pages</a>
                    <ul>
                      <li>
                        <a href="aboutus.html">About Us</a>
                      </li>
                      <li>
                        <a href="how-it-works.html">How It Works</a>
                      </li>
                      <li>
                        <a href="testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="pricing-plans.html">Pricing Plans</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="index-03.html#!">User Pages</a>
                        <ul>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="registration.html">Register</a>
                          </li>
                          <li>
                            <a href="forgot-password.html">
                              Forgot Password
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-03.html#!">Others</a>
                        <ul>
                          <li>
                            <a href="privacy-policy.html">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="terms-and-conditions.html">
                              Terms &amp; Conditions
                            </a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="404-page.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a href="index-03.html#!">Job Listing</a>
                    <ul className="row megamenu">
                      <li className="col-lg-4 col-xl-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700">
                          Job Listing
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="job-listing.html">
                              Job Listing 1 - Without Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-left-sidebar.html">
                              Job Listing 1 - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-right-sidebar.html">
                              Job Listing 1 - Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-2.html">
                              Job Listing 2 - Without Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-2-left-sidebar.html">
                              Job Listing 2 - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-listing-2-right-sidebar.html">
                              Job Listing 2 - Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-4 col-xl-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700">
                          Job Grid
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="job-grid.html">
                              Job Grid 1 - Without Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-grid-left-sidebar.html">
                              Job Grid 1 - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-grid-right-sidebar.html">
                              Job Grid 1 - Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-grid-2.html">
                              Job Grid 2 - Without Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-grid-2-left-sidebar.html">
                              Job Grid 2 - Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="job-grid-2-right-sidebar.html">
                              Job Grid 2 - Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-4 col-xl-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700">
                          Job Details
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="job-details.html">Job Details 1</a>
                          </li>
                          <li>
                            <a href="job-details-2.html">Job Details 2</a>
                          </li>
                          <li>
                            <a href="job-details-3.html">Job Details 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3 d-none d-xl-block">
                        <div className="menu-slider owl-carousel owl-theme">
                          <img
                            src="img/content/menu-slider1.jpg"
                            alt="..."
                          />
                          <img
                            src="img/content/menu-slider2.jpg"
                            alt="..."
                          />
                          <img
                            src="img/content/menu-slider3.jpg"
                            alt="..."
                          />
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-03.html#!">Explore</a>
                    <ul>
                      <li>
                        <a href="index-03.html#!">Candidates</a>
                        <ul>
                          <li>
                            <a href="candidate-grid.html">
                              Candidate Grid
                            </a>
                          </li>
                          <li>
                            <a href="candidate-list.html">
                              Candidate List
                            </a>
                          </li>
                          <li>
                            <a href="candidate-details.html">
                              Candidate Details
                            </a>
                          </li>
                          <li>
                            <a href="candidate-dashboard.html">
                              Candidate Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-03.html#!">Employers</a>
                        <ul>
                          <li>
                            <a href="employers-grid.html">
                              Employer Grid
                            </a>
                          </li>
                          <li>
                            <a href="employers-list.html">
                              Employer List
                            </a>
                          </li>
                          <li>
                            <a href="employer-details.html">
                              Employer Details
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html">
                              Employer Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-03.html#!">Elements</a>
                    <ul className="row megamenu">
                      <li className="col-lg-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                          Elements 01
                        </span>
                        <ul>
                          <li>
                            <a href="accordions.html">
                              <i className="fas fa-sliders-h me-2" />
                              Accordions
                            </a>
                          </li>
                          <li>
                            <a href="alerts.html">
                              <i className="far fa-bell me-2" />
                              Alerts
                            </a>
                          </li>
                          <li>
                            <a href="blockquote.html">
                              <i className="fas fa-vector-square me-2" />
                              Blockquote
                            </a>
                          </li>
                          <li>
                            <a href="buttons.html">
                              <i className="fas fa-link me-2" />
                              Buttons
                            </a>
                          </li>
                          <li>
                            <a href="call-to-action.html">
                              <i className="far fa-square me-2" />
                              Call to Action
                            </a>
                          </li>
                          <li>
                            <a href="carousel-slider.html">
                              <i className="far fa-images me-2" />
                              Carousel Slider
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                          Elements 02
                        </span>
                        <ul>
                          <li>
                            <a href="count-down.html">
                              <i className="far fa-flag me-2" />
                              Count Down
                            </a>
                          </li>
                          <li>
                            <a href="counters.html">
                              <i className="fa-solid fa-bolt me-2" />
                              Counters
                            </a>
                          </li>
                          <li>
                            <a href="dropcaps.html">
                              <i className="far fa-closed-captioning me-2" />
                              Dropcaps
                            </a>
                          </li>
                          <li>
                            <a href="form-elements.html">
                              <i className="fas fa-cubes me-2" />
                              Form Elements
                            </a>
                          </li>
                          <li>
                            <a href="font-icons.html">
                              <i className="far fa-check-square me-2" />
                              Font Icons
                            </a>
                          </li>
                          <li>
                            <a href="highlights.html">
                              <i className="fas fa-highlighter me-2" />
                              Highlights
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                          Elements 03
                        </span>
                        <ul>
                          <li>
                            <a href="header-style-01.html">
                              <i className="fas fa-compress me-2" />
                              Header Style 01
                            </a>
                          </li>
                          <li>
                            <a href="header-style-02.html">
                              <i className="fas fa-compress-arrows-alt me-2" />
                              Header Style 02
                            </a>
                          </li>
                          <li>
                            <a href="icon-with-text.html">
                              <i className="fab fa-fonticons-fi me-2" />
                              Icon With Text
                            </a>
                          </li>
                          <li>
                            <a href="list-styles.html">
                              <i className="fas fa-list-ul me-2" />
                              List Styles
                            </a>
                          </li>
                          <li>
                            <a href="media-object.html">
                              <i className="fas fa-photo-video me-2" />
                              Media Object
                            </a>
                          </li>
                          <li>
                            <a href="modal.html">
                              <i className="fas fa-expand me-2" />
                              Modal
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3">
                        <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800 display-30">
                          Elements 04
                        </span>
                        <ul>
                          <li>
                            <a href="pagination.html">
                              <i className="far fa-caret-square-right me-2" />
                              Pagination
                            </a>
                          </li>
                          <li>
                            <a href="progress-bars.html">
                              <i className="fas fa-tasks me-2" />
                              Progress Bars
                            </a>
                          </li>
                          <li>
                            <a href="tables.html">
                              <i className="fas fa-table me-2" />
                              Tables
                            </a>
                          </li>
                          <li>
                            <a href="tabs.html">
                              <i className="fa-solid fa-clone me-2" />
                              Tabs
                            </a>
                          </li>
                          <li>
                            <a href="typography.html">
                              <i className="fas fa-text-height me-2" />
                              Typography
                            </a>
                          </li>
                          <li>
                            <a href="videos.html">
                              <i className="fas fa-video me-2" />
                              Videos
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-03.html#!">Blog</a>
                    <ul>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* end menu area */}
                {/* start attribute navigation */}
                <div className="attr-nav align-items-lg-center ms-lg-auto">
                  <ul>
                    <li className="search">
                      <a href="index-03.html#!">
                        <i className="fas fa-search" />
                      </a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <a
                        href="employer-post-job.html"
                        className="butn secondary white-hover text-white"
                      >
                        Post a Job
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end attribute navigation */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
