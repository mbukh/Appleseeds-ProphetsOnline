const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
dotenv.config({ path: './server/config/config.env' });

const app = express();
app.use(express.urlencoded({ extended: true }));//know body in sending requst
app.use(express.json());


// app.use('/', (req, res) => res.send('Server running'));
app.use('/Author', require("./Route/AuthorRoute"));
app.use('/Post', require("./Route/PostRoute"));
app.use('/Comment', require("./Route/CommentRoute"));


// app.use(cors({
//   origin: 'http://127.0.0.1:5173',
//   credentials: true
// }));
const PORT = process.env.PORT || 5001;

const start = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    throw new Error("failed to connect to db")
  }

  app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
}
start();

