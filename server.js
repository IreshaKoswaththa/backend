const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// Remove this line, as dotenv should load variables automatically
// require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

// db connection
console.log('MONGO_URI',process.env.MONGO_URI);


mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

.then(() => {
    app.listen(PORT, () => {
        console.log('Listening on port', PORT);
    });
})
.catch((error) => {
    console.log(error);
});




/*{const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const app = express();
require("dotenv").config();

const PORT=process.env.port || 8070;
mongoose.connect(process.env.MONGO_URI)
.then (() => {
    app.listen(process.env.PORT,() =>{
        console.log('listning on port',process.env.PORT)
    })
})
.catch((error)=> {
    console.log(error)
})

/*{

app.use(cors());
app.use(bodyParser.json());

//db connection

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
 
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection is Success")
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port:${PORT}`)
})}*/

