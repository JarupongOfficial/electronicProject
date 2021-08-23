let express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  path = require("path"),
  mongoose = require("mongoose"),
  dbConfig = require("./database/db");



//Express route
const orderRoute = require('../backend/routes/order.route');

//Connect MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log("Database successfully connected");
},
  error => {
    console.log("Could not connect to database"+error);
  }
)

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors());
app.use('/orders', orderRoute)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../build')))

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../build/index.html"))
    })
}

//PORT
const port = process.env.PORT || 4000
const server = app.listen(port, ()=>{
  console.log("Connected to port "+ port);
})

//404 error
app.use((req, res, next)=>{
  next(createError(404))
})

//Error Handler
app.use(function(err, req, res, next){
  console.error(err.message);
  if(!error.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(errr.message);
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/", "index.html"));
// })

// app.listen(port, () => {
//   console.log(`Connect to port: http://localhost:${port}`)
// })

// app.use((req, res, next) => {
//     next(createError(404))
// });


// app.use(function (err, req, res, next){
//     console.error(err.message);
//     if(!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).sent(err.message);
// })