const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

//Controller
const { Login, Register } = require("../controllers/Auth");
const { getUser } = require("../controllers/user");
// const {
//   GetAllTickets,
//   AddTicket,
//   UpdateTicket,
//   DeleteTicket,
//   DetailTicket
// } = require("../controllers/Ticket");
// const {
//   MyOrders,
//   GetAllOrders,
//   AddOrder,
//   StatusOrder
// } = require("../controllers/Order");

//Default message
router.get("/", (req, res) => {
  res.send({ message: "woi" });
});

//AUTH
router.post("/login", Login);
router.post("/register", Register);
//USER
router.get("/user", auth, getUser);

module.exports = router;
