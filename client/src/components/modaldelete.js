import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  IconButton
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

import { connect } from "react-redux";
import { delete_payment } from "../_action/payment";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    top: 1,
    right: 1,
    color: theme.palette.primary.main
  }
});

class DeleteOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isopen: false };
  }

  handleDelete = async () => {
    const res = await this.props.delete_payment(this.props.id);

    if (res.action.type === "DELETE_PAYMENT_FULFILLED") {
      this.setState({ isopen: false });
      // window.location.reload();
    }
  };

  handleClose = () => {
    this.setState({ isopen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <IconButton
          onClick={() => this.setState({ isopen: true })}
          style={{ color: "red" }}
          aria-label="delete"
          component="span"
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
        <Dialog
          open={this.state.isopen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xs"
        >
          <DialogTitle>
            {/* <IconButton
              size="small"
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton> */}
            Yakin ingin menghapus data order ?
          </DialogTitle>
          {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Data yang terhapus tidak bisa dikembalikan.
            </DialogContentText>
          </DialogContent> */}
          <DialogActions style={{ padding: "8px 20px" }}>
            <Button
              color="primary"
              onClick={() => this.setState({ isopen: false })}
            >
              Batal
            </Button>
            <Button
              onClick={this.handleDelete}
              style={{ color: "red" }}
              autoFocus
            >
              Hapus
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delete_payment: id => dispatch(delete_payment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(DeleteOrder));
