module.exports = function (app) {
  //importing ordercontroller
  var orderList = require("../controller/orderController");

  //Creating specific orderRoutes
  app
    .route("/restaurants/:id/orders")
    .get(orderList.get_all_orders)
    .post(orderList.post_an_order);

  app
    .route("/restaurants/:id/orders/:userId")
    .get(orderList.get_order_by_user_on_res);

  app.route("/users/:id/orders").get(orderList.get_order_by_a_user);
};
