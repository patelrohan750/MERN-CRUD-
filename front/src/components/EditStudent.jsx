import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import exams from '../exams.svg'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const EditStudent = () => {
    const { id } = useParams();
    let history = useHistory();

    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    const [serverError, setServerError] = useState("")
    const [student, setStudent] = useState("")

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
        const { firstname, lastname, fathername, dob, gender, email, phone, degree, department, address } = data
        axios.post('/student/updateStudent/'+ id, {
            firstname, lastname, fathername, dob, gender, email, phone, degree, department, address
        }).then((result) => {
            console.log(result);
            history.push('/')
        }).catch((e) => {
            console.log(e);
            setServerError("some errors are occrued please try agian")
        })

    }
    // To get student based on ID
    useEffect(() => {
        getStudentById();
    }, [])
    const getStudentById = () => {
        axios.get('/students/editStudent/' + id).then((result) => {
            console.log(result.data.result);
            setStudent(result.data.result)
        }).catch((e) => {
            console.log(e);
        })
    }
    console.log(errors);
    console.log(student);
    return (
        <div className="container">
            {
                serverError ? (<div className="alert alert-danger" role="alert">
                    {serverError}
                </div>) : null
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
                            value={setValue('firstname',student.firstname)}
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
                               value={setValue('lastname',student.lastname)}
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
                                type="text" className={`form-control ${errors.lastname ? "is-invalid" : ""}`} id="exampleInputPassword1" name="lastname"  />
                            <p className="custom_error"> {errors.lastname?.message}</p>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Father Name</label>

                            <input
                             value={setValue('fathername',student.fathername)}
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
                             value={setValue('dob',student.dob)}
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
                              value={setValue('email',student.email)}
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
                              value={setValue('phone',student.phone)}
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
                             value={setValue('degree',student.degree)}
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
                              value={setValue('department',student.department)}
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
                               value={setValue('address',student.address)}
                                {...register('address', {
                                    required: "Address is required"

                                })}
                             
                                className={`form-control ${errors.address ? "is-invalid" : ""}`}

                                id="exampleFormControlTextarea1" rows="3" name="address"
                            ></textarea>
                            <p className="custom_error"> {errors.address?.message}</p>
                        </div>




                        <button type="submit" className="btn btn-primary">Update</button>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditStudent
