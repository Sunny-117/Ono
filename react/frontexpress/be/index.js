const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-methods', 'POST,GET');
  next();
});

app.get('/getStudents', function (req, res) {
  const studentData = JSON.parse(readFileSync(resolve(__dirname, './data/students.json'), 'utf8'));
  res.send(studentData);
});

app.post('/getGradeStudents', function (req, res) {
  const grade = req.body.grade;

  const studentData = JSON.parse(readFileSync(resolve(__dirname, './data/students.json'), 'utf8'));
  const gradeStudentData = studentData.filter(student => student.grade == grade);
  res.send(gradeStudentData); 
})

app.listen(8080, function () {
  console.log('Welcome to use Express on 8080!!!');
});