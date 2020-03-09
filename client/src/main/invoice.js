import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import DropDown1 from "../items/dropdown";
import Box from "@material-ui/core/Box";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
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
    marginTop: 15
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
          <Container maxWidth="lg">
            <br />
            <Typography variant="h4" gutterBottom>
              Invoice
            </Typography>
            <Grid container>
              {/* parent grid */}
              <Grid item sm={12}>
                <Grid container>
                  {/* isi grid ukuran 8 */}
                  <Grid item sm={8}>
                    <Paper variant="outlined">
                      <Grid container style={{ backgroundColor: "#f5f5f5" }}>
                        <Grid item sm={2}>
                          <Box>
                            <Container>
                              <ErrorOutlineIcon
                                style={{
                                  height: 80,
                                  width: 80,
                                  color: "#ffbf00"
                                }}
                              />
                            </Container>
                          </Box>
                        </Grid>
                        <Grid item sm={10}>
                          <Container
                            style={{
                              paddingTop: "5px"
                            }}
                          >
                            <Box>
                              <Typography>
                                Silahkan melakukan pembayaran melalui M-Banking,
                                E-Banking dan ATM Ke
                              </Typography>
                              <Typography>No.rek Yang Tertera .</Typography>
                              <Typography>No.rek: 09812312312</Typography>
                            </Box>
                          </Container>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  {/* grid luar ukuran 4 */}
                  <Grid item sm={4} style={{ paddingLeft: "25px" }}>
                    <Paper variant="outlined" square>
                      <Grid container style={{ backgroundColor: "#f5f5f5" }}>
                        <Grid item sm={8} style={{ marginTop: "10px" }}>
                          <Container>
                            <Typography>
                              <Box fontSize={33}>
                                <b>Kereta Api</b>
                              </Box>
                            </Typography>
                            <Typography>
                              <Box fontSize={17}>
                                <b>Saturday</b>, 21 Februari 2020
                              </Box>
                            </Typography>
                          </Container>
                        </Grid>
                        <Grid item sm={4}>
                          <Container>
                            <Box>
                              <Avatar
                                variant="square"
                                className={classes.square}
                                alt="qrcode"
                                src="/qr.jpg"
                                style={{ width: 70, height: 70 }}
                              ></Avatar>
                            </Box>
                            <Box fontSize={10}>
                              <Typography>&nbsp;INV0101</Typography>
                            </Box>
                          </Container>
                        </Grid>
                      </Grid>
                    </Paper>
                    <Paper>
                      <Grid item sm={12}>
                        <Container>
                          <Typography componenet="div">
                            <Box fontSize={20} m={1}>
                              <b>Argo Wilis</b>
                            </Box>
                            <Box fontSize={11} m={1}>
                              Eksekutif(H)
                            </Box>
                          </Typography>
                        </Container>
                      </Grid>
                      <Grid container>
                        <Grid item sm={1}>
                          <Container>
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
                          </Container>
                        </Grid>
                        <Grid item sm={5}>
                          <Container>
                            <Typography componenet="div">
                              <Box fontSize={15} m={1}>
                                <b>05:00</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                21 Februari 2020
                              </Box>
                              <Box fontSize={15} m={1}>
                                <b>05:00</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                21 Februari 2020
                              </Box>
                            </Typography>
                          </Container>
                        </Grid>
                        <Grid item sm={6}>
                          <Container>
                            <Typography componenet="div">
                              <Box fontSize={15} m={1}>
                                <b>Jakarta (GMR)</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                Stasiun Gambir
                              </Box>
                              <Box fontSize={15} m={1}>
                                <b>Surabaya (SBY)</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                Stasiun Surabaya
                              </Box>
                            </Typography>
                          </Container>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "-150px" }}>
                <Grid item sm={8}>
                  <Paper variant="outlined">
                    <Grid container>
                      <Grid item sm={3}>
                        <Container>
                          <Box>No. Tanda Pengenal</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>Nama Pemesan</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>No. Handphone</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>Email</Box>
                        </Container>
                      </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid container style={{ color: "gray" }}>
                      <Grid item sm={3}>
                        <Container>
                          <Box>31175033003970001</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>Anto</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>083896833112</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>anto@gmail.com</Box>
                        </Container>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom>
              Rinchian Harga
            </Typography>
            <Grid item sm={12}>
              <Grid container>
                {/* isi grid ukuran 8 */}
                <Grid item sm={5}>
                  <Paper variant="outlined">
                    <Grid
                      container
                      style={{ height: "10vh", paddingTop: "15px" }}
                    >
                      <Grid item sm={6}>
                        <Box>
                          <Container>
                            <Typography>Argo Wilis (Dewasa) x1</Typography>
                          </Container>
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Box>
                          <Container>
                            <Typography>Rp.250.000</Typography>
                          </Container>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container style={{ backgroundColor: "#f5f5f5" }}>
                      <Grid item sm={6}>
                        <Box>
                          <Container>
                            <Typography>Total</Typography>
                          </Container>
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Box>
                          <Container>
                            <Typography>Rp.250.000</Typography>
                          </Container>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Grid>
                    <Grid item sm={12} style={{ marginTop: "15px" }}>
                      <Box>
                        <Button variant="contained" color="primary" fullWidth>
                          Primary
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sm={3}
                  style={{ paddingLeft: "45px", marginTop: "-45px" }}
                >
                  <Box border={3}>
                    <Paper
                      variant="outlined"
                      style={{ height: "30vh", backgroundColor: "#f5f5f5" }}
                    >
                      <Grid container>
                        <Grid item sm={12}></Grid>
                      </Grid>
                    </Paper>
                  </Box>
                  <Typography style={{ textAlign: "center" }}>
                    upload payment proof
                  </Typography>
                </Grid>
              </Grid>
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
