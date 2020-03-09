import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";

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
  render() {
    const { classes } = this.props;
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

        <Box border={1} style={{ borderRadius: "10px" }}>
          <Grid container spacing={3}>
            <br />
            <Grid item xs={3}>
              <Typography>
                <br />
                <Box>
                  <b>Shinkansen</b>
                </Box>
                <Box fontSize={13}>Eksekutif(H)</Box>
                <br />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>
                <br />
                <Box>
                  <b>05:00</b>
                </Box>
                <Box fontSize={13}>Gambir</Box>
                <br />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>
                <br />
                <Box>
                  <b>10:15</b>
                </Box>
                <Box fontSize={13}>Surabaya</Box>
                <br />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <br />
              <Typography>
                <Box>
                  <b>5j 05m</b>
                </Box>
              </Typography>
              <br />
            </Grid>
            <Grid item xs={2}>
              <br />
              <Typography>
                <Box>
                  <b>Rp. 250.000</b>
                </Box>
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(FormTiket);
