const express=require('express');
const router=express.Router();
const controller=require('../controllers/student.controller')

// To get a list of Students
router.get('/students',controller.read)
// To add a new Student
router.post('/student/addStudent',controller.create)
// To get Student by id
router.get('/students/editStudent/:id',controller.readOne)
// To update Student
router.post('/student/updateStudent/:id',controller.update)
// To delete Student
router.get('/student/deleteStudent/:id',controller.delete)

module.exports = router;