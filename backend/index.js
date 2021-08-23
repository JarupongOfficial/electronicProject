let express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser")
    path = require("path");


// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../build')))

//     app.get("*", (req, res)=>{
//         res.sendFile(path.join(__dirname, "../build"))
//     })
// }

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/", "index.html"));
})

app.listen(port, () => {
  console.log(`Connect to port: http://localhost:${port}`)
})

// app.use((req, res, next) => {
//     next(createError(404))
// });


// app.use(function (err, req, res, next){
//     console.error(err.message);
//     if(!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).sent(err.message);
// })