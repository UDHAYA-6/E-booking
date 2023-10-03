import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Find from "./find";
import classes from "./index.module.css";
import Login from "./Login";
import { motion } from "framer-motion";
const index = () => {
  const [isLoggedIn, setLoggedIn] = useState("");
  const getStatus = (value) => {
    setLoggedIn(value);
  };
  useEffect(() => {
    const data = localStorage.getItem("LoginDetails");
    if (data) {
      const data1 = JSON.parse(data);
      const state = data1.LoginStatus;
      setLoggedIn(state);
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <>
          <div className={classes.container}>
            <div className={classes.content}>
              <h1 style={{ color: "green" }}>
                Book<br></br>now!!
              </h1>
              <img src="/bus3.png" height={85} width={200} />
            </div>
          </div>
          <div className={classes.div}>
            <motion.div
              className={classes.left}
              initial={{ scale: 0 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ duration: 3, type: "spring", bounce: 0.5 }}
            >
              <Login status={getStatus} />
            </motion.div>
            <motion.div
              initial={{ x: 460, scale: 0 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ duration: 3, bounce: 0.5, type: "spring" }}
              className={classes.right}
            ></motion.div>
          </div>
        </>
      )}
      {isLoggedIn && (
        <>
          <Nav />
          <div className={classes.find}>
            <Find />
          </div>
        </>
      )}
    </>
  );
};

export default index;
