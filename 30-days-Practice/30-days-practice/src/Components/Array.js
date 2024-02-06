import React from 'react'
let js="jhansi"
const java=js.split('')
console.log(java)

const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits.length-1 // we are accessing the first item using its index
let last=fruits[firstFruit]
console.log(last)

const Array = () => {
  return (
    <div>
     {java.map((char,index)=>(
        <span key={index}>{char}-chitti<br></br></span>
     ))}
     {fruits.map((a,i)=>(
        <p key={i}>{a}</p>     
     ))}
    lastfruit:{last}
    </div>
  )
}

export default Array
