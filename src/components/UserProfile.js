import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserProfile = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <img src={props.profile.picture} />
      </div>
      <div>
        <p>
          <span className="fs-3">{props.profile.title}</span>.
          <span className="fs-4">{props.profile.firstName}</span>
          <span className="fs-4">{props.profile.lastName}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
