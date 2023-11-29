import React from "react";

export default function Blog() {
  return (
    <section>
      <div className="container position-relative z-index-9">
        <div className="section-heading3">
          <h2>Recent Blog Posts</h2>
          <p>Know your really worth and find the job that qualify your life.</p>
        </div>
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card card-style9">
              <div className="blog-image">
                <img
                  className="card-img-top border-radius-5"
                  src="img/blog/blog-01.jpg"
                  alt="..."
                />
                <div className="date">
                  <span className="text-white display-31 font-weight-500">
                    Apr 18, 2022
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="h5 mb-3 text-capitalize">
                  <a href="blog-details.html">
                    How To Make A Perfect Cv That Attracts The Attention...
                  </a>
                </h4>
                <p className="mb-3">
                  A job ravenously at the same time as Far plenty that one rank
                  beheld after outside.
                </p>
                <a href="blog-details.html" className="font-weight-600">
                  Read More
                  <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                </a>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card card-style9">
              <div className="blog-image">
                <img
                  className="card-img-top border-radius-5"
                  src="img/blog/blog-02.jpg"
                  alt="..."
                />
                <div className="date">
                  <span className="text-white display-31 font-weight-500">
                    Apr 15, 2022
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="h5 mb-3 text-capitalize">
                  <a href="blog-details.html">
                    Points To Be Considered Before Accept Job Offer!...
                  </a>
                </h4>
                <p className="mb-3">
                  A job ravenously at the same time as Far plenty that one rank
                  beheld after outside.
                </p>
                <a href="blog-details.html" className="font-weight-600">
                  Read More
                  <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                </a>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card card-style9">
              <div className="blog-image">
                <img
                  className="card-img-top border-radius-5"
                  src="img/blog/blog-03.jpg"
                  alt="..."
                />
                <div className="date">
                  <span className="text-white display-31 font-weight-500">
                    Apr 14, 2022
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="h5 mb-3 text-capitalize">
                  <a href="blog-details.html">
                    Most Powerful Thing You Have Self Coaching Scholars...
                  </a>
                </h4>
                <p className="mb-3">
                  A job ravenously at the same time as Far plenty that one rank
                  beheld after outside.
                </p>
                <a href="blog-details.html" className="font-weight-600">
                  Read More
                  <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <img
        src="img/content/round.png"
        className="position-absolute bottom-5 left-5 ani-top-bottom d-none d-md-block"
        alt="..."
      />
    </section>
  );
}
