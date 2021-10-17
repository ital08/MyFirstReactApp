import React from "react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <div class="ui menu">
        <Link to="/">
          <div class="header item">ItaloReact</div>
        </Link>
        <Link to="/about">
          <a class="item">About</a>
        </Link>
        <Link to="/Experience">
          <a class="item">Experience</a>
        </Link>
        <Link to="/Contact">
          <a class="item">Contact</a>
        </Link>
      </div>
    </>
  );
}
