import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import classes from "./Home.module.css";
import Find from "./find";
import { useRouter } from "next/router";
import View from "./View";
const Home = () => {
  const router = useRouter();
  const [status, setStatus] = useState();
  const [Bus, setBus] = useState("");
  const [view, setView] = useState(false);
  const [data, setData] = useState("");
  const [uname, setUname] = useState("");

  useEffect(() => {
    const log = localStorage.getItem("Login");
    const un = localStorage.getItem("Name");
    setUname(un);
    setStatus(log);
    if (log === undefined) {
      router.push("/");
    }
  }, [status]);

  const fetchedBus = (data) => {
    setBus(data);
  };

  const viewBtn = (id) => {
    const filteredBus = Bus.filter((item) => item._id == id);
    setData(filteredBus);
    setView(true);
  };

  const closeView = (value) => {
    setView(value);
  };
  return (
    <>
      {status && (
        <div>
          <Nav />
          <div className={classes.find}>
            <h2 style={{ margin: "0%", padding: "0%" }}>
              Welcome <span style={{ color: "green" }}>{uname}</span>
            </h2>
            <Find bus={fetchedBus} />
          </div>
          <div className={classes.train}>
            <center>
              {Bus.length > 0 && (
                <div className={classes.content}>
                  <h2 className={classes.h2}>Your Bus</h2>
                  {Bus.map((item, index) => (
                    <div className={classes.box} key={item._id}>
                      <div className={classes.box1}>
                        <p className={classes.p}>
                          <p className={classes.span}>S.no</p>
                          {index + 1}
                        </p>
                        <p className={classes.p}>
                          <p className={classes.span}>Source </p>
                          {item.Source}
                        </p>
                        <p className={classes.p}>
                          <p className={classes.span}>Bus no </p>
                          {item.Bus_no}
                        </p>
                        <p className={classes.p}>
                          <p className={classes.span}>Destination </p>
                          {item.Destination}
                        </p>
                      </div>
                      <div>
                        <button
                          className={classes.view}
                          onClick={() => viewBtn(item._id)}
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {Bus.length === 0 && (
                <center>
                  <h1 style={{ marginTop: "4px" }}>No bus searched</h1>
                </center>
              )}
            </center>
          </div>
          {view && (
            <center>
              <View info={data} Close={closeView} />
            </center>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
