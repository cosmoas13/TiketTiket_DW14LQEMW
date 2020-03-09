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
  Container
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

function createData(no, users, ticket, proof, status, action) {
  return { no, users, ticket, proof, status, action };
}

const rows = [
  createData(1, "Anto", "Surabaya-Jakarta", "bca.jpg", "Approved"),
  createData(2, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(2, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(2, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(2, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending"),
  createData(3, "Budi", "Surabaya-Jepang", "mandi.jpg", "Pending")
];

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
                  {rows.map(row => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.no}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.users}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.ticket}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.proof}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.status}
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
        <footer className={classes.footer}>
          <Typography style={{ paddingTop: "15px", marginTop: "10px" }}>
            &copy;Ticket Ticket
          </Typography>
        </footer>
      </>
    );
  }
}

export default withStyles(styles)(Ticket);
