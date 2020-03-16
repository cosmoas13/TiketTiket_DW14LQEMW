import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DropDown1 from "../items/dropadmin";
import Edit from "../components/editadmin";
import Search from "../components/invoicem";
import DeleteIcon from "@material-ui/icons/Delete";
import "typeface-roboto";
import {
  Paper,
  Typography,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Box
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { get_payment } from "../_action/payment";
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
    height: "3.6rem"
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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#647BFF",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

class Payment extends React.Component {
  componentDidMount() {
    this.props.get_payment();
  }
  render() {
    const { classes } = this.props;
    const { data } = this.props.payment;
    const username = localStorage.getItem("username");

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
                <Box>{username}</Box>
                <Box>
                  <DropDown1 />
                </Box>
              </Toolbar>
            </AppBar>
          </div>

          <Container maxWidth="md">
            <br />
            <Typography variant="h4" gutterBottom>
              List Transaksi
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No</StyledTableCell>
                    <StyledTableCell align="left">Users</StyledTableCell>
                    <StyledTableCell align="left">Tiket</StyledTableCell>
                    <StyledTableCell align="left">
                      Bukti Transfer
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Status Payment
                    </StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.user.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.ticket.start.name} -{" "}
                        {item.ticket.destination.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.status}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {item.status}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <IconButton>
                          <Search />
                        </IconButton>
                        <IconButton>
                          <Edit />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
        {/* <footer className={classes.footer}>
          <Typography style={{ paddingTop: "15px", marginTop: "10px" }}>
            &copy;Ticket Ticket
          </Typography>
        </footer> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    payment: state.payment
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get_payment: () => dispatch(get_payment())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Payment));
