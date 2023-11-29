import React from "react";

export default function Banner() {
  return (
    <section
      className="bg-primary bg-img full-screen top-position1 object-move position-relative banner-home"
      data-background="img/banner/banner-06.png"
    >
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-lg-7 col-xl-6">
            <h1 className="mb-3 mb-sm-4 display-lg-6 text-white">
              Have Talent? Meet Opportunity
            </h1>
            <p className="text-white opacity8 mb-sm-1-9 lead d-none d-sm-block">
              Join over 2 Million Others in The Future of Work, The easiest way
              to get your new jobs &amp; Career Opportunities.
            </p>
            <a
              href="contact-us.html"
              className="butn secondary white-hover mb-1-6 mb-sm-10"
            >
              Contact Us
            </a>
            <div className="d-sm-flex align-items-center">
              <h6 className="mb-2 mb-sm-0 me-sm-2 me-xl-4 text-white">
                10k+ Candidates
              </h6>
              <ul className="list-unstyled users-list m-0">
                <li>
                  <img
                    className="rounded-circle"
                    src="img/avatar/avatar-01.jpg"
                    alt="..."
                  />
                </li>
                <li>
                  <img
                    className="rounded-circle"
                    src="img/avatar/avatar-02.jpg"
                    alt="..."
                  />
                </li>
                <li>
                  <img
                    className="rounded-circle"
                    src="img/avatar/avatar-03.jpg"
                    alt="..."
                  />
                </li>
                <li>
                  <img
                    className="rounded-circle"
                    src="img/avatar/avatar-05.jpg"
                    alt="..."
                  />
                </li>
              </ul>
              <a href="index-03.html#!" className="text-white ms-sm-2 ms-xl-5">
                <i className="ti-export" /> Upload your CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/banner/banner-08.png"
        className="position-absolute right-5 right-xl-15 bottom-5 d-none d-lg-block"
        alt="..."
      />
      <div className="d-inline-block p-10 p-sm-18 p-md-24 bg-secondary rounded-circle position-absolute bottom-n20 left-n5" />
      <img
        src="img/banner/banner-bottom-shape.png"
        className="position-absolute bottom-0"
        alt="..."
      />
    </section>
  );
}
