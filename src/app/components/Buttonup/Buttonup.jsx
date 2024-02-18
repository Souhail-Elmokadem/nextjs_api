"use client"
import React, { useState } from 'react'




export default function Buttonup() {

const [name,setname] = useState('button');

const handle = () => setname('souhail');

  return (
    <>
   
    <input type='button' onClick={e =>  name=='souhail'? setname('button') : setname('souhail') } value={name}/>
  </>
  )
}
