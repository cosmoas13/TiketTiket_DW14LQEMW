import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../_action/auth";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, username: "", password: "" };
  }

  handleLogin = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const data = { username, password };
    this.props.login(data);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleClickOpen();
          }}
          variant="transparent"
          size="lg"
          style={{ color: "white" }}
        >
          Login
        </Button>{" "}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="username"
              name="username"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              name="password"
              fullWidth
              onChange={this.handleChange}
            />
            <Button
              color="primary"
              fullWidth
              size="medium"
              variant="contained"
              onClick={this.handleLogin}
              style={{ marginTop: "10px" }}
            >
              Login
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const MapsToProps = state => {
  return { user: state.user };
};

const MapsDispacthToProps = dispacth => {
  return { login: (username, password) => dispacth(login(username, password)) };
};
export default connect(MapsToProps, MapsDispacthToProps)(Login);
