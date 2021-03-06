import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Stepper,
  Box,
  Container,
  DialogActions,
  Grid,
  Paper,
  Avatar,
  Step,
  StepLabel
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import { connect } from "react-redux";
import { get_allticket } from "../_action/payment";
import moment from "moment";
const startStepsIcons = () => <RadioButtonUncheckedIcon color="primary" />;
const endStepsIcons = () => <LensIcon color="primary" />;

class InvoiceM extends React.Component {
  state = {
    open: false
  };

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const classes = this.props;
    const { data } = this.props.payment;
    return (
      <div>
        <Button
          onClick={() => {
            this.handleClickOpen();
          }}
          variant="transparent"
          size="lg"
        >
          <SearchIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            <Box fontSize={33}>Invoice</Box>
            <Box fontSize={12} style={{ color: "silver" }}>
              Kode Invoce: INV0101
            </Box>
          </DialogTitle>
          <DialogContent>
            <Grid container>
              {/* parent grid */}
              <Grid item sm={12}>
                <Grid style={{ minWidth: "600px" }}>
                  {/* isi grid ukuran 8 */}
                  <Grid item sm={12}>
                    <Paper variant="outlined">
                      <Grid container style={{ backgroundColor: "#ffffff" }}>
                        <Grid item sm={6}>
                          <Typography>
                            <Container>
                              <Box>
                                <b>Kereta Api</b>
                              </Box>
                              <Box fontSize={13}>{this.props.start_date}</Box>
                            </Container>
                          </Typography>

                          <br />
                          <Typography>
                            <Container>
                              <Box>
                                <b>{this.props.train_name}</b>
                              </Box>
                              <Box fontSize={13}>{this.props.train_type}</Box>
                            </Container>
                          </Typography>
                        </Grid>
                        <Grid item sm={2}>
                          <Box>
                            <Avatar
                              variant="square"
                              className={classes.square}
                              alt="qrcode"
                              src="/qr.jpg"
                              style={{
                                width: 60,
                                height: 60
                              }}
                            ></Avatar>
                            TCK0101
                          </Box>
                        </Grid>
                        <Grid item sm={4}>
                          <Box border={3}>
                            <Paper
                              style={{
                                height: "27vh",
                                backgroundColor: "#f5f5f5"
                              }}
                            ></Paper>
                          </Box>
                          <Typography style={{ textAlign: "center" }}>
                            upload payment proof
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Paper variant="outlined">
                      <Grid container style={{ backgroundColor: "#ffffff" }}>
                        <Grid item sm={12}>
                          <Grid container>
                            <Grid item sm={4}>
                              <Typography>
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
                              </Typography>
                            </Grid>
                            <Grid item sm={4}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Container>
                                  <Box fontSize={12}>
                                    <b>{this.props.start_date1}</b>
                                  </Box>
                                  <Box fontSize={13}>
                                    {this.props.start_time}
                                  </Box>
                                  <Box fontSize={12}>
                                    <b>{this.props.arrival_date}</b>
                                  </Box>
                                  <Box fontSize={13}>
                                    {this.props.arrival_time}
                                  </Box>
                                </Container>
                              </Typography>
                            </Grid>
                            <Grid item sm={4}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Container>
                                  <Box fontSize={12}>
                                    <b>
                                      {this.props.start_city} (
                                      {this.props.start_code})
                                    </b>
                                  </Box>
                                  <Box fontSize={13}>
                                    Stasiun {this.props.start_name}
                                  </Box>
                                  <Box fontSize={12}>
                                    <b>
                                      {this.props.destination_city} (
                                      {this.props.destination_code})
                                    </b>
                                  </Box>
                                  <Box fontSize={13}>
                                    Stasiun {this.props.destination_name}
                                  </Box>
                                </Container>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Paper variant="outlined">
                      <Grid container style={{ backgroundColor: "#ffffff" }}>
                        <Grid item sm={12}>
                          <Grid container>
                            <Grid item sm={3}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Box fontSize={12}>
                                  <b>No.Tanda Pengenal</b>
                                </Box>
                                <Box fontSize={12}>{this.props.id_card}</Box>
                              </Typography>
                            </Grid>
                            <Grid item sm={3}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Container>
                                  <Box fontSize={11}>
                                    <b>Nama Pemesan</b>
                                  </Box>
                                  <Box fontSize={11}>{this.props.name}</Box>
                                </Container>
                              </Typography>
                            </Grid>
                            <Grid item sm={3}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Container>
                                  <Box fontSize={11}>
                                    <b>No. Handphone</b>
                                  </Box>
                                  <Box fontSize={11}>{this.props.phone}</Box>
                                </Container>
                              </Typography>
                            </Grid>
                            <Grid item sm={3}>
                              <Typography style={{ paddingTop: 15 }}>
                                <Container>
                                  <Box fontSize={11}>
                                    <b>Email</b>
                                  </Box>
                                  <Box fontSize={11}>{this.props.email}</Box>
                                </Container>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>

                    <Paper variant="outlined">
                      <Grid container style={{ backgroundColor: "#f5f5f5" }}>
                        <Grid item sm={12}>
                          <Grid container>
                            <Grid item sm={6}>
                              <Container>
                                <Typography style={{ paddingTop: 15 }}>
                                  <Box fontSize={23}>
                                    <b>Total</b>
                                  </Box>
                                </Typography>
                              </Container>
                            </Grid>
                            <Grid item sm={6}>
                              <Typography
                                align="right"
                                style={{ paddingTop: 15 }}
                              >
                                <Container>
                                  <Box fontSize={23}>
                                    <b>{this.props.total}</b>
                                  </Box>
                                </Container>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}

const MapsToProps = state => {
  return { payment: state.payment };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_allticket: () => dispacth(get_allticket())
  };
};
export default connect(MapsToProps, MapsDispacthToProps)(InvoiceM);
