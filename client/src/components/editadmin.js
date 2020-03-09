import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

class EditAdmin extends React.Component {
  state = {
    open: false
  };

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
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
              label="1"
              variant="outlined"
              type="no"
              disabled="true"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Anto"
              variant="outlined"
              type="name"
              disabled="true"
              fullWidth
            />
            <TextField
              margin="dense"
              id="tujuan"
              label="Surabaya - Jakarta"
              variant="outlined"
              type="tujuan"
              disabled="true"
              fullWidth
            />
            <TextField
              margin="dense"
              id="bukti"
              label="bca.jpg"
              variant="outlined"
              type="bukti"
              disabled="true"
              fullWidth
            />
            <TextField
              margin="dense"
              id="acc"
              label="Approved"
              variant="outlined"
              type="acc"
              fullWidth
            />
            <Button
              color="primary"
              fullWidth
              variant="contained"
              size="medium"
              style={{ marginTop: "10px" }}
            >
              Save
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default EditAdmin;
