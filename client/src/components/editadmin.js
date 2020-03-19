import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  MenuItem,
  Typography
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { update_payment } from "../_action/payment";
import data from "../components/status.json";
import { Autocomplete } from "@material-ui/lab";

class EditAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      status: this.state.status
    };
    const id = this.props.id;
    if (data !== null) {
      this.props.update_payment(data, id);
    }
    window.location.reload(false);
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
    const { value } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.handleClickOpen();
          }}
          variant="transparent"
          size="lg"
        >
          <EditIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="no"
              variant="outlined"
              disabled="true"
              fullWidth
              value={this.props.id}
            />
            <TextField
              margin="dense"
              id="name"
              variant="outlined"
              disabled="true"
              fullWidth
              value={this.props.name}
            >
              {this.props.name}
            </TextField>
            <TextField
              margin="dense"
              id="tujuan"
              variant="outlined"
              disabled="true"
              value={this.props.start_city}
              fullWidth
            />
            <TextField
              margin="dense"
              id="bukti"
              variant="outlined"
              disabled="true"
              value={this.props.attachment}
              fullWidth
            />

            <Autocomplete
              options={data}
              getOptionLabel={data => data.accdosen}
              value={data}
              disableClearable
              onChange={(event, value) => {
                this.setState({ status: value.accdosen });
              }}
              fullWidth
              renderInput={params => (
                <TextField
                  {...params}
                  placeholder="Pilih Tujuan"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            {console.log(this.state.status, "woi")}

            <Button
              color="primary"
              fullWidth
              variant="contained"
              size="medium"
              style={{ marginTop: "10px" }}
              onClick={e => this.handleSubmit(e)}
            >
              Save
            </Button>
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
    update_payment: (data, id) => dispacth(update_payment(data, id))
  };
};
export default connect(MapsToProps, MapsDispacthToProps)(EditAdmin);
