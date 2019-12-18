const usersRoute = require("./routes/userRoute");
const bagRoute = require("./routes/bagRouter");
const employeeRoute = require("./routes/employeeRouter");
const express = require("express");
const logger = require("./middleware/logging");
const app = express();

app.use(express.json());
app.use(logger);

//use users route for api/users
app.use("/api/users", usersRoute);
app.use("/api/bag", bagRoute);
app.use("/api/v1", employeeRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
