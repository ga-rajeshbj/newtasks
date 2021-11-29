import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
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
    <div className="w-100">
      <Box component="span" sx={{ border: "1px solid gray" }} className="w-100">
        <div>
          <h1>LOGIN</h1>
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
      </Box>
    </div>
  );
};

export default LandingPage;
