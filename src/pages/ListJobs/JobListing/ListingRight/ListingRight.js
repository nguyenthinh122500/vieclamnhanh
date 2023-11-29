import React from 'react'

export default function ListingRight() {
  return (
    <div className="col-lg-9 order-1 order-lg-2 mt-6">
    <div className="ps-lg-1-6 ps-xl-1-9">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-md-flex justify-content-between align-items-center mb-2-2">
            <div className="mb-4 mb-md-0">
              <h4 className="mb-0 h5">
                Showing 1–10 of{" "}
                <span className="text-primary">28 Jobs</span>
              </h4>
            </div>
            <form
              action="job-listing-2-left-sidebar.html#!"
              method="post"
              encType="multipart/form-data"
              onclick
            >
              <div className="quform-elements">
                <div className="row align-items-center">
                  {/* Begin Select element */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="quform-element">
                      <div className="quform-input">
                        <select
                          id="sortby"
                          className="form-control form-select border-radius-10"
                          name="sortby"
                        >
                          <option value>Sort By</option>
                          <option value="New Jobs">New Jobs</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Internship">
                            Internship
                          </option>
                          <option value="Part Time">Part Time</option>
                          <option value="Temporary">Temporary</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Select element */}
                  {/* Begin Select element */}
                  <div className="col-md-6">
                    <div className="quform-element">
                      <div className="quform-input">
                        <select
                          id="show"
                          className="form-control form-select border-radius-10"
                          name="show"
                        >
                          <option value>Show</option>
                          <option value="Show 10">Show 10</option>
                          <option value="Show 20">Show 20</option>
                          <option value="Show 30">Show 30</option>
                          <option value="Show 40">Show 40</option>
                          <option value="Show 50">Show 50</option>
                          <option value="Show 60">Show 60</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Select element */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-n1-9 recent-job-style2">
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-01.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Assistant Manager</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    Finance Agency
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Canada
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    08 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $25K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-02.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Sr. Project Manager</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    Factory &amp; Industry
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    California
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    12 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $15K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-03.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">UI / UX Designer</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    IT
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    New York
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    14 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $18K
                  </span>
                  <span className="company-info radius-10">
                    Part Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-04.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Software Engineer</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    Construction
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    London
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    18 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $20K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-05.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Content Writing</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    IT
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Uk
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    20 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $40K
                  </span>
                  <span className="company-info radius-10">
                    Part Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-06.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">.Net Developer</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    IT
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Japan
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    23 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $90K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-07.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Digital Marketing</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    Construction
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Afghanistan
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    24 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $35K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-08.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">
                      Education &amp; Training
                    </a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    IT
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    South Korea
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    25 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $30K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-09.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">Finance Manager</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    Finance Agency
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Canada
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    28 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $40K
                  </span>
                  <span className="company-info radius-10">
                    Full Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-1-9">
          <div className="p-1-6 border border-color-extra-light-gray bg-white border-radius-10">
            <div className="d-lg-flex justify-content-between align-items-center text-center text-lg-start">
              <div className="d-lg-flex align-items-center mb-4 mb-lg-0">
                <div className="flex-shrink-0">
                  <div className="job-company-logo radius-10">
                    <img
                      src="img/content/job-10.jpg"
                      alt="..."
                      className="border-radius-10"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-lg-4">
                  <h4 className="h5">
                    <a href="job-details.html">PHP Developer</a>
                  </h4>
                  <span className="me-2">
                    <i className="ti-briefcase pe-2 text-secondary" />
                    IT
                  </span>
                  <span className="me-2">
                    <i className="ti-location-pin pe-2 text-secondary" />
                    Uk
                  </span>
                  <span className="me-2">
                    <i className="ti-time pe-2 text-secondary" />
                    29 Hour Ago
                  </span>
                  <span className="me-2">
                    <i className="far fa-money-bill-alt pe-2 text-secondary" />
                    $35K
                  </span>
                  <span className="company-info radius-10">
                    Part Time
                  </span>
                </div>
              </div>
              <a href="job-details.html" className="butn butn-md">
                Apply Job
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {/* start pager  */}
          <div className="text-center mt-6">
            <div className="pagination text-primary">
              <ul>
                <li>
                  <a href="job-listing-2-left-sidebar.html#!">
                    <i className="fas fa-long-arrow-alt-left me-2" />{" "}
                    Prev
                  </a>
                </li>
                <li className="active">
                  <a href="job-listing-2-left-sidebar.html#!">1</a>
                </li>
                <li>
                  <a href="job-listing-2-left-sidebar.html#!">2</a>
                </li>
                <li>
                  <a href="job-listing-2-left-sidebar.html#!">3</a>
                </li>
                <li>
                  <a href="job-listing-2-left-sidebar.html#!">
                    Next
                    <i className="fas fa-long-arrow-alt-right ms-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end pager */}
        </div>
      </div>
    </div>
  </div>
  )
}
