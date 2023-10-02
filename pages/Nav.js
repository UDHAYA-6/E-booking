import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.top}>
        <img src="/bus1.png" className={classes.left} />
        <div className={classes.middle}>
          <center>
            <h1 className={classes.title}>Happy Tours</h1>
            <img src="/bus2.png" className={classes.mid} />

            <h6 className={classes.title1}>Pick you at your door step</h6>
          </center>
        </div>
        <img src="/bus.png" className={classes.right} />
      </div>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a className={classes.a}>Home</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>About us</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Types of services</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Terms & conditions</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Contact us</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>View tickets</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Cancel tickets</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Ticket status</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Refund</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
