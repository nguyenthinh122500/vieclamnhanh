import { Fragment, useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="main-wrapper">
            {/* HEADER
        ================================================== */}
            <Header />

            <Component {...propsRoute} />

            {/* FOOTER
        ================================================== */}
            <Footer />

            {/* CONTACT
        ================================================== */}
            <Contact />
          </div>
        );
      }}
    />
  );
};
