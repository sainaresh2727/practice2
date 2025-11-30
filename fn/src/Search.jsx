import React, { useRef, useState } from 'react'

function Search() {
 let users=["Sai","Leo","JothiPrasath","Parthiban"]

 let [SearchFilterarr,setSearchFilterarr]=useState([])

  function SearchFun(){
     let UserInputValue=UserInput.current.value.toLowerCase()
     let SearchFilter=users.filter((x,y)=>{
    return x.toLowerCase().includes(UserInputValue)
  })
  setSearchFilterarr(SearchFilter)
  }

  let UserInput=useRef()
 

  return (
    <>
    <input type="text" ref={UserInput} />
    <button onClick={()=>SearchFun()}>SearchHere</button>
    {
        SearchFilterarr.map((x,y)=>{
            return(
                <>
                <h3>{x}</h3>
                </>
            )
        })
    }
    </>
  )
}

export default Search