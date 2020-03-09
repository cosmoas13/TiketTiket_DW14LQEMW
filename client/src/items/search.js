import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Country from "./country";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

import {
  Typography,
  IconButton,
  Container,
  FormGroup,
  FormLabel,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  withStyles
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 250
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
});

class VerticalTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Tiket Kereta Api" {...a11yProps(0)} />
          <Tab label="Tiket Pesawat Api" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <FormLabel label="asal">
            <strong>Tiket Kereta Api</strong>
          </FormLabel>
          <Container style={{ marginTop: "20px" }}>
            <FormGroup row>
              <FormGroup col>
                <FormLabel className="label-tujuan" label="asal">
                  <strong>Asal</strong>
                </FormLabel>
                <Country />
              </FormGroup>
              <IconButton>
                <SwapHorizIcon style={{ color: "#647BFF" }} />
              </IconButton>
              <FormGroup col>
                <FormLabel className="label-tujuan" label="tujuan">
                  <strong> Tujuan</strong>
                </FormLabel>
                <Country />
              </FormGroup>
            </FormGroup>
            <FormGroup row>
              <FormGroup col>
                <FormLabel className="label-tujuan" label="asal">
                  <strong>Tanggal Berangkat</strong>
                </FormLabel>{" "}
                <TextField variant="outlined" type="date" size="small" />
              </FormGroup>
              <FormGroup col>
                <FormControlLabel
                  style={{ marginTop: -12, marginLeft: 5 }}
                  control={<Checkbox value="checkedB" color="primary" />}
                  label="Pulang Pergi"
                />
              </FormGroup>
              <FormGroup col>
                <FormLabel className="label-tujuan" label="asal">
                  <strong>Dewasa</strong>
                </FormLabel>{" "}
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
              {/* &nbsp;&nbsp; */}
              <FormGroup col style={{ marginLeft: 20 }}>
                <FormLabel className="label-tujuan" label="asal">
                  <strong>Bayi</strong>
                </FormLabel>{" "}
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
              <FormGroup col style={{ marginLeft: 20 }}>
                <Button variant="contained" color="primary">
                  Cari Tiket
                </Button>
              </FormGroup>
            </FormGroup>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </div>
    );
  }
}

export default withStyles(styles)(VerticalTabs);
