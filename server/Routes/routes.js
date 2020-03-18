const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

//Controller
const AuthController = require("../controllers/Auth");
const UserController = require("../controllers/user");
const TicketController = require("../controllers/tickets");
const StationController = require("../controllers/station");
const PaymentController = require("../controllers/payment");

//Default message
router.get("/", (req, res) => {
  res.send({ message: "woi" });
});

//AUTH
router.post("/login", AuthController.Login);
router.post("/register", AuthController.Register);

//USER
router.get("/user", auth, UserController.user);

//TICKETS
router.get("/tickets", TicketController.index);
router.post("/ticket", TicketController.store);

//STATION
router.get("/stations", StationController.index);
router.get("/types", StationController.type);
router.get("/trains", StationController.train);

//PAYMENT
router.get("/payments", PaymentController.index);
router.post("/payment", auth, PaymentController.order);
router.get("/myticket", auth, PaymentController.myticket);
router.get("/detail", PaymentController.detailticket);

module.exports = router;
