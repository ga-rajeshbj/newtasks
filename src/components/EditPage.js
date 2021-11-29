import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const EditPage = ({ userObj, updateData }) => {
  const [firstName, setFirstName] = useState(userObj.firstName);
  const [lastName, setLastName] = useState(userObj.lastName);
  const [title, setTitle] = useState(userObj.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newobj = {
      firstName,
      lastName,
      title,
    };
    updateData(userObj.id, newobj);
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
        <div>
          <Button type="submit" variant="contained">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
