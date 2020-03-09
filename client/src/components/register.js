import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../_action/auth";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: ""
    };
  }

  handleRegister = e => {
    e.preventDefault();
    const name = this.state.name;
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const gender = this.state.gender;
    const phone = this.state.phone;
    const address = this.state.address;
    const data = { name, username, email, password, gender, phone, address };
    console.log("aku mau cek handle register", data);
    this.props.register(data);
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
          Register
        </Button>{" "}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              name="name"
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="username"
              label="Username"
              type="username"
              fullWidth
              name="username"
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              name="email"
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              name="password"
              onChange={this.handleChange}
            />
            <FormControl
              margin="dense"
              id="gender"
              label="Gender"
              type="gender"
              style={{ width: "100%" }}
            >
              <InputLabel id="select-spesies">Gender</InputLabel>
              <Select
                name="gender"
                onChange={this.handleChange}
                labelId="select-spesies-label"
                id="select-spesies"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              type="phone"
              fullWidth
              name="phone"
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="address"
              multiline
              fullWidth
              name="address"
              onChange={this.handleChange}
            />{" "}
            <Button
              color="primary"
              fullWidth
              size="medium"
              variant="contained"
              onClick={this.handleRegister}
              style={{ marginTop: "10px" }}
            >
              Register
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const MapsToProps = state => {
  return { register: state.user };
};

const MapsDispacthToProps = dispacth => {
  return {
    register: data => dispacth(register(data))
  };
};
export default connect(MapsToProps, MapsDispacthToProps)(Register);
