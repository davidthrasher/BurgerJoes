const router = require("express").Router();
const contactController = require("../../controllers/contactController");

Matches with "/api/contact"
router.route("/")
  .post(contactController.sendMail);

module.exports = router;
