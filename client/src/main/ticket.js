import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import DropDown1 from "../items/dropdown";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import "typeface-roboto";
import {
  Container,
  Paper,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { get_myticket } from "../_action/payment";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import ModalInvoice from "../components/modalinvoice";

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
    position: "absolute",
    bottom: "0",
    width: "100%",
    padding: 20,
    marginTop: 55
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
  approved: {
    backgroundColor: "#69f0ae",
    border: 1,
    textAlign: "center",
    width: 100,
    color: "#ffffff"
  },
  textData: {
    opacity: "0.2"
  }
});

const startStepsIcons = () => <RadioButtonUncheckedIcon color="primary" />;
const endStepsIcons = () => <LensIcon color="primary" />;

class Ticket extends React.Component {
  componentDidMount() {
    this.props.get_myticket();
  }
  render() {
    const username = localStorage.getItem("username");
    const { classes } = this.props;
    const { data } = this.props.payment;
    return (
      <>
        <div className={classes.root}>
          <div className={classes.main}>
            {/* modal login and register */}
            <AppBar position="static" className={classes.appbar}>
              <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                  <IconButton>
                    <Link to="/">
                      <Avatar alt="homelogo" src="/logo.png" />
                    </Link>
                  </IconButton>
                </Typography>
                <Box>
                  <Typography>{username}</Typography>
                </Box>
                <Box>
                  <DropDown1 />
                </Box>
              </Toolbar>
            </AppBar>
          </div>
          <Container maxWidth="md">
            <br />
            <Typography variant="h4" gutterBottom>
              Tiket Saya
            </Typography>
            <Grid item xs={12}>
              {data &&
                data.map((item, index) => (
                  <Paper
                    className={classes.paperText}
                    elevation={3}
                    style={{ marginBottom: 30 }}
                  >
                    <Grid container className={classes.satu}>
                      <Grid item xs={9} style={{ marginTop: 50 }}>
                        <Grid container className={classes.satu}>
                          <Grid item xs={3}>
                            <Typography componenet="div">
                              <Box fontSize={16} m={1}>
                                <b>
                                  {item.ticket && item.ticket.train_name.name}
                                </b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {item.ticket && item.ticket.train_type.name}
                              </Box>

                              <Box fontSize={11} m={1}>
                                {item == undefined ? (
                                  ""
                                ) : item.status == "Approved" ? (
                                  <Paper className={classes.approved}>
                                    {item.status}
                                  </Paper>
                                ) : (
                                  <Paper className={classes.pending}>
                                    {item.status}
                                  </Paper>
                                )}
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Stepper
                              orientation="vertical"
                              style={{ padding: 10 }}
                            >
                              <Step key="1">
                                <StepLabel
                                  StepIconComponent={startStepsIcons}
                                ></StepLabel>
                              </Step>
                              <Step key="2">
                                <StepLabel
                                  StepIconComponent={endStepsIcons}
                                ></StepLabel>
                              </Step>
                            </Stepper>
                          </Grid>

                          <Grid item xs={2}>
                            <Typography variant="h5">
                              <Box fontSize={13} m={1}>
                                <b>{item.ticket && item.ticket.start_time}</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {item.ticket && item.ticket.start_date}
                              </Box>
                              <Box fontSize={13} m={1}>
                                <b>{item.ticket && item.ticket.arrival_time}</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {item.ticket && item.ticket.arrival_date}
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h5">
                              <Box fontSize={13} m={1}>
                                <b>
                                  {item.ticket && item.ticket.start.city} (
                                  {item.ticket && item.ticket.start.code})
                                </b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                Stasiun {item.ticket && item.ticket.start.name}
                              </Box>
                              <Box fontSize={13} m={1}>
                                <b>
                                  {item.ticket && item.ticket.destination.city}{" "}
                                  ({item.ticket && item.ticket.destination.code}
                                  )
                                </b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                Stasiun{" "}
                                {item.ticket && item.ticket.destination.name}
                              </Box>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={3}>
                        <Grid>
                          <Typography variant="h5">
                            <Box fontSize={23} m={1}>
                              <b>Kereta Api</b>
                            </Box>
                            <Box fontSize={15} m={1}>
                              {moment(
                                item.ticket && item.ticket.start_date
                              ).format("dddd, MMMM Do YYYY")}
                            </Box>
                            {item == undefined ? (
                              ""
                            ) : item.status == "Approved" ? (
                              <Box
                                border={3}
                                style={{
                                  width: "155px"
                                }}
                              >
                                <Avatar
                                  variant="square"
                                  className={classes.square}
                                  src="/qr.jpg"
                                  style={{ width: 150, height: 150 }}
                                ></Avatar>
                              </Box>
                            ) : (
                              <Box
                                border={3}
                                style={{
                                  width: "155px"
                                }}
                              >
                                <Paper
                                  variant="outlined"
                                  style={{
                                    height: "20vh"
                                  }}
                                ></Paper>
                              </Box>
                            )}
                          </Typography>
                        </Grid>
                      </Grid>

                      {/* payment button */}
                      <Grid item xs={12} style={{ marginBottom: -5 }}>
                        <Grid container className={classes.dua}>
                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box fontSize={13} m={1}>
                                <b>ID Pengguna</b>
                              </Box>
                            </Typography>
                          </Grid>

                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box fontSize={13} m={1}>
                                <b>Nama Pemesan</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box fontSize={13} m={1}>
                                <b>No. Handphone</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h5">
                              <Box fontSize={13} m={1}>
                                <b>Email</b>
                              </Box>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid item xs={8}>
                          <hr></hr>
                        </Grid>
                        <Grid
                          container
                          className={classes.dua}
                          style={{ marginTop: -5 }}
                        >
                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box
                                fontSize={13}
                                m={1}
                                className={classes.textData}
                              >
                                <b>{item.user && item.user.id_card}</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box
                                fontSize={13}
                                m={1}
                                className={classes.textData}
                              >
                                <b>{item.user && item.user.name}</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography componenet="div">
                              <Box
                                fontSize={13}
                                m={1}
                                className={classes.textData}
                              >
                                <b>{item.user && item.user.phone}</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h5">
                              <Box
                                fontSize={13}
                                m={1}
                                className={classes.textData}
                              >
                                <b>{item.user && item.user.email}</b>
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{ paddingLeft: 80, marginTop: -8 }}
                          >
                            <Grid>
                              <Typography variant="h5">
                                <ModalInvoice
                                  train_id={item.id}
                                  train_name={
                                    item.ticket && item.ticket.train_name.name
                                  }
                                  train_type={
                                    item.ticket && item.ticket.train_type.name
                                  }
                                  start_time={
                                    item.ticket && item.ticket.start_time
                                  }
                                  start_date={
                                    item.ticket && item.ticket.start_date
                                  }
                                  arrival_time={
                                    item.ticket && item.ticket.arrival_time
                                  }
                                  arrival_date={
                                    item.ticket && item.ticket.arrival_date
                                  }
                                  start_city={
                                    item.ticket && item.ticket.start.city
                                  }
                                  start_code={
                                    item.ticket && item.ticket.start.code
                                  }
                                  start_name={
                                    item.ticket && item.ticket.start.name
                                  }
                                  destination_city={
                                    item.ticket && item.ticket.destination.city
                                  }
                                  destination_code={
                                    item.ticket && item.ticket.destination.code
                                  }
                                  destination_name={
                                    item.ticket && item.ticket.destination.name
                                  }
                                  id_card={item.user && item.user.id_card}
                                  name={item.user && item.user.name}
                                  phone={item.user && item.user.phone}
                                  email={item.user && item.user.email}
                                  qty={item.qty}
                                  price={item.ticket && item.ticket.price}
                                  total={item.total}
                                />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
            </Grid>
          </Container>
        </div>
        {/* <footer className={classes.footer}>
          <Typography variant="p" className={classes.footerText}>
            &copy;Ticket Ticket
          </Typography>
        </footer> */}
      </>
    );
  }
}

const MapsToProps = state => {
  return {
    payment: state.payment
  };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_myticket: () => dispacth(get_myticket())
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(Ticket));
