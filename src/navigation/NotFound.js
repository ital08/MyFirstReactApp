import React from "react";
import { ROOT } from "./CONSTANS";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div> Parece que te perdiste</div>
      {/* Page Not Found! */}
      <Link to={ROOT}>Home</Link>
    </>
  );
};
