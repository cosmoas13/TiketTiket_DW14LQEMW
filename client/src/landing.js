import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchTicket from "./items/search";
import FormTicket from "./items/form";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import Login from "./components/login";
import Register from "./components/register";
import Drop from "./items/dropdown";
import { connect } from "react-redux";

import { getUser } from "./_action/auth";

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
    backgroundColor: "#647BFF",
    boxShadow: "none",
    textAlign: "left"
  },
  footer: {
    fontStyle: "italic",
    backgroundColor: "#455DFF",
    color: "#fff",
    padding: 20,
    marginTop: 55
  },
  subtitle: {
    margin: "40px 20% auto 20%"
  },
  paper: {
    textAlign: "center",
    justify: "center",
    width: "50wh",
    height: "50vh"
  },
  promo: {
    background: "url(/promo.jpg)",
    height: "40vh",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  paperList: {
    padding: theme.spacing(2),
    textAlign: "center",
    justify: "center",
    marginTop: "-60px",
    color: theme.palette.text.secondary
  },
  paperTable: {
    padding: theme.spacing(2),
    textAlign: "center",
    justify: "center",
    marginTop: "30px",
    color: theme.palette.text.secondary
  },
  mainbody: {
    textAlign: "left",
    paddingLeft: "40px"
  },
  paperPhoto: {
    backgroundImage: "url(/promo.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  textWelcome: {
    textAlign: "left",
    fontSize: "25px",
    color: "white",
    marginTop: "80px"
  }
});

class Landing extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { logedIn } = this.props.auth;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.main}>
          {/* modal login and register */}
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <IconButton>
                  <Avatar alt="homelogo" src="/logo.png" />
                </IconButton>
              </Typography>
              {logedIn ? (
                <Drop />
              ) : (
                <>
                  <Login />
                  <Register />
                </>
              )}
            </Toolbar>
          </AppBar>

          {/* quote */}
          <div
            maxWidth="lg"
            justify="center"
            alignItems="stretch"
            style={{
              background: "url(/backgroundGrid.jpg)",
              backgroundColor: "#ffffff",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 70%"
            }}
          >
            <Container maxWidth="md">
              <Grid container>
                <Grid item xs={6}>
                  <section className={classes.paper}>
                    <div className={classes.textWelcome}>
                      <Typography variant="p">
                        Selamat Pagi <b>Ticket Seekers !</b>
                      </Typography>
                      <br />
                      <Typography variant="p">
                        Ingin Pulkam dengan Good Deal?
                      </Typography>
                      <br />
                      <Typography variant="p">
                        <b>Masuk atau Daftar Sekarang!!</b>
                      </Typography>
                      <br />
                    </div>
                  </section>
                </Grid>

                <Grid item xs={6} style={{ marginTop: "40px" }}>
                  <Paper className={classes.promo}></Paper>
                </Grid>
              </Grid>
            </Container>
            {/* menu search */}
            <Container maxWidth="md">
              <Grid container spacing={0}>
                <Grid item xs={12} flow>
                  <Paper className={classes.paperList}>
                    <SearchTicket />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        {/* table */}
        <Container maxWidth="md" style={{ marginTop: 50 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} flow>
              <Paper className={classes.paperTable}>
                <FormTicket />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {/* footer */}
        <footer className={classes.footer}>
          <Typography variant="p">&copy;Ticket Ticket</Typography>
        </footer>
        {/* </Container> */}
      </div>
    );
  }
}

const MapsToProps = state => {
  return { auth: state.auth };
};

const MapsDispacthToProps = dispacth => {
  return { getUser: () => dispacth(getUser()) };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(Landing));
