/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { get_stations } from "../_action/station";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { MenuItem, Box } from "@material-ui/core";
const styles = theme => ({
  text: {
    width: "fit-content"
  }
});

class ComboBox extends Component {
  componentDidMount() {
    this.props.get_stations();
  }
  render() {
    const classes = this.props;
    const { data: st } = this.props.station;
    return (
      <>
        {/* <TextField variant="outlined" type="date" size="small" /> */}
        <Box width={200}></Box>
        <TextField
          className={classes.text}
          select
          onChange={this.handleChange}
          variant="outlined"
          name="depart_station"
          size="small"
          width=""
        >
          {st.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      </>
    );
  }
}

const MapsToProps = state => {
  return {
    station: state.station
  };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_stations: () => dispacth(get_stations())
  };
};
export default connect(
  MapsToProps,
  MapsDispacthToProps
)(withStyles(styles)(ComboBox));
