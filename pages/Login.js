import React, { useState } from "react";
import classes from "./Login.module.css";
import Loading from "./component/loading";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [Regform, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [valid, setValid] = useState(true);
  const [load, setLoad] = useState(false);
  const [c, setc] = useState(true);
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const isStrong = (password) => {
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const hasUppercase = uppercasePattern.test(password);
    const hasNumber = numberPattern.test(password);
    const hasSpecialChar = specialCharPattern.test(password);
    return hasUppercase && hasNumber && hasSpecialChar;
  };
  const passChange = (event) => {
    setPass(event.target.value);
    if (isStrong(event.target.value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const cpassChange = (event) => {
    setCpass(event.target.value);
    if (pass !== event.target.value) {
      setc(false);
    } else {
      setc(true);
    }
  };
  const linkClick = () => {
    setForm(!Regform);
  };

  const fromSubmit = async (event) => {
    event.preventDefault();
    if (!Regform) {
      setLoad(true);
      const response = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify({ email, pass }),
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      if (response.status === 200) {
        localStorage.setItem("Login", "true");
        localStorage.setItem("Name", jsonData.Name);
        setLoad(false);
        router.push("/Home");
      } else {
        setLoad(false);
        alert(jsonData.msg);
      }
    } else {
      if (valid && c) {
        setLoad(true);
        const response = await fetch("/api/Reg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, pass }),
        });
        const jsonData = await response.json();
        if (response.status === 200) {
          setLoad(false);
          setForm(false);
          setCpass("");
          setEmail("");
          setName("");
          setPass("");
        } else {
          setLoad(false);
          alert(jsonData.msg);
          setForm(false);
        }
      }
    }
  };
  return (
    <form className={classes.form} onSubmit={fromSubmit}>
      {!Regform && (
        <center>
          <h2>Login</h2>
        </center>
      )}
      {Regform && (
        <>
          <center>
            <h2>Register</h2>
          </center>
          <div className={classes.div}>
            <label className={classes.label}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={classes.input}
              required
              value={name}
              onChange={nameChange}
            />
          </div>
        </>
      )}
      <div className={classes.div}>
        <label className={classes.label}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className={classes.input}
          required
          value={email}
          onChange={emailChange}
        />
      </div>
      <div className={classes.div}>
        <label className={classes.label}>Password</label>
        <input
          type="password"
          className={classes.input}
          placeholder="Enter password"
          required
          value={pass}
          onChange={passChange}
        />
        {Regform && !valid && (
          <p style={{ color: "red" }}>
            Must have 8 charcter, at least 1 Capital letter, at least 1 special
            character, at least 1 number
          </p>
        )}
      </div>
      {!Regform && (
        <center>
          <button type="submit" className={classes.btn}>
            Login{load && <Loading />}
          </button>

          <p>
            Don't have an account?
            <a onClick={linkClick} className={classes.a}>
              click here
            </a>
          </p>
        </center>
      )}
      {Regform && (
        <>
          <div className={classes.div}>
            <label className={classes.label}>Confrim password</label>
            <input
              className={classes.input}
              type="password"
              placeholder="Confrim password"
              required
              value={cpass}
              onChange={cpassChange}
            />
            {Regform && !c && <p style={{ color: "red" }}>Password mismatch</p>}
          </div>
          <center>
            <button className={classes.btn} type="submit">
              Register{load && <Loading />}
            </button>
            <p>
              Already have an account?
              <a className={classes.a} onClick={linkClick}>
                Click here
              </a>
            </p>
          </center>
        </>
      )}
    </form>
  );
};

export default Login;
