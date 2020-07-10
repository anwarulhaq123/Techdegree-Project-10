import React from "react";
//import Link
import { Link } from "react-router-dom";

export default () => (
  <React.Fragment>
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
        </div>
      </div>
    </div>
    <div className="bounds course--detail">
      <h1>Not Found</h1>
      <p>Sorry! Page not Exist.</p>
    </div>
  </React.Fragment>
);
