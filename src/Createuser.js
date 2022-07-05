import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Createuser() {
  let navigation=useNavigate();
  let [isLoading,setLoading]=useState(false);
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      let pattern=new RegExp(/^[a-zA-Z\-]+$/)
      if (!values.name) {
        errors.name = "Please enter your name";
      }else if(values.name.length <5){
        errors.name = "Length should be max 10 characters"
      }else if(values.name.length>20){
        errors.name = "Length should be less than 20 characters"
      }else if(!pattern.test(formik.values.name)){
        errors.name="Username should not have numbers"
      }
      if (!values.position) {
        errors.position = "Please enter your position";
      }
      return errors;
    },
    onSubmit: async(values) => {
     try {
      setLoading(true)
      console.log(values);
    axios.post("https://62c29fa0876c4700f5292e27.mockapi.io/students",values)
      navigation("/portal/users")
      localStorage.setItem("")
      
     } catch (error) {
      
     }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`form-control ${formik.errors.name ?"error-border":""}`}
            />
            {formik.errors.name ? <span style={{color:"red"}}>{formik.errors.name}</span> :null}
            
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              type="position"
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              className="form-control"
            />
           
              {formik.errors.position ? <span style={{color:"red"}}>Please enter your position</span>:null}
            </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              type="office"
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type="text"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>StartDate</label>
            <input
              type="date"
              name="startDate"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              className="form-control"
            />
          </div>
          <div ClassName="col-lg-6">
           <input
              type={"submit"}
              value="Submit"
              className="btn btn-primary mt-2"
              disabled={!formik.isValid&&isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
