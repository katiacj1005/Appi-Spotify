/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import React, { useEffect } from "react";

export default function App2() {

 //search("hola mundo", "album");

 var juanito = "hola3";

 console.log(document.body.querySelector("div"));

 useEffect(()=> {

  console.log(document.querySelector("div"));



 })


  return (
    <div>{juanito}</div>
  );
}

