import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import DropDown1 from "../items/dropdown";
import Box from "@material-ui/core/Box";
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
import Avatar from "@material-ui/core/Avatar";

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
  textData: {
    opacity: "0.2"
  }
});
const startStepsIcons = () => <RadioButtonUncheckedIcon color="primary" />;
const endStepsIcons = () => <LensIcon color="primary" />;

class Ticket extends React.Component {
  render() {
    const { classes } = this.props;
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
              Tiket Saya
            </Typography>
            <Grid item xs={12}>
              <Paper className={classes.paperText}>
                <Grid container className={classes.satu}>
                  <Grid item xs={9} style={{ marginTop: 50 }}>
                    <Grid container className={classes.satu}>
                      <Grid item xs={3}>
                        <Typography componenet="div">
                          <Box fontSize={16} m={1}>
                            <b>Ksatria Kegelapan</b>
                          </Box>
                          <Box fontSize={11} m={1}>
                            Eksekutif(H)
                          </Box>
                          <Box fontSize={11} m={1}>
                            <Paper className={classes.pending}>Pending</Paper>
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Stepper orientation="vertical" style={{ padding: 10 }}>
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
                            <b>05:00</b>
                          </Box>
                          <Box fontSize={11} m={1}>
                            21 Februari 2020
                          </Box>
                          <Box fontSize={13} m={1}>
                            <b>10:05</b>
                          </Box>
                          <Box fontSize={11} m={1}>
                            21 Februari 2020
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">
                          <Box fontSize={13} m={1}>
                            <b>Jakarta (GMR)</b>
                          </Box>
                          <Box fontSize={11} m={1}>
                            Stasiun Gambir
                          </Box>
                          <Box fontSize={13} m={1}>
                            <b>Surabaya (SBY)</b>
                          </Box>
                          <Box fontSize={11} m={1}>
                            Stasiun Surabaya
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
                          <b>Saturday</b>, 21 Februari 2020
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* payment button */}
                  <Grid item xs={12} style={{ marginBottom: -5 }}>
                    <Grid container className={classes.dua}>
                      <Grid item xs={2}>
                        <Typography componenet="div">
                          <Box fontSize={13} m={1}>
                            <b>No. Tanda Pengenal</b>
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
                          <Box fontSize={13} m={1} className={classes.textData}>
                            <b>3152523112233131</b>
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography componenet="div">
                          <Box fontSize={13} m={1} className={classes.textData}>
                            <b>Kevin</b>
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography componenet="div">
                          <Box fontSize={13} m={1} className={classes.textData}>
                            <b>089608727198</b>
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h5">
                          <Box fontSize={13} m={1} className={classes.textData}>
                            <b>cosmoas13@gmail.com</b>
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
                            <Button variant="outlined" color="primary">
                              Bayar Sekarang
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
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

export default withStyles(styles)(Ticket);
