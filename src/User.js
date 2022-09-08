import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "./axios";
// import Lottie from "react-lottie";
// import animationData from "./lotties/98432-loading.json";

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // // };000
  // let timer;
  // //On mount
  // useEffect(() => {
  //   fetchData();
  //   timer = setInterval(() => {
  //     console.log("Timer");
  //   }, 1000);
  //   window.localStorage.setItem("new", JSON.stringify(users));
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  //   useEffect(()=>{
  //     //when the users state is updated
  //     //this useeffect will execute
  //   },[users])

  const [searchParams, setSearchParams] = useSearchParams();
  let paramVal = new URLSearchParams(
    Object.fromEntries([...searchParams])
  ).toString();
  console.log(paramVal);
  let fetchData = async () => {
    setLoading(true);
    let userData = await axios.get(`/students?${paramVal}`);
    console.log(userData);
    setLoading(false);
    setUsers(userData.data);
  };

  let handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    let ask = confirm("Do you want to delete?");
    if (ask) {
      //   await axios.delete(
      //     `https://62c29fa0876c4700f5292e27.mockapi.io/students/${id}`
      //   );
      await axios.delete(`/students/${id}`);

      fetchData();
    }
  };

  //On destroy
  // useEffect(()=>{
  //     return ()=>{
  //         console.log("On Destroy")
  //     }
  // },[])
  //     const [val,setVal]=useState(0);
  //     //On update

  //     useEffect(()=>{
  // //this will execute only when val is changed
  // console.log("this wil execute only when al is changed")
  //     },[val])

  return (
    <>
      {/* <button onClick={()=>setVal(val+1)}>Click</button>
        {val} */}
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <Link
          to="/portal/user/create"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      {loading ? (
        "wait"
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startdate}</td>
                        <td>{user.salary}</td>
                        <td>
                          <Link
                            to={`/portal/user/view/${user.id}`}
                            className="btn btn-sm btn-warning mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/user/edit/${user.id}`}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="btn btn-sm btn-danger mr-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default User;
