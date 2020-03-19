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
import { get_user } from "../_action/user";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, username: "", password: "" };
  }

  handleLogin = async e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const data = { username, password };

    await this.props.login(data);

    this.props.get_user();
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
              margin="dense"
              id="password"
              label="Password"
              type="password"
              name="password"
              fullWidth
              onChange={this.handleChange}
            />
            <Button
              type="submit"
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
  return { auth: state.auth, user: state.user };
};

const MapsDispacthToProps = dispacth => {
  return {
    login: data => dispacth(login(data)),
    get_user: () => dispacth(get_user())
  };
};
export default connect(MapsToProps, MapsDispacthToProps)(Login);
