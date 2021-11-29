import React from "react";

import { Avatar } from "@mui/material";

const UserProfile = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Avatar
          src={props.profile.picture}
          alt={props.profile.firstName}
          sx={{ width: 84, height: 84 }}
        />
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
