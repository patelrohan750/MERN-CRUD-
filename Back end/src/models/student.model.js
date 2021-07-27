const mongoose=require('mongoose')
const validator = require('validator');
const studentSchema=new mongoose.Schema({
        firstname:{
            type:String,
            required:true,
            minlength:[3,"minimum 3 letters are required"],
            maxlength:[15,"maximum 15 letters allowed"]
        },
        lastname:{
            type:String,
            required:[true,"last name is required"],
            minlength:[3,"minimum 3 letters are required"],
            maxlength:[15,"maximum 15 letters allowed"]
           
        },
        fathername:{
            type:String,
            required:true,
            minlength:[3,"minimum 3 letters are required"],
            maxlength:[30,"maximum 30 letters allowed"]
          
        },
        dob:{
            type:Date,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:[true,'Email id already present'],
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid Email');
                }
            }
        },
        phone:{
            type:Number,
            required:true
        },
        degree:{
            type:String,
            required:true,
            enum:["B.Tech","M.Tech"]
        },
        department:{
            type:String,
            required:true,
            enum:["CE","ME","IT","EC","CIVIL","AUTO MOBILE"]
        },
        address:{
            type:String,
            required:true
        }

},{ timestamps: true })

const Student=new mongoose.model('merncrud',studentSchema);
module.exports=Student;
