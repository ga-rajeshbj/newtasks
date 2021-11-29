import axios from "axios";
import React, { Component } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { withRouter, Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditPage from "./EditPage";
import UserProfile from "./UserProfile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      open: false,
      editObj: {},
      userObj: {},
      profileModal: false,
      loading: false,
    };
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  fetchData = () => {
    axios
      .get("https://dummyapi.io/data/v1/user/")
      .then((response) => {
        console.log(response.data);
        this.setState({ userData: response.data.data, loading: false });
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

  handleDeleteUser = async (e, id) => {
    this.setState({ loading: true });
    e.preventDefault();
    await axios
      .delete(`https://dummyapi.io/data/v1/user/${id}`)
      .then((response) => {
        this.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditUser = (e, obj) => {
    e.preventDefault();
    this.setState({ editObj: obj });
    console.log("edit");
    this.handleOpen();
  };

  handleUpdateUser = async (id, userData) => {
    console.log(id);
    this.setState({ loading: true });
    this.handleClose();
    await axios
      .put(`https://dummyapi.io/data/v1/user/${id}`, userData)
      .then(async (response) => {
        console.log(response);
        this.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCreateUser = () => {
    this.props.history.push("/createUser");
  };

  showUserProfile = (e, obj) => {
    e.preventDefault();
    this.setState({ userObj: obj, profileModal: true });
  };
  render() {
    console.log(this.state.userData);
    return (
      <div>
        {this.state.userData === 0 ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">title</TableCell>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Picture</TableCell>
                  <TableCell align="left">Delete</TableCell>
                  <TableCell align="left">Edit</TableCell>
                </TableRow>
              </TableHead>

              {this.state.loading ? (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {this.state.userData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell
                        align="left"
                        onClick={(e) => this.showUserProfile(e, item)}
                      >
                        {item.title}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(e) => this.showUserProfile(e, item)}
                      >
                        {item.firstName}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(e) => this.showUserProfile(e, item)}
                      >
                        {item.lastName}
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(e) => this.showUserProfile(e, item)}
                      >
                        <Avatar alt="Travis Howard" src={item.picture} />
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <Button
                          type="submit"
                          variant="contained"
                          onClick={(event) =>
                            this.handleDeleteUser(event, item.id)
                          }
                        >
                          delete
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <Button
                          type="submit"
                          variant="contained"
                          onClick={(e) => this.handleEditUser(e, item)}
                        >
                          edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        )}

        <div>
          <Link to="/createUser">
            {" "}
            <Button variant="contained">create new user </Button>
          </Link>
        </div>

        <div>
          <Modal
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditPage
                userObj={this.state.editObj}
                updateData={this.handleUpdateUser}
              />
            </Box>
          </Modal>
        </div>

        <div>
          <Modal
            open={this.state.profileModal}
            onClose={() => this.setState({ profileModal: false })}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UserProfile profile={this.state.userObj} />
            </Box>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(UserList);
