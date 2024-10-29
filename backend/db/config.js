const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-dashboard");

// mongoose.connect("mongodb://127.0.0.1/e-dashboard");
const DB = process.env.MONGODB_URL
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})
