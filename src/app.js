const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 7000;

// console.log(path.join(__dirname,"../public"));
const public_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.set("views",template_path);

hbs.registerPartials(partials_path);
app.use(express.static(public_path));


app.get("/",(req,res)=>{
    res.render("index")
})

// app.get("/about",(req,res)=>{
//     res.render("about")
// })

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.status(404).render("404error")
})

app.listen(port,()=>{
    console.log(`we are listning to the port number ${port} `);
})
