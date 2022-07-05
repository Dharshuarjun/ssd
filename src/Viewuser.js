import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Viewuser() {
    let users=[
        {
            id:1,
            name:"Person 1",
            position:20,
            office:"chennai",
            age:20,
            startdate:"12/33/44",
            salary:30000
        },
        {
            id:2,
            name:"Person 2",
            position:22,
            office:"mumbai",
            age:20,
            startdate:"12/33/44",
            salary:50000
        },
        {
            id:3,
            name:"Person 3",
            position:21,
            office:"kolkata",
            age:20,
            startdate:"12/33/44",
            salary:60000
        },
    ];
    let params= useParams();
    console.log(params);

    const [searchParams,setSearchParams]=useSearchParams()
    console.log(...searchParams)
  return (
    <div>Name:{users[params.userId-1].name}</div>
  )
}

export default Viewuser;