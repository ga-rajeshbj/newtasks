import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useHistory } from "react-router";
const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  let history = useHistory();

  const handleChanePicture = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPicture(reader.result);
      }

      reader.readAsDataURL(e.target.files[0]);
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (firstName === "") &
      (lastName === "") &
      (title === "") &
      (email === "")
    ) {
      alert("enter all the feilds");
    } else {
      let newObj = {
        firstName,
        lastName,
        title,
        email,
        picture,
      };

      await axios
        .post("https://dummyapi.io/data/v1/user/create", newObj)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      history.goBack();
    }
  };
  return (
    <div>
      <h1>Add User</h1>
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
          <label htmlFor="picture-file">
            <Button variant="contained" component="span">
              <input
                accept="image/*"
                id="picture-file"
                variant="outlined"
                name="picture"
                type="file"
                size="small"
                onChange={(e) => handleChanePicture(e)}
              />
            </Button>
          </label>
        </div>
        <div>
          <Button type="submit" variant="contained" className="my-2">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
