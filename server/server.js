const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(cors());


mongoose.connect("mongodb://localhost/form-db", {
  useNewurlParser: true,
  useUnifiedTopology: true,
});

const formDataSchema = new mongoose.Schema({
    username:String,
    password:String
})
const FormData = mongoose.model("formData", formDataSchema);


app.post('/login',async (req,res)=>{
    const {username,password} = req.body
   const user = await User.findOne({username})
   if(!user){
    return res.status(400).send('Invalid username or password')
    
   }
 })


app.listen(5000, () => {
  console.log("Server started on port 5000");
});