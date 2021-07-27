const Student=require('../models/student.model')
module.exports.read=(req,res)=>{

    Student.find().then((result)=>{
        res.send({results:result})
    }).catch((err)=>{
        console.log(err);
        res.send({message:"some problem for getting data"})
    })
    


}
module.exports.create=(req,res)=>{
    const {firstname,lastname,fathername,dob,gender,degree,email,phone,department,address}=req.body;
    
    
    if(!req.body){
        return res.status(404).send({message:"All fields are required"})
    }

   const student=new Student({firstname,lastname,fathername,dob,gender,degree,email,phone,department,address})
   student.save().then((data)=>{
       res.send({data:data})
   }).catch((err)=>{
    console.log('------------Error Inserting New Data------------');

    if (err.name == 'ValidationError') {
        for (field in err.errors) {
            res.send({message:`${field} : ${err.errors[field].message}`})
           return console.log(`${field} : ${err.errors[field].message}`); 
        }
    }
       console.log(err)
       res.send({message:"somthing wrong"})
   })
}
module.exports.readOne=(req,res)=>{
    const id=req.params.id;
    console.log(id)
    Student.findById(id).then((result)=>{
        if(!result){
            return res.send({message:"Not found"})
        }
        res.send({result:result})
    }).catch((err)=>{
        console.log(err);
        res.send({message:"some problem for getting data"})
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id;
    const {firstname,lastname,fathername,dob,gender,degree,email,phone,department,address}=req.body;
    
    
    if(!req.body){
        return res.status(404).send({message:"All fields are required"})
    }
    Student.findByIdAndUpdate(id,{
        firstname,lastname,fathername,dob,gender,degree,email,phone,department,address
    }).then((result)=>{
        if(!result){
            return res.send({message:"Not found"})
        }
        res.send({result:result})
    }).catch((err)=>{
        console.log(err);
        res.send({message:"some problem for updating data"})
    })

}
module.exports.delete=(req,res)=>{
    const id=req.params.id;
    console.log(id)
    Student.findByIdAndRemove(id).then((result)=>{
        if(!result){
            return res.send({message:"Not found"})
        }
        res.send({deleted:result})
    }).catch((err)=>{
        console.log(err);
        res.send({message:"some problem for deleting data"})
    })
}