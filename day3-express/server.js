// HTTP Server without Express
// const http = require("http");

// const server = http.createServer((req, res) => {
    
//     res.end("Server running ");
// });

// server.listen(3000, () => console.log("Server running at 3000"));


const express = require('express');
const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({ message: "Express Server running" });
});

app.listen(4000, () => console.log("Server running on port  4000"));



// data
let students = [
    { id: 1, name: "Madhu", course: "EEE" },
    { id: 2, name: "Kiran", course: "CSE" }
];

// to get the all students data 
app.get("/students", (req, res) => {
    res.json(students);
});

// get students by id 
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student);
});

// to add new student 

app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);
    res.json({ message: "Student added", data: newStudent });
});


// update the student  data 

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    student.name = req.body.name || student.name;
    student.course = req.body.course || student.course;
    res.json({ message: "Student updated", data: student });
});

// delete the student 

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).json({ error: "Student not found" });
    students.splice(index, 1);
    res.json({ message: "Student deleted" });
});

