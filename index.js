const express = require("express");
const app = express();
const helloMiddleWare = require("./middleware/helloMiddleware");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000);
const userRouter = require("./routes/userController");

app.get("/", helloMiddleWare, (req, res) => {
  //only this route will be affected by the function of the helloMiddleware. Once the it placed at top router level, no need to placed it at specific router level. This is just for demonstration.
  res.send("Hello! NodeJs");
});

app.use(userRouter);

// app.get('/users', (req, res) =>{

//     res.send('Users route')

// })

// app.post('/users', (req, res)=> {

//     res.send("Created user")
// })
