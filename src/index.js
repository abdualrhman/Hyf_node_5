const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const PORT = process.env.PORT || 8080;
const app = express();


app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/api/todos", (req, res)=>{
    db.query("SELECT * FROM todos", (error, result, query)=>{
        if(error){
            throw error
        }
        res.send(result);
    })
});

app.post("/api/add-todo", (req, res)=>{
    const {body} = req;
    db.query(`INSERT INTO todos SET ?`, [body],(error, result, query)=>{
        if(error){
            throw error
        }
        res.send("todo added successfully!");
    })
})

app.delete("/api/delete-todo/:id", (req, res)=>{
    const {id}= req.params;

    db.query(`DELETE FROM todos WHERE  id = ?`, [id],(error, result, query)=>{
        if(error){
            throw error
        }
        res.send("todo deleted successfully!");
    })
})


app.listen(PORT, ()=>console.log(`app is running on port ${PORT}`));