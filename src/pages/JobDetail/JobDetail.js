import React, { Fragment } from "react";
import Title from "./Title/Title";
import BodyDetail from "./BodyDetail/BodyDetail";
export default function JobDetail() {
  return (
    <Fragment>
      {/* PAGE TITLE
    ================================================== */}
      <Title />
      {/* JOB DETAILS 2
    ================================================== */}
     <BodyDetail />
    </Fragment>
  );
}
