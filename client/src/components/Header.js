//import React
import React from "react";
//import Link
import { Link } from "react-router-dom";

export default (props) => {
  const { context } = props;
  const authUser = context.authenticatedUser;

  return (
    <div className="header">
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">Courses</h1>
        </Link>
        <nav>
          {authUser ? (
            <React.Fragment>
      <span> Welcome, {authUser.firstName} {authUser.lastName} !</span>
              <Link className="signout" to="/signout">
                Sign Out
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link className="signup" to="/signup">
                Sign Up
              </Link>
              <Link className="signin" to="/signin">
                Sign In
              </Link>
            </React.Fragment>
          )}
        </nav>
      </div>
    </div>
  );
};
