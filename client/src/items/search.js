import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { get_stations } from "../_action/station";
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
import { connect } from "react-redux";
import { get_ticket } from "../_action/ticket";

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
      value: 0,
      from: "",
      to: ""
    };
  }

  componentDidMount() {
    const { from, to } = this.state;
    this.props.get_ticket(from, to);
    this.props.get_stations();
  }

  handleSearch = () => {
    const { from, to } = this.state;
    this.props.get_ticket(from, to);
  };

  handleChange = async () => {
    const { from, to } = this.state;
    await this.setState({
      from: to,
      to: from
    });
  };

  handleTabs = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { data: st } = this.props.station;
    const { classes } = this.props;
    const { value } = this.state;
    const { from, to } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.value}
          onChange={this.handleTabs}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Tiket Kereta Api" {...a11yProps(0)} />
          <Tab label="Tiket Pesawat Api" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <FormLabel label="asal">
            {/* <strong>Tiket Kereta Api</strong> */}
          </FormLabel>
          <Container style={{ marginTop: "20px" }}>
            <FormGroup row>
              <FormGroup col style={{ marginTop: -25 }}>
                <FormLabel className="label-tujuan" label="asal">
                  <strong>Asal</strong>
                </FormLabel>
                <Autocomplete
                  options={st}
                  getOptionLabel={st => st.name}
                  inputValue={from}
                  onChange={(event, value) => {
                    this.setState({ from: value.name });
                  }}
                  style={{ width: 280, height: 60 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Pilih Tujuan"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              </FormGroup>
              <IconButton onClick={this.handleChange}>
                <SwapHorizIcon style={{ color: "#647BFF" }} />
              </IconButton>
              <FormGroup col style={{ marginTop: -25 }}>
                <FormLabel className="label-tujuan" label="tujuan">
                  <strong> Tujuan</strong>
                </FormLabel>
                <Autocomplete
                  options={st}
                  getOptionLabel={st => st.name}
                  inputValue={to}
                  onChange={(event, value) => {
                    this.setState({ to: value.name });
                  }}
                  style={{ width: 280, height: 60 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Pilih Tujuan"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
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
                  style={{ marginTop: 12, marginLeft: 5 }}
                  control={<Checkbox value="checkedB" color="primary" />}
                  label="Pulang Pergi"
                />
              </FormGroup>

              <FormGroup col style={{ marginLeft: 20, marginTop: 15 }}>
                <Button
                  onClick={this.handleSearch}
                  variant="contained"
                  color="primary"
                >
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

const MapsToProps = state => {
  return { ticket: state.ticket, auth: state.auth, station: state.station };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_ticket: (from, to) => dispacth(get_ticket(from, to)),
    get_stations: () => dispacth(get_stations())
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(VerticalTabs));
