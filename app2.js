let Express=require("express")

let App=Express()
App.use(Express.json())

let UsereData=[]
App.post('/users/add',async (req,res) => {
    let {name,email,pending}=req.body
    try{
        let Users={
            id:Date.now(),
            name,
            email,
            pending
        }
        UsereData.push(Users)
        res.status(201).json({
            success:true,
            message:"Users Added"
        })
    }
    catch(err){
        
    }
})

App.get('/users/get',async (req,res) => {
    res.status(200).json(UsereData)
})

App.put('/users/update/:id',async (req,res) => {
    let {name,email,pending}=req.body
    try{
        let FindUsers=UsereData.find((x,y)=>{
        return x.id===
       Number(req.params.id) 
    })
    if(!FindUsers){
        res.status(400).json({
            success:false,
            message:"User Not Found"
        })
    }
    else{
        FindUsers.name=name,
        FindUsers.email=email,
        FindUsers.pending=pending
        res.status(201).json({
            success:true,
            message:"Data Updated"
        })
    }
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

App.listen(5000,()=>{
    console.log("Server Running Successfully");
    
})