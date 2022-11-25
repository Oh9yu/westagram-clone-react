import React, { useState } from "react";
import "./Main.scss";
import Aside from "./MainAside.js";
import Feed from "./MainFeed.js";
import Nav from "./MainNav.js";

function Main() {
  return (
    <>
      <Nav></Nav>
      <div className="main">
        <Feed></Feed>
        <Aside></Aside>
      </div>
    </>
  );
}
export default Main;
