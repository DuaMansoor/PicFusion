//Connects React to MongoDB, Handles user signup & login, Lets users create posts
//Lets users follow/unfollow, Loads user profiles & posts, Updates profile picture, Runs on port 5000
//It is the entire Instagram-like backend server for our project.
const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");

app.use(cors())
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/user"))
mongoose.connect(mongoUrl, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(" Successfully connected to MongoDB");
})
.catch((err) => {
  console.error(" MongoDB connection error:", err.message);
});



app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})