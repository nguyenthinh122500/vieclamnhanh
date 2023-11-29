import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Related from "./Related/Related";

export default function BodyDetail() {
  return (
    <section>
      <div className="container">
        <Header />
        <Body />
        <Related />
      </div>
    </section>
  );
}
