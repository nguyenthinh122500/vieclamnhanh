import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Jobs from "./Jobs/Jobs";
import Company from "./Company/Company";
import Pricing from "./Pricing/Pricing";
import Testimonial from "./Testimonial/Testimonial";
import Candidates from "./Candidates/Candidates";
import Extra from "./Extra/Extra";
import Blog from "./Blog/Blog";;
export default function Home() {
  return (
    <Fragment>
      {/* BANNER
  ================================================== */}
      <Banner />
      {/* JOB CATEGORIES
  ================================================== */}
      <Category />
      {/* RECENT JOBS
  ================================================== */}
      <Jobs />
      {/* TOP COMPANY
  ================================================== */}
      <Company />
      {/* PRICING
  ================================================== */}
      <Pricing />
      {/* TESTIMONIAL
  ================================================== */}
      <Testimonial />
      {/* FEATURED CANDIDATES
  ================================================== */}
      <Candidates />
      {/* EXTRA
  ================================================== */}
      <Extra />
      {/* BLOG
  ================================================== */}
      <Blog />
    </Fragment>
  );
}
