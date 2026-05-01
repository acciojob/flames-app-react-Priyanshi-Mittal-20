import React from "react";
import { useState } from "react";



const Flames=()=>{
  const [first,setFirst]=useState("")
  const [second,setSecond]=useState("")
  const [result,setResult]=useState("")
  function handleFirst(e)
  {
    setFirst(e.target.value)
  }
  function handleSecond(e)
  {
    setSecond(e.target.value)
  }
  function handleClick()
  {
    if (first=="" || second=="")
    {
      setResult("Please Enter valid input")
      return
    }
     let a = first.split("");
let b = second.split("");

for (let i = 0; i < a.length; i++) {
  let index = b.indexOf(a[i]);
  if (index !== -1) {
    a[i] = null;
    b[index] = null;
  }
}

let length =
  (a.filter(x => x !== null).length +
   b.filter(x => x !== null).length) % 6;
     
    if(length===1)
    {
      setResult("Friends")
    }
    else if(length===2)
    {
      setResult("Love")
    }
    else if (length===3)
    {
      setResult("Affection")
    }
    else if (length===4)
    {
      setResult("Marriage")
    }
    else if (length===5)
    {
      setResult("Enemy")
    }
    else if (length===0)
    {
      setResult("Siblings")
    }
    
  }
  function handleClear()
  {
    setFirst("")
    setSecond("")
    setResult("")
  }
  return(
    <div>
      <input data-testid="input1" name="name1" onChange={handleFirst} placeholder="Enter first name" value={first}/>
      <input data-testid="input2" name="name2" onChange={handleSecond} placeholder="Enter second name" value={second}/>
      <button data-testid="calculate_relationship"  name="calculate_relationship" onClick={handleClick}>Calculate Relationship Future</button>
      <button data-testid="clear"  name="clear" onClick={handleClear}>Clear</button>
      {
        result && <h3 data-testid="answer">
          {result}
        </h3>
      }
    </div>
  )
}



export default Flames