import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { About, Welcome } from "./components/Welcome";
export function HomeContainer() {
  return (
    <>
      <Welcome />
    </>
  );
}
