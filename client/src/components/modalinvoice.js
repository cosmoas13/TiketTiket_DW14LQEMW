import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Container,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Input
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import LensIcon from "@material-ui/icons/Lens";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { post_payment, uploadPayment } from "../_action/payment";
const styles = theme => ({
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
  }
});
const startStepsIcons = () => <RadioButtonUncheckedIcon color="primary" />;
const endStepsIcons = () => <LensIcon color="primary" />;

class ModalInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      qty: null,
      file: null,
      preview: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.data;
    const data = {
      train_id: id,
      qty: this.state.qty,
      total: this.state.total,
      date: this.props.start_date
    };
    this.props.post_payment(data);
    window.location.reload(false);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  bayarSekarang = (id, file) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("payment", this.state.file);
    uploadPayment(formData);
    // history.push("/ticket");
  };

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { id } = this.props.payment;
    return (
      <div>
        <IconButton
          onClick={() => {
            this.handleClickOpen();
          }}
          variant="contained"
          color="primary"
          size="lg"
        >
          <Button variant="contained" color="primary" fullWidth>
            Bayar Sekarang
          </Button>
        </IconButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
        >
          <DialogContent>
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
                              <b>{this.props.train_name}</b>
                            </Box>
                            <Box fontSize={11} m={1}>
                              {this.props.train_type}
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
                                <b>{this.props.start_time}</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {this.props.start_date}
                              </Box>
                              <Box fontSize={15} m={1}>
                                <b>{this.props.arrival_time}</b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {this.props.arrival_date}
                              </Box>
                            </Typography>
                          </Container>
                        </Grid>
                        <Grid item sm={6}>
                          <Container>
                            <Typography componenet="div">
                              <Box fontSize={15} m={1}>
                                <b>
                                  {this.props.start_city} (
                                  {this.props.start_code})
                                </b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {this.props.start_name}
                              </Box>
                              <Box fontSize={15} m={1}>
                                <b>
                                  {this.props.destination_city} (
                                  {this.props.destination_code})
                                </b>
                              </Box>
                              <Box fontSize={11} m={1}>
                                {this.props.destination_name}
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
                          <Box>{this.props.id_card}</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>{this.props.name}</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>{this.props.phone}</Box>
                        </Container>
                      </Grid>
                      <Grid item sm={3}>
                        <Container>
                          <Box>{this.props.email}</Box>
                        </Container>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="h4" gutterBottom>
              Rincian Harga
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
                            <Typography>
                              {this.props.train_name} x{this.props.qty}
                            </Typography>
                          </Container>
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <Box>
                          <Container>
                            <Typography>{this.props.price}</Typography>
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
                            <Typography>{this.props.total}</Typography>
                          </Container>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Grid>
                    <Grid item sm={12} style={{ marginTop: "15px" }}>
                      <Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          style={{ marginBottom: "5px" }}
                        >
                          Bayar
                        </Button>
                        <Button
                          onClick={this.handleClose}
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Tutup
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
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    name="payment"
                    onChange={e => {
                      this.setState({
                        file: e.target.files[0],
                        preview: URL.createObjectURL(e.target.files[0])
                      });
                    }}
                  ></Input>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const MapsToProps = state => {
  return {
    payment: state.payment
  };
};

const MapsDispacthToProps = dispatch => {
  return {
    post_payment: data => dispatch(post_payment(data)),
    uploadPayment: formData => dispatch(uploadPayment(formData))
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(ModalInvoice));
