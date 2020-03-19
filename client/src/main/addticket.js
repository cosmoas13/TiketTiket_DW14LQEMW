import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import DropDown1 from "../items/dropadmin";
import "typeface-roboto";
import {
  Container,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  DialogContent,
  TextField,
  Button,
  MenuItem
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";
import { post_ticket } from "../_action/ticket";
import { get_train } from "../_action/train";
import { get_stations } from "../_action/station";
import { get_type } from "../_action/type";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "#647BFF",
    boxShadow: "none",
    textAlign: "left"
  },
  footer: {
    fontStyle: "italic",
    backgroundColor: "#455DFF",
    color: "#fff",
    position: "relative",
    bottom: 0,
    height: "3.8rem"
  },
  footerText: {
    fontStyle: "italic",
    color: "#fff",
    marginTop: "5px",
    textAlign: "center",
    height: "60px"
  },
  paper: {
    textAlign: "center",
    justify: "center",
    margin: "15px"
  },
  pending: {
    backgroundColor: "#fff2cc",
    border: 1,
    textAlign: "center",
    width: 100,
    color: "#ffbf00"
  },
  textData: {
    opacity: "0.2"
  }
});

const startStepsIcons = () => <RadioButtonUncheckedIcon color="primary" />;
const endStepsIcons = () => <LensIcon color="primary" />;

class Ticket extends React.Component {
  componentDidMount() {
    this.props.get_type();
    this.props.get_stations();
    this.props.get_train();
  }
  constructor(props) {
    super(props);
    this.state = {
      train: "",
      type: "",
      depart_station: "",
      start_date: "",
      start_time: "",
      destination_station: "",
      arrival_date: "",
      arrival_time: "",
      price: "",
      qty: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      train: this.state.train,
      type: this.state.type,
      depart_station: this.state.depart_station,
      start_date: this.state.start_date,
      start_time: this.state.start_time,
      destination_station: this.state.destination_station,
      arrival_date: this.state.arrival_date,
      arrival_time: this.state.arrival_time,
      price: this.state.price,
      qty: this.state.qty
    };
    this.props.post_ticket(data);
    window.location.reload(false);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  // tr : train, st : station, ty : type

  render() {
    const { classes } = this.props;
    const { data: st } = this.props.station;
    const { data: tr } = this.props.train;
    const { data: ty } = this.props.type;
    return (
      <>
        <div className={classes.root}>
          <div className={classes.main}>
            {/* modal login and register */}
            <AppBar position="static" className={classes.appbar}>
              <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                  <IconButton>
                    <Avatar alt="homelogo" src="/logo.png" />
                  </IconButton>
                </Typography>

                <DropDown1 />
              </Toolbar>
            </AppBar>
          </div>
          <Container maxWidth="md">
            <br />
            <Typography variant="h4" gutterBottom>
              Tambah Tiket
            </Typography>
            <DialogContent>
              <TextField
                select
                label="Kereta"
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                name="train"
                fullWidth
              >
                {tr.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>

              {/* Type Kereta */}
              <TextField
                select
                label="Tipe Kereta"
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                name="type"
                fullWidth
              >
                {ty.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="date"
                variant="outlined"
                type="date"
                name="start_date"
                size="small"
                fullWidth
              />

              <TextField
                select
                label="Keberangkatan"
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                name="depart_station"
                fullWidth
              >
                {st.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="timestart"
                variant="outlined"
                name="start_time"
                type="time"
                size="small"
                fullWidth
              />

              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="date"
                variant="outlined"
                type="date"
                name="arrival_date"
                size="small"
                fullWidth
              />

              <TextField
                select
                label="Tujuan"
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                name="destination_station"
                fullWidth
              >
                {st.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="timearrival"
                variant="outlined"
                name="arrival_time"
                type="time"
                size="small"
                fullWidth
              />
              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="price"
                variant="outlined"
                label="Harga Tiket"
                name="price"
                type="number"
                fullWidth
              />
              <TextField
                onChange={this.handleChange}
                margin="dense"
                id="price"
                variant="outlined"
                label="Qty"
                name="qty"
                type="number"
                fullWidth
              />
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="contained"
                style={{ marginTop: "10px" }}
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            </DialogContent>
          </Container>
        </div>
        <footer className={classes.footer}>
          <Typography
            variant="p"
            className={classes.footerText}
            style={{ paddingTop: "15px", marginTop: "10px" }}
          >
            &copy;Ticket Ticket
          </Typography>
        </footer>
      </>
    );
  }
}

const MapsToProps = state => {
  return {
    ticket: state.ticket,
    station: state.station,
    train: state.train,
    type: state.type
  };
};

const MapsDispacthToProps = dispacth => {
  return {
    post_ticket: data => dispacth(post_ticket(data)),
    get_stations: () => dispacth(get_stations()),
    get_train: () => dispacth(get_train()),
    get_type: () => dispacth(get_type())
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(Ticket));
