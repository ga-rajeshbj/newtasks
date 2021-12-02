import axios from "axios";
import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { AiOutlineLike } from "react-icons/ai";

import Modal from "@mui/material/Modal";
import PostByUser from "./PostByUser";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import EditPost from "./EditPost";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: [],
      open: false,
      postObj: {},
      editObj: {},
    };
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  fetchData = () => {
    axios
      .get("https://dummyapi.io/data/v1/post")
      .then((response) => {
        console.log(response.data);
        this.setState({ postData: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchData();
    console.log("reredndered");
  }
  handleUserPost = (obj) => {
    console.log(obj);

    this.setState({ postObj: obj });
  };

  handleCreate = () => {
    let obj = {
      text: "bheemasandra",
    };

    let owner = {
      picture: "https://source.unsplash.com/random",
      title: "mr",
      firstName: "yash",
      lastName: "raj",
    };

    axios
      .post("https://dummyapi.io/data/v1/post/create", { obj, owner })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDeletePost = async (e, id) => {
    e.preventDefault();
    await axios
      .delete(`https://dummyapi.io/data/v1/post/${id}`)
      .then((response) => {
        console.log(response.data);
        this.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEdit = (e, obj) => {
    e.preventDefault();
    this.setState({ editObj: obj });
    this.handleOpen();
  };
  handleUpdateUser = async (id, userData) => {
    console.log(id);
    this.handleClose();
    await axios
      .put(`https://dummyapi.io/data/v1/post/${id}`, userData)
      .then(async (response) => {
        console.log(response);
        this.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className=" w-100 d-flex justify-content-start align-items-start">
        <div className="" style={{ width: "70%" }}>
          <div className=" w-100">
            <h1>All Post</h1>
          </div>
          <div className="w-100  d-flex  justify-content-start align-items-stretch flex-wrap">
            {this.state.postData &&
              this.state.postData.map((item) => (
                <Card
                  key={item.id}
                  style={{ width: "30%" }}
                  className="my-2 mx-1 shadow-lg d-flex flex-column justify-content-between"
                >
                  <div onClick={() => this.handleUserPost(item)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.tags[0]}
                    />

                    <div>
                      <Typography
                        variant="h6"
                        component="div"
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span className="ms-1 fs-6">
                          {" "}
                          <AiOutlineLike /> {item.likes}
                        </span>

                        <span className="me-1" style={{ fontSize: "10px" }}>
                          {" "}
                          {moment(item.publishDate)
                            .local()
                            .format("DD-MM-YY HH:mm:ss")}
                        </span>
                      </Typography>
                    </div>

                    <div>
                      <span className="ms-1 " style={{ fontSize: "12px" }}>
                        Post-By:
                      </span>
                      <span
                        className="ms-1 fw-bold"
                        style={{ fontSize: "15px" }}
                      >
                        {item.owner.title}. {item.owner.firstName}
                        {item.owner.lastName}
                      </span>
                    </div>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="text-left"
                      >
                        {item.text}
                      </Typography>
                    </CardContent>

                    <div className="align-self-end w-100  d-flex justify-content-start align-items-start">
                      {item.tags &&
                        item.tags.map((tag) => (
                          <span
                            style={{ fontSize: "12px" }}
                            className=" border border-danger rounded-2 px-2 py-1 mx-1 mb-2 bg-danger text-white"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="align-self-end w-100  d-flex justify-content-start align-items-start">
                    <Button
                      style={{ fontSize: "9px", backgroundColor: "purple" }}
                      className="p-1 ms-1 my-1 fw-bolder"
                      variant="contained"
                      onClick={(e) => this.handleEdit(e, item)}
                    >
                      edit
                    </Button>
                    <Button
                      onClick={(e) => this.handleDeletePost(e, item.id)}
                      style={{ fontSize: "9px", backgroundColor: "red" }}
                      className="p-1 ms-1 my-1 fw-bolder"
                      variant="contained"
                    >
                      delete
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <button onClick={this.handleCreate}> click the action</button>
          {Object.keys(this.state.postObj).length === 0 ? null : (
            <PostByUser obj={this.state.postObj} />
          )}
        </div>

        <div>
          <Modal
            open={this.state.open}
            onClose={() => this.handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditPost
                postObj={this.state.editObj}
                updateData={this.handleUpdateUser}
              />
            </Box>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(PostList);
