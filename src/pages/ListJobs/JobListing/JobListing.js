import React from "react";
import ListingLeft from "./ListingLeft/ListingLeft";
import ListingRight from "./ListingRight/ListingRight";

export default function JobListing() {
  return (
    <section>
      <div className="container">
        <div className="row mt-n6">
          {/* job-listing left */}
          <ListingLeft />
          {/* end job-listing left */}
          {/* job-listing right */}
          <ListingRight />
          {/* end job-listing right */}
        </div>
      </div>
    </section>
  );
}
