// const router = express.Router();
var db = require("../models");
const router = require("express").Router();
module.exports = function(app) {

  router.post("/api/menu/order", function(req, res) {
    db.Orders.create([{
          orderNumber: req.body.menuItem[i],
          menuId: req.body.menuItem[i],
          itemQuantity: req.body.menuItem[i],
          date: req.body.specialRequest[i],
          orderComments: req.body.price[i]
        }])
  });

};
module.exports = router;
