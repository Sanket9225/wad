var express = require("express");

var app = express();

app.use(express.json());

const students = [{id:1,name:"a"},
{id:2,name:"b"}
]

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.get("/students",(req,res)=>{
    res.send(students);
});

app.get("/students/:id",(req,res)=>{
    const student = students.find(c =>c.id === parseInt(req.params.id))

    if (!student) req.status(404);
    res.send(student);

});

app.post("/cstudent",(req,res)=>{
    var student = { id : students.length + 1,
                    name : req.body.name

    };

    students.push(student);
    res.send(student);
});

app.put("/student/:id",(req,res)=>{
    const student = students.find(c=>c.id === parseInt(req.params.id));
    student.name = req.body.name;
    res.send(student);

});
app.delete("/delete/:id",(req,res)=>{
    students.splice(req.params.id,1);
    res
    .send(students);
})

app.listen(5000);