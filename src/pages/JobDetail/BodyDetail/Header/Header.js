import React from 'react'

export default function Header() {
  return (
    <div className="row mb-2-5 mb-lg-2-9">
            <div className="col-lg-12">
              <div className="p-1-6 p-md-1-9 border border-color-extra-light-gray border-radius-10">
                <div className="row align-items-center">
                  <div className="col-lg-9 mb-4 mb-lg-0">
                    <div className="d-lg-flex align-items-center text-center text-lg-start">
                      <div className="flex-shrink-0 mb-4 mb-lg-0">
                        <img
                          src="img/content/job-detail-01.jpg"
                          alt="..."
                          className="border-radius-10"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <div className="display-30 text-warning mb-3">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                            5.0
                          </span>
                        </div>
                        <h4 className="mb-3">
                          Assistant Manager
                          <span className="job-detail-info">
                            <i className="ti-briefcase text-primary pe-2" />
                            Full Time
                          </span>
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
                          <i className="ti-time pe-2 text-secondary" />5 Year
                        </span>
                        <span>
                          <i className="far fa-money-bill-alt pe-2 text-secondary" />
                          $25K
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      <div className="text-center mb-3">
                        Application Ends: <strong>Nov 28, 2021</strong>
                      </div>
                      <div className="col-12">
                        <a
                          href="job-details-2.html#!"
                          className="butn mb-3 w-100 text-center"
                        >
                          Apply For Job
                        </a>
                      </div>
                      <div className="col-12">
                        <a
                          href="job-details-2.html#!"
                          className="butn w-100 text-center"
                        >
                          Shortlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
