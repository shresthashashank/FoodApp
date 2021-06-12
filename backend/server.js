require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Restaurants = require("./models/restuarantModel"); //importing restaurant models
const Reviews = require("./models/reviewModel"); //importing review models
const Users = require("./models/userModel"); //importing user models
const Order = require("./models/orderModel"); //requiring order model
bodyParser = require("body-parser");

//mongoose instace connection URL connection
mongoose.Promsie = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//App Config
const app = express();
const PORT = process.env.PORT || 8001;

//Middlewares
app.use(express.json("Unable to find")); // Our server can accept json on the body of our request
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
);
app.use(bodyParser.json());

//API Endpoints
var restaurant_routes = require("./routes/restaurantRoutes"); //importing route
restaurant_routes(app); //register the route for the restaurant

var review_routes = require("./routes/reviewRoute");
review_routes(app);

var user_routes = require("./routes/userRoute");
user_routes(app);

var order_routes = require("./routes/orderRoutes");
order_routes(app);

app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));

//Listener
app.listen(PORT, () => console.log(`listening on localhost ${PORT}`));
