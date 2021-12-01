import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-100 d-flex justify-content-between align-items-center flex-wrap"
    >
      <div
        style={{ width: "48%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Button className="my-2" variant="contained">
          Users
        </Button>
        <Button className="my-2 text-decoration-none" variant="outlined">
          <Link className="text-decoration-none" to="/posts">
            Posts
          </Link>
        </Button>
      </div>
      <div style={{ width: "48%", height: "100%" }}>
        <img
          src="https://source.unsplash.com/random"
          alt="pic"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
