"use client";

import React from "react";

const products = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {params.products}</h3>
    </div>
  );
};
   
export default products;