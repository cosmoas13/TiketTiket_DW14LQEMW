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
  IconButton
} from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { post_payment } from "../_action/payment";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      qty: null
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
    console.log(data, "jem");

    this.props.post_payment(data);
    // window.location.reload(false);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
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
          <AddShoppingCartIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
        >
          <DialogTitle id="form-dialog-title">Beli Tiket</DialogTitle>
          <DialogContent>
            <Grid container>
              <Paper className={classes.paperText} style={{ width: "500px" }}>
                <Grid className={classes.satu}>
                  <Grid item xs={12}>
                    <Grid container className={classes.satu}>
                      <Grid item xs={4}>
                        <Typography componenet="div">
                          <Box fontSize={16} m={1}>
                            <b>{this.props.train}</b>
                          </Box>
                          <Box fontSize={15} m={1}>
                            {this.props.price}
                          </Box>
                          <Box fontSize={11} m={1}>
                            <Paper className={classes.pending}>Pending</Paper>
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          componenet="div"
                          style={{ paddingLeft: 10 }}
                        >
                          <Box fontSize={13} m={1}>
                            <b>{this.props.start_time}</b>
                          </Box>
                          <Box fontSize={10} m={1}>
                            {this.props.start_date}
                          </Box>
                          <Box fontSize={13} m={1}>
                            <b>{this.props.arrival}</b>
                          </Box>
                          <Box fontSize={10} m={1}>
                            {this.props.arrival_date}
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography componenet="div">
                          <Box fontSize={13} m={1}>
                            <b>{this.props.start}</b>
                          </Box>
                          <Box fontSize={10} m={1}>
                            Stasiun Keberangkatan
                          </Box>
                          <Box fontSize={13} m={1}>
                            <b>{this.props.destination}</b>
                          </Box>
                          <Box fontSize={10} m={1}>
                            Stasiun Tujuan
                          </Box>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container className={classes.satu}>
                      <Grid item xs={12}>
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
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          color="primary"
                          size="large"
                          fullWidth
                          variant="contained"
                          style={{ marginTop: "10px" }}
                          onClick={this.handleSubmit}
                        >
                          Beli
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
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

const MapsDispacthToProps = dispacth => {
  return {
    post_payment: data => dispacth(post_payment(data))
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(Buy));
