import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newObj = {
      id: Math.floor(Math.random() * 1 + 3000),
      firstName,
      lastName,
      title,
      email,
    };

    axios
      .post("https://dummyapi.io/data/v1/user/create", newObj, {
        headers: {
          "app-id": "61a1becd66a54517fcd859e3",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <TextField
            type="text"
            id="firsnName"
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Title"
          />
        </div>
        <div className="my-3">
          <TextField
            type="text"
            id="firsnName"
            variant="standard"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            label="Enter First Name"
          />
        </div>
        <div className="my-3">
          <TextField
            type="text"
            id="lastName"
            variant="standard"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            label="Enter Last Name"
          />
        </div>
        <div className="my-3">
          <TextField
            type="email"
            id="lastName"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Enter Email"
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

export default CreateUser;
