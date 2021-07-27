import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";



const ListStudents = () => {
  const [students, setStudents] = useState([]);
  

  useEffect(() => {
  
    fetchStudentData();
  }, []);
  const fetchStudentData = () => {
    axios.get("/students").then((result) => {
      console.log(result.data.results);
      setStudents(result.data.results);
    });
  };

  const columns = [
    {
      name: "First Name",
      selector: "firstname",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastname",
      sortable: true,
    },
    {
      name: "Father Name",
      selector: "fathername",
      sortable: true,
    },
    {
      name: "Degree",
      selector: "degree",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Gender",
      selector: "gender",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      name: "Action",
      text: "Action",
      sortable: false,
      cell: (row) => {
        return (
          <div>
          <Link to={`/editstudent/${row._id}`}>
            <i
              className="fas fa-pencil-alt edit"
            ></i>
            </Link>

            <i
              className="fas fa-trash delete"
              onClick={() => onDelete(row._id)}
            ></i>
          </div>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontWeight: "bold",
       
      },
    },
  };

  const onEdit = (id) => {
    console.log("clicked", id);
  };
  const onDelete = (id) => {
   axios.get('/student/deleteStudent/'+ id).then(()=>{
    console.log('Student Deleted !!!')
    fetchStudentData();
   }).catch((e)=>{
       console.log(e);
   })
  };
 
  const tableData={
    columns,
    data:students
  }
  
  return (
    <div className="container">
    <DataTableExtensions {...tableData}>
      <DataTable
        columns={columns}
        pagination
        customStyles={customStyles}
        highlightOnHover
     
      />
      </DataTableExtensions>
    </div>
  );
};

export default ListStudents;
