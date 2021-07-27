import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import exams from '../exams.svg'
import axios from 'axios';
import { useHistory } from "react-router-dom";
const AddStudent = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors },  } = useForm();
    const [serverError, setServerError] = useState("")

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
        const { firstname, lastname, fathername, dob, gender, email, phone, degree, department, address } = data
        axios.post('/student/addStudent', {
            firstname, lastname, fathername, dob, gender, email, phone, degree, department, address
        }).then((result) => {
            console.log(result);
            history.push('/')
        }).catch((e) => {
            console.log(e);
            setServerError("some errors are occrued please try agian")
        })

    }
    console.log(errors);
    return (
        <div className="container">
        {
            serverError ?(<div className="alert alert-danger" role="alert">
              {serverError}
            </div>):null
        }
           
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={exams} alt="" className="img-fluid banner" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 ">
                            <label className="form-label">First Name</label>

                            <input
                                
                                {...register('firstname', {
                                    required: "First Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "First Name must be more than 3 characters",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "First Name cannot exceed more than 15 characters",
                                    },

                                })}

                                type="text" name="firstname" 
                                className={`form-control ${errors.firstname ? "is-invalid" : ""}`}

                                id="exampleInputPassword1" />

                            <p className="custom_error"> {errors.firstname?.message}</p>


                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Last Name</label>

                            <input
                                {...register('lastname', {
                                    required: "Last Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Last Name must be more than 3 characters",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Last Name cannot exceed more than 15 characters",
                                    },

                                })}

                                type="text" className={`form-control ${errors.lastname ? "is-invalid" : ""}`} id="exampleInputPassword1" name="lastname" />
                            <p className="custom_error"> {errors.lastname?.message}</p>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Father Name</label>

                            <input
                                {...register('fathername', {
                                    required: "Father Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Father Name must be more than 3 characters",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Father Name cannot exceed more than 30 characters",
                                    },

                                })}
                                type="text" className={`form-control ${errors.fathername ? "is-invalid" : ""}`} id="exampleInputPassword1" name="fathername"
                            />
                            <p className="custom_error"> {errors.fathername?.message}</p>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Date Of Birth</label>

                            <input
                                {...register('dob', {
                                    required: "Date of Birth is required"

                                })}
                                type="date" className={`form-control ${errors.dob ? "is-invalid" : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" name="dob"
                            />
                            <p className="custom_error"> {errors.dob?.message}</p>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Gender</label>

                            <div className="form-check">
                                <input
                                    {...register('gender', {
                                        required: "Gender is required"

                                    })}
                                    className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                                    type="radio" name="gender" id="flexRadioDefault1"
                                    value="Male"
                                // required
                                />
                                <label className="form-check-label" >
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    {...register('gender', {
                                        required: "Gender is required"

                                    })}
                                    className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                                    type="radio" name="gender"
                                    value="Female"

                                />
                                <label className="form-check-label" >
                                    Female
                                </label>
                            </div>
                            <p className="custom_error"> {errors.gender?.message}</p>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Email address</label>

                            <input
                                {...register('email', {
                                    required: "Email id is required"

                                })}
                                type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" name="email"

                            />
                            <p className="custom_error"> {errors.email?.message}</p>

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Contact Number</label>

                            <input
                                {...register('phone', {
                                    required: "Phone Number is required",
                                    minLength: {
                                        value: 10,
                                        message: "contact Number Must Be 10 digit Number",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "contact Number Must Be 10 digit Number",
                                    },

                                })}
                                type="number"
                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                id="exampleInputEmail1" aria-describedby="emailHelp" name="phone"

                            />
                            <p className="custom_error"> {errors.phone?.message}</p>

                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Degree</label>
                            <select
                                {...register('degree', {
                                    required: "Degree is required"

                                })}
                                className={`form-control ${errors.degree ? "is-invalid" : ""}`}

                                aria-label="Default select example" name="degree"



                            >
                                <option value="">Select..</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                            </select>
                            <p className="custom_error"> {errors.degree?.message}</p>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Department</label>
                            <select
                                {...register('department', {
                                    required: "Department is required"

                                })}

                                className={`form-control ${errors.department ? "is-invalid" : ""}`}
                                aria-label="Default select example" name="department"
                            >
                                <option value="" >Select..</option>
                                <option value="CE">CE</option>
                                <option value="ME">ME</option>
                                <option value="IT">IT</option>
                                <option value="EC">EC</option>
                                <option value="CIVIL">CIVIL</option>
                                <option value="AUTO MOBILE">AUTO MOBILE</option>

                            </select>
                            <p className="custom_error"> {errors.department?.message}</p>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                                {...register('address', {
                                    required: "Address is required"

                                })}
                                className={`form-control ${errors.address ? "is-invalid" : ""}`}

                                id="exampleFormControlTextarea1" rows="3" name="address"
                            ></textarea>
                            <p className="custom_error"> {errors.address?.message}</p>
                        </div>




                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddStudent
