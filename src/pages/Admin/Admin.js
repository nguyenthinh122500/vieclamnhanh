import React from "react";

export default function Admin() {
  return (
    <div className="col-lg-9">
      <div className="dashboard-right-sidebar">
        <div className="row mb-2-2">
          <div className="col-lg-12 mb-1-9">
            <h3 className="mb-3">Employer Dashboard</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://jobboard.websitelayout.net/demo-1.html">
                    Job Board
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-6 col-lg-3 mb-1-9 mb-lg-0">
            <div className="card card-style1">
              <div className="card-body p-1-6">
                <div className="categorie-icon light-blue">
                  <i className="ti-briefcase blue" />
                </div>
                <h3 className="h2 mb-1">300</h3>
                <span className="mb-0 display-30">Posted Jobs</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-1-9 mb-lg-0">
            <div className="card card-style1">
              <div className="card-body p-1-6">
                <div className="categorie-icon red">
                  <i className="ti-user" />
                </div>
                <h3 className="h2 mb-1">10382</h3>
                <span className="mb-0 display-30">Total Visitors</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-1-9 mb-sm-0">
            <div className="card card-style1">
              <div className="card-body p-1-6">
                <div className="categorie-icon yellow">
                  <i className="ti-comment-alt" />
                </div>
                <h3 className="h2 mb-1">85</h3>
                <span className="mb-0 display-30">Reviews</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-style1">
              <div className="card-body p-1-6">
                <div className="categorie-icon green">
                  <i className="ti-bookmark" />
                </div>
                <h3 className="h2 mb-1">50</h3>
                <span className="mb-0 display-30">Shortlist</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2-2">
          <div className="col-xl-7 mb-2-2 mb-xl-0">
            <div className="dashboard-title">
              <h5 className="mb-0">Your Profile Views</h5>
            </div>
            <div className="dashboard-widget"></div>
          </div>
          <div className="col-xl-5">
            <div className="dashboard-title">
              <h5 className="mb-0">Notifications</h5>
            </div>
            <div className="dashboard-widget">
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="notification-icon blue">
                    <i className="ti-briefcase" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Gruffo Chubb applied for a job{" "}
                    <span className="blue">Software Engineer</span>
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="notification-icon green">
                    <i className="ti-layers" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Maren Larsen applied for a job{" "}
                    <span className="green">Android Developer</span>
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="notification-icon green">
                    <i className="ti-heart" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Phillipa Aucoin applied for a job{" "}
                    <span className="green">Web designer</span>
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="notification-icon blue">
                    <i className="ti-star" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="mb-0">
                    Kadyn Simpson applied for a job{" "}
                    <span className="blue">Technical Architect</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2-2">
          <div className="col-lg-12">
            <div className="dashboard-title">
              <h5 className="mb-0">Recent Applicants</h5>
            </div>
            <div className="dashboard-widget">
              <div className="row mt-n1-9">
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-01.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">Olle Nurmi</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                Sr. Java Developer
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                UK
                              </span>
                            </div>
                            <div>
                              <span className="company-info">App</span>
                              <span className="company-info">Development</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-02.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">Selma Kolkkala</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                UI/UX Specialist
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                Australia
                              </span>
                            </div>
                            <div>
                              <span className="company-info">App</span>
                              <span className="company-info">Design</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-03.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">Rens Westen</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                Research Assistant
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                USA
                              </span>
                            </div>
                            <div>
                              <span className="company-info">Research</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-04.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">France Maheu</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                Digital Marketer
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                UK
                              </span>
                            </div>
                            <div>
                              <span className="company-info">Marketing</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-05.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">Richard Bureau</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                Charted Accountant
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                Canada
                              </span>
                            </div>
                            <div>
                              <span className="company-info">App</span>
                              <span className="company-info">Research</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 mt-1-9">
                  <div className="card-style2">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                          <div className="flex-shrink-0 mb-3 mb-sm-0">
                            <img
                              src="img/candidate/candidate-06.jpg"
                              alt="..."
                              className="border-radius-50"
                            />
                          </div>
                          <div className="flex-grow-1 ms-sm-3">
                            <h5>
                              <a href="employer-details.html">Uta Fuerst</a>
                            </h5>
                            <div className="mb-3">
                              <span className="text-secondary me-2 display-30">
                                Marketing Advisor
                              </span>
                              <span className="vertical-align-middle display-30">
                                <i className="ti-location-pin pe-2 text-secondary" />
                                London
                              </span>
                            </div>
                            <div>
                              <span className="company-info">App</span>
                              <span className="company-info">Marketing</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-style">
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-eye" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-close" />
                            </a>
                          </li>
                          <li>
                            <a href="employer-dashboard.html#!">
                              <span className="ti-trash" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="d-inline-block mb-0">
              © <span className="current-year" /> Job Board Powered by
              <a
                href="https://www.chitrakootweb.com/"
                target="_blank"
                className="text-primary secondary-hover"
              >
                Chitrakoot Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
