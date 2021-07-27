const express=require('express');
const app=express();
const port=8000;
require('./db/conn')
const StudentRouter=require('./routers/student.router')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(StudentRouter)


app.listen(port,()=>{
    console.log(`server runing at  http://localhost:${port}`);
})