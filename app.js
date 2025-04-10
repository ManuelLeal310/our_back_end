// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here

// ******* to handle the USER.ROUTES 
// we are telling Express to store the file called user.routes that is inside the folder routes in the variable userRoutes
const adminRoutes = require('./routes/admin.routes');
// we are using the app.use method (of Express) to transform the variable userRoutes to /user.
app.use('/admin', adminRoutes);

const festRoutes = require('./routes/fest.routes');
app.use('/fest', festRoutes);

const clubRoutes = require('./routes/club.routes');
app.use('/clubgit ', clubRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
