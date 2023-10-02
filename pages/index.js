import React from "react";
import Nav from "./Nav";
import Find from "./find";
import classes from "./index.module.css";
const index = () => {
  return (
    <>
      <Nav />
      <div className={classes.find}>
        <Find />
      </div>
    </>
  );
};

export default index;
