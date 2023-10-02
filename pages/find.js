import React, { useState, useEffect } from "react";
import classes from "./find.module.css";
const Find = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const fromChange = (event) => {
    setFrom(event.target.value);
  };
  const toChange = (event) => {
    setTo(event.target.value);
  };
  const formSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/fetch?from=${from}&to=${to}`);
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log(jsonData);
    } else {
      console.log(jsonData.msg);
    }
  };
  return (
    <div className={classes.bg}>
      <form className={classes.form} onSubmit={formSubmit}>
        <center>
          <p className={classes.title}>Search your bus</p>
        </center>
        <div className={classes.container}>
          <label className={classes.label}>From</label>
          <br></br>
          <select className={classes.input} value={from} onChange={fromChange}>
            <option value="">Select From</option>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
            <option value="Trichi">Trichi</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
        </div>
        <div className={classes.container}>
          <label className={classes.label}>To</label>
          <br></br>
          <select className={classes.input} value={to} onChange={toChange}>
            <option value="">Select To</option>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
            <option value="Trichi">Trichi</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
        </div>
        <div className={classes.container}>
          <label className={classes.label}>Travel date</label>
          <br></br>
          <input className={classes.input} type="date" required />
        </div>
        <center className={classes.container}>
          <button type="submit" className={classes.btn}>
            Search
          </button>
        </center>
      </form>
    </div>
  );
};

export default Find;
