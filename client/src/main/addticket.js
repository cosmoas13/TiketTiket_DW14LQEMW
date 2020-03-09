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
  FormControl,
  InputLabel,
  Select,
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
              Tambah Tiket
            </Typography>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="train"
                variant="outlined"
                label="Nama Kereta"
                type="train"
                fullWidth
              />
              <FormControl
                margin="dense"
                id="type"
                variant="outlined"
                label="Jenis Kereta"
                type="type"
                style={{ width: "100%" }}
              >
                <InputLabel id="select-spesies">Jenis Kereta</InputLabel>
                <Select labelId="select-spesies-label" id="select-spesies">
                  <option value={10}>Argo Wilis</option>
                  <option value={20}>Shinkansen</option>
                </Select>
              </FormControl>
              <TextField
                margin="dense"
                id="date"
                variant="outlined"
                type="date"
                size="small"
                fullWidth
              />
              <TextField
                margin="dense"
                id="start"
                variant="outlined"
                label="Stasiun Keberangkatan"
                type="start"
                fullWidth
              />
              <TextField
                margin="dense"
                id="timestart"
                variant="outlined"
                type="time"
                size="small"
                fullWidth
              />
              <TextField
                margin="dense"
                id="arrival"
                variant="outlined"
                label="Stasiun Tujuan"
                type="arrival"
                fullWidth
              />
              <TextField
                margin="dense"
                id="timearrival"
                variant="outlined"
                type="time"
                size="small"
                fullWidth
              />
              <TextField
                margin="dense"
                id="price"
                variant="outlined"
                label="Harga Tiket"
                type="number"
                fullWidth
              />
              <TextField
                margin="dense"
                id="price"
                variant="outlined"
                label="Qty"
                type="number"
                fullWidth
              />
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="contained"
                style={{ marginTop: "10px" }}
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

export default withStyles(styles)(Ticket);
