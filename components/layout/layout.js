import React, { useState, useRef, useEffect } from "react";
import GoToTop from "../go-to-top/go-to-top";
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({ children, footer }) => {
  const [scrollTop, setScrollTop] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <>
      {footer == "none" ? (
        <>
          <Navigation />
          {children}
        </>
      ) : (
        <>
          <Navigation />
          {children}
          {scrollTop == true ? <GoToTop /> : ""}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
