//import React
import React from "react";
//import Redirect
import { Redirect } from "react-router-dom";

export default ({ context }) => {
  context.actions.signOut();

  return (
    // redirect to main page
    <Redirect to="/" />
  );
};
