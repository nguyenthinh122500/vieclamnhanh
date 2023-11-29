import React from 'react'

export default function Extra() {
  return (
    <section className="pb-0">
    <div className="container position-relative z-index-9">
      <div className="row mt-n1-9">
        <div className="col-xl-6 mt-1-9">
          <div className="inner-box">
            <div className="row align-items-center">
              <div className="col-md-4 col-xl-5 order-2 order-md-1">
                <div className="extra-image">
                  <img src="img/content/employ.png" alt="..." />
                </div>
              </div>
              <div className="col-md-8 col-xl-7 order-1 order-md-2 mb-4 mb-md-0">
                <div className="text-lg-start text-center">
                  <h4 className="mb-3 text-capitalize">I'm Employee</h4>
                  <p className="mb-4">
                    It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a href="registration.html" className="butn">
                    Register Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mt-1-9">
          <div className="inner-box yellow">
            <div className="row align-items-center">
              <div className="col-md-4 col-xl-5 order-2 order-md-1">
                <div className="extra-image">
                  <img src="img/content/candidate.png" alt="..." />
                </div>
              </div>
              <div className="col-md-8 col-xl-7 order-1 order-md-2 mb-4 mb-md-0">
                <div className="text-lg-start text-center">
                  <h4 className="mb-3 text-capitalize">I'm Candidates</h4>
                  <p className="mb-4">
                    If you are going to use a passage of Lorem Ipsum, you
                    need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </p>
                  <a href="registration.html" className="butn">
                    Register Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="img/content/dots.png"
      className="position-absolute top-5 right-5 ani-left-right d-none d-lg-block"
      alt="..."
    />
  </section>
  )
}
