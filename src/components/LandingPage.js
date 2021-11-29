import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
const LandingPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      console.log("sucess");
      props.handleSubmitRoute();
      history.push("/userlist");
    } else {
      alert("Enter the correct username and password");
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <TextField
            type="text"
            id="username"
            label="Standard"
            variant="standard"
            onChange={handleUserNameChange}
            value={userName}
            label="User Name"
          />
        </div>
        <div className="my-3">
          <TextField
            type="password"
            id="password"
            label="Standard"
            variant="standard"
            onChange={handlePasswordChange}
            value={password}
            label="Password"
          />
        </div>
        <div>
          <Button type="submit" variant="contained">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
