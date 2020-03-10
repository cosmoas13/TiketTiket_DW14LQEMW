import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { toRupiah } from "indo-formatter";

import { connect } from "react-redux";
import { get_ticket } from "../_action/ticket";
import moment from "moment";

const styles = theme => ({
  main: {
    height: "100vh"
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "left"
  },
  footer: {
    fontStyle: "italic",
    backgroundColor: "#647BFF",
    color: "#fff",
    padding: 20,
    marginTop: 55
  },
  subtitle: {
    margin: "40px 20% auto 20%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    justify: "center",
    backgroundColor: "#cfe8fc"
  },
  paperList: {
    padding: theme.spacing(2),
    textAlign: "center",
    justify: "center",
    marginTop: "-40px",
    color: theme.palette.text.secondary
  },
  mainbody: {
    textAlign: "left",
    paddingLeft: "40px"
  },
  paper2: {
    backgroundImage: 'url("/promo.jpg")'
  }
});

class FormTiket extends React.Component {
  componentDidMount() {
    this.props.get_ticket();
  }
  render() {
    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm:ss");
      let endTime = moment(timeB, "HH:mm:ss");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };

    const { classes } = this.props;
    const { data: ticket } = this.props.ticket;
    return (
      <div className={classes.root}>
        <Grid container spacing={3} style={{ marginBottom: "0px" }}>
          <Grid item xs={3}>
            <Typography>
              <Box>Nama Kereta</Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <Box>Berangkat</Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <Box>Tiba</Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <Box>Durasi</Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              <Box>Harga Per Orang</Box>
            </Typography>
          </Grid>
        </Grid>

        {/* GET_TICKET */}

        {ticket.map((item, index) => (
          <Box border={1} style={{ borderRadius: "10px", marginTop: "10px" }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography>
                  <br />
                  <Box>
                    <b>{item.train_name.name}</b>
                  </Box>
                  <Box fontSize={13}>{item.price}</Box>
                  <br />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  <br />
                  <Box>
                    <b>{item.start_time}</b>
                  </Box>
                  <Box fontSize={13}>{item.destination.name}</Box>
                  <br />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                  <br />
                  <Box>
                    <b>{item.arrival_time}</b>
                  </Box>
                  <Box fontSize={13}>{item.start.name}</Box>
                  <br />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <br />
                <Typography>
                  <Box>
                    <b>{getDuration(item.start_time, item.arrival_time)}</b>
                  </Box>
                </Typography>
                <br />
              </Grid>
              <Grid item xs={2}>
                <br />
                <Typography>
                  <Box>
                    <b>
                      <td style={{ color: "#ffd740" }}>
                        {toRupiah(item.price)}
                      </td>
                    </b>
                  </Box>
                </Typography>
                <br />
              </Grid>
            </Grid>
          </Box>
        ))}
      </div>
    );
  }
}

const MapsToProps = state => {
  return { ticket: state.ticket };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_ticket: () => dispacth(get_ticket())
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(FormTiket));
