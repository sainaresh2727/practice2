import React, { useState } from 'react'

function Home() {
  let [name,setname]=useState("")
  let [email,setemail]=useState("")
  let [Users,setUsers]=useState([])

  //ADD
  function Add(e){
    e.preventDefault()
    let UsersObj={
        id:Date.now(),
        name,
        email
    }
    setUsers([...Users,UsersObj]) 
    alert("Data Added")
  }

  function DeleteFun(id){
   setUsers( Users.filter((x,y)=>{
        return x.id!==id
    }))
  }

  let [Updatename,setUpdatename]=useState("")
  let [Updatemail,setUpdatemail]=useState("")
  let [Updateid,setUpdateid]=useState("")
  
  function UpdateFun(id){
    let FindUsers=Users.find((x,y)=>{
        return x.id===id
    })
    if(FindUsers){
        setUpdatename(FindUsers.name)
        setUpdatemail(FindUsers.email)
        setUpdateid(id)
    }
  }

  function Updateform(e){
    e.preventDefault()
    let Updated=Users.map((x,y)=>{
        return x.id===Updateid ? {...x,name:Updatename,email:Updatemail} : x
    })
    setUsers(Updated)
    alert("Updated")
  }

  return (
    <>
    <form onSubmit={(e)=>Add(e)}>
    <input type="text" onChange={(e)=>setname(e.target.value)} /> <br /> <br />
    <input type="text" onChange={(e)=>setemail(e.target.value)} /> <br /> <br />
    <input type="submit" />
    </form>

    <section>
    {
        Users.map((x,y)=>{
            return(
                <>
                <div key={y}>
                <h3>{x.name}</h3>
                <h3>{x.email}</h3>
                <button onClick={()=>DeleteFun(x.id)}>DELETE</button>
                <button onClick={()=>UpdateFun(x.id)} data-bs-toggle='modal' data-bs-target='#Updated'>UPDATE</button>
                </div>
                </>
            )
        })
    }
    </section>




    <div class="modal" id='Updated'>
   <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
       <form onSubmit={(e)=>Updateform(e)}>
        <input type="text"  value={Updatename} onChange={(e)=>setUpdatename(e.target.value)}/> <br /> <br />
        <input type="text" value={Updatemail}  onChange={(e)=>setUpdatemail(e.target.value)}/> <br /> <br />
        <input type="submit" /> <br /> <br />
       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Home