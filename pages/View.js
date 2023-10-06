import React from "react";
import classes from "./view.module.css";
const View = (props) => {
  console.log(props.info);
  const btnClick = () => {
    props.Close(false);
  };
  return (
    <div>
      <div className={classes.result} key={props.info[0]._id}>
        <div>
          <span className={classes.num}>{props.info[0].Bus_no}</span>
          <span className={classes.btn}>
            <button className={classes.closebtn} onClick={btnClick}>
              x
            </button>
          </span>
        </div>
        <div className={classes.container}>
          <div className={classes.top}>
            <div>
              <span className={classes.feild}>From: </span>
              <span className={classes.data}>{props.info[0].Source}</span>
            </div>
            <div>
              <span className={classes.feild}>To: </span>
              <span className={classes.data}>{props.info[0].Destination}</span>
            </div>
          </div>
          <div className={classes.bottom}>
            <div>
              <span className={classes.seat}>Total seats:- </span>
              <span className={classes.count1}>{props.info[0].Total}</span>
            </div>
            <div>
              <span className={classes.seat}>AVL:- </span>
              <span className={classes.count2}>23</span>
            </div>
            <div>
              <span className={classes.seat}>Booked:- </span>
              <span className={classes.count3}>17</span>
            </div>
          </div>
        </div>

        <div className={classes.route}>
          <center>
            <h2 style={{ color: "green" }}>Via routes</h2>
          </center>
          <ul className={classes.experiences}>
            {props.info[0].Via.map((item) => (
              <li className={classes.green} key={item}>
                <span class="where">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.seatBox}>
          <div className={classes.Sleeper}>
            {props.info[0].Seats.Lower.sleeper.map((item) => (
              <div
                className={`${classes.div} ${
                  item.seatStatus == "Available" ? classes.Available : ""
                } ${item.seatStatus == "Booked" ? classes.Booked : ""}`}
              >
                <p>{item.seat_num}</p>
              </div>
            ))}
          </div>
          <div className={classes.Seater}>
            {props.info[0].Seats.Lower.Seater.map((item) => (
              <div
                className={`${classes.div} ${
                  item.seatStatus == "Available" ? classes.Available : ""
                }${item.seatStatus == "Booked" ? classes.Booked : ""}`}
              >
                <p>{item.seat_num}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.seatBox1}>
          <div className={classes.Left}>
            {props.info[0].Seats.Upper.Left.map((item) => (
              <div
                className={`${classes.div} ${
                  item.seatStatus == "Available" ? classes.Available : ""
                }${item.seatStatus == "Booked" ? classes.Booked : ""}`}
              >
                <p>{item.seat_num}</p>
              </div>
            ))}
          </div>
          <div className={classes.Right}>
            {props.info[0].Seats.Upper.Right.map((item) => (
              <div
                className={`${classes.div} ${
                  item.seatStatus == "Available" ? classes.Available : ""
                }${item.seatStatus == "Booked" ? classes.Booked : ""}`}
              >
                <p>{item.seat_num}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.summary}>
          <h3>Booking summary</h3>
          <div>
            <h4>Selected seats : 0</h4>
            <h4>Tickect fair: 700</h4>
            <h4>Total amount: 768</h4>
            <button>Confrim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
