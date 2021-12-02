import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";

const PostByUser = ({ obj }) => {
  const [posts, setPosts] = useState([]);

  const fetchData = (id) => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}/post`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData(obj.owner.id);
    console.log("raju");
  }, [obj]);
  console.log(posts);

  return (
    <div>
      <h3 className="text-center text-uppercase fw-bold text-primary">
        post by {obj.owner.firstName}
      </h3>

      <div
        className="w-100 overflow-scroll   d-flex  justify-content-between align-items-stretch flex-wrap"
        style={{ height: "100vh" }}
      >
        {posts &&
          posts.map((item) => (
            <Card
              key={item.id}
              style={{ width: "170px" }}
              className="my-2 mx-1 shadow-lg d-flex flex-column justify-content-between"
            >
              <div>
                <CardMedia
                  component="img"
                  height="80"
                  image={item.image}
                  alt={item.tags[0]}
                />

                <div>
                  <Typography
                    variant="h6"
                    component="div"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="ms-1 fs-6" style={{ fontSize: "8px" }}>
                      {" "}
                      <AiOutlineLike style={{ fontSize: "10px" }} />{" "}
                      <span style={{ fontSize: "10px" }}>{item.likes}</span>
                    </span>

                    <span className="me-1" style={{ fontSize: "8px" }}>
                      {" "}
                      {moment(item.publishDate)
                        .local()
                        .format("DD-MM-YY HH:mm:ss")}
                    </span>
                  </Typography>
                </div>
                <CardContent className="p-3">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-left"
                    style={{ fontSize: "10px" }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default PostByUser;
