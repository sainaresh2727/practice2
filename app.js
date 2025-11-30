let Express=require("express")
let App=Express()
App.use(Express.json())

let Datas=[]

App.get('/',(req,res)=>{
    res.status(200).send("Server Running Successfully")
})

App.post('/AddUsers',(req,res)=>{
    let {name,age}=req.body
    let newUsers={id:Date.now().toString(),name,age}
    Datas.push(newUsers)
    res.status(200).json({
        success:true,
        message:"Data Added"
    })
})

App.put('/Update/:id',(req,res)=>{
    let {name,age}=req.body
    let FindUser=Datas.find((x,y)=>{
        return x.id===req.params.id
    })
    if(!FindUser){
        return res.status(404).send("User Not Found")
    }
    else{
        FindUser.name=name
        FindUser.age=age
        return res.status(200).send("User Updated")
    }
})

App.get('/GetUsers',(req,res)=>{
    res.status(200).json(Datas)
})


App.delete('/Delete/:id',(req,res)=>{
   Datas.filter((x,y)=>{
        return x.id!==req.params.id
    })
    res.status(200).json({
        message:"Deleted"
    })
})

App.listen(8000,()=>{
    console.log("Server Running Successfully");
})