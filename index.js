const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000);
const userRouter = require("./routes/userController");

app.get("/", (req, res) => {
  res.send("Hello! NodeJs");
});

app.use(userRouter);

// app.get('/users', (req, res) =>{

//     res.send('Users route')

// })

// app.post('/users', (req, res)=> {

//     res.send("Created user")
// })
