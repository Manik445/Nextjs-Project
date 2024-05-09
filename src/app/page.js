'use client'
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [count , setCount] = useState(0); 
  const handlesubmit = ()=>{
       setCount(count+1); 
  }
  return (
    <main>
      <div>
          {/* <h1>{count}</h1>
          <button onClick={handlesubmit}>click me</button>
          <Change/> */}
          {/* <ExampleComp/> */}
          <ul>
            <li>
          <button>
          <Link href='/about/contact/service'>Got to Service</Link>
          </button>
          </li>
          <li>
          <button>
            {/* <Link href='./ProductList' style={{textDecoration : 'none' , color : 'red'}}>Go To Product</Link> */}
          </button>
          </li>
          </ul>
      </div>
    </main>
  );
} 