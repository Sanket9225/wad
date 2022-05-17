
var express = require('express');
var app = express();   

app.use(express.json());

const students = [
{id :1 , name:"Abhi"},
{id :2 , name:"shree"},
{id :3 , name:"Rutu"}

];


app.get('/', (req,res) => {
	res.send("Hello World!!!");
});     


app.get('/students', (req,res) => {
	res.send(students);
});  


app.get('/students/:id', (req,res) => {
	const student = students.find(c => c.id === parseInt(req.params.id));

	if(!student)  res.status(404);
        res.send(student);


});  



app.post('/Cstudents', (req,res) => {

const student = {
	id : students.length + 1,
	name : req.body.name
};

students.push(student);
res.send(student);	


});  


app.put('/Ustudents/:id', (req,res) => {

const student = students.find(c => c.id === parseInt(req.params.id));

	if(!student)  res.status(404);

student.name = req.body.name;
res.send(student);
	
});  


app.delete('/Dstudents/:id', (req,res) => {

const student = students.find(c => c.id === parseInt(req.params.id));

	if(!student)  res.status(404);

const index = students.indexOf(student);
students.splice(index,1);
res.send(student);
	
});  




app.listen(5000);
                                                                                       