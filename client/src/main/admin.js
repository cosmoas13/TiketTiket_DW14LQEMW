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
import { get_allticket } from "../_action/payment";
import { get_user } from "../_action/user";
import moment from "moment";
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
    this.props.get_allticket();
    this.props.get_user();
  }
  render() {
    const { classes } = this.props;
    const { data } = this.props.payment;
    const kevin = this.props.user.data;
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
                <Box>{kevin && kevin.name}</Box>
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
                  {data.map((value, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.user == undefined ? "" : value.user.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.ticket == undefined
                          ? ""
                          : value.ticket.start.name}
                        -
                        {value.ticket == undefined
                          ? ""
                          : value.ticket.destination.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.attachment}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.status}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <IconButton>
                          <Search
                            start_date={moment(
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start_date
                            ).format("dddd, MMMM Do YYYY")}
                            train_name={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.train_name.name
                            }
                            train_type={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.train_type.name
                            }
                            arrival_date={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.arrival_date
                            }
                            arrival_time={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.arrival_time
                            }
                            start_date1={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start_date
                            }
                            start_time={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start_time
                            }
                            total={value.total == undefined ? "" : value.total}
                            start_city={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start.city
                            }
                            start_name={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start.name
                            }
                            start_code={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.start.code
                            }
                            destination_city={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.destination.city
                            }
                            destination_name={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.destination.name
                            }
                            destination_code={
                              value.ticket == undefined
                                ? ""
                                : value.ticket.destination.code
                            }
                            id_card={
                              value.user == undefined ? "" : value.user.id_card
                            }
                            name={
                              value.user == undefined ? "" : value.user.name
                            }
                            phone={
                              value.user == undefined ? "" : value.user.phone
                            }
                            email={
                              value.user == undefined ? "" : value.user.email
                            }
                          />
                        </IconButton>
                        <IconButton>
                          <Edit
                            id={value.id}
                            name={value.user && value.user.name}
                            start_city={value.ticket && value.ticket.start.city}
                            destination_city={
                              value.ticket && value.ticket.destination.city
                            }
                            attachment={value.attachment}
                            status={value.status}
                          />
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
    payment: state.payment,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    get_allticket: () => dispatch(get_allticket()),
    get_user: () => dispatch(get_user())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Payment));
