import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>404 - Page Not Found</h1>
      <p>
        Return{" "}
        <Link to="/">
          <span>Home</span>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
