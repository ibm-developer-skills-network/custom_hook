/*import {useState, useEffect } from "react";
//import { useState } from "react";
import React, {useState, useEffect } from "react";
const UseFetch = (url) => {
    const[data,setData]=useState(); 
     useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
return [data]
}

export default <UseFetch></UseFetch>*/

import React, { useEffect, useState } from 'react'

 const useFetch = (url) => {
    const[data,setData]=useState();
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
  return [data];
}

export default useFetch;
