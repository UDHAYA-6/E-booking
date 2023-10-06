import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "./index.module.css";
import Login from "./Login";
import { motion } from "framer-motion";
const index = () => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("Login");
    if (data) {
      setLoggedIn(data);
      if (data === "true") {
        router.push("/Home");
      }
    }
  }, [isLoggedIn]);
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
              <Login />
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
    </>
  );
};

export default index;
