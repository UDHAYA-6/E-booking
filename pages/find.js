import React, { useState, useEffect } from "react";
import classes from "./find.module.css";
import cities from "../Data/cities.json";
import Loading from "./component/loading";
const Find = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [load, setLoad] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredCities2, setFilteredCities2] = useState([]);
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(term.toLowerCase())
    );
    setFilteredCities(filtered);
  };
  //second
  const handleInputChange2 = (e) => {
    const term = e.target.value;
    setSearchTerm2(term);
    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(term.toLowerCase())
    );
    setFilteredCities2(filtered);
  };

  const handleCitySelect2 = (city) => {
    setSearchTerm2(city);
    setFilteredCities2([]);
  };

  const handleCitySelect = (city) => {
    setSearchTerm(city);
    setFilteredCities([]);
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);
    const response = await fetch(
      `/api/fetch?from=${searchTerm}&to=${searchTerm2}`
    );
    const jsonData = await response.json();
    if (response.status === 200) {
      setLoad(false);
      props.bus(jsonData);
    } else {
      setLoad(false);
      props.bus(jsonData);
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
          <input
            className={classes.input}
            type="text"
            placeholder="From"
            value={searchTerm}
            onChange={handleInputChange}
            required
          />
          {searchTerm.length > 0 && ( // Only render the ul if there are filtered cities
            <ul className={classes.ul}>
              {filteredCities.map((city) => (
                <li
                  className={classes.li}
                  key={city}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.container}>
          <label className={classes.label}>To</label>
          <br></br>
          <input
            type="text"
            placeholder="To"
            className={classes.input}
            value={searchTerm2}
            required
            onChange={handleInputChange2}
          />
          {searchTerm2.length > 0 && ( // Only render the ul if there are filtered cities
            <ul className={classes.ul}>
              {filteredCities2.map((city) => (
                <li
                  className={classes.li}
                  key={city}
                  onClick={() => handleCitySelect2(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.container}>
          <label className={classes.label}>Travel date</label>
          <br></br>
          <input className={classes.input} type="date" required />
        </div>
        <button type="submit" className={classes.btn}>
          Search {load && <Loading />}
        </button>
      </form>
    </div>
  );
};

export default Find;
