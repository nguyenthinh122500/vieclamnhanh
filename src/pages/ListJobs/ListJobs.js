import React from "react";
import Title from "./Title/Title";
import JobListing from "./JobListing/JobListing";
export default function ListJobs() {
  return (
    <div className="main-wrapper">
      {/* PAGE TITLE
  ================================================== */}
      <Title />
      {/* JOB LISTING 2 - LEFT SIDEBAR
  ================================================== */}
      <JobListing />
    </div>
  );
}
