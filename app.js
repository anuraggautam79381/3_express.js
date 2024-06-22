const express=require('express')
const app=express()
//get,post,put,delete
app.get('/',(req,res)=>{
  res.send('helllo from anurag gautam')
})

const courses=[
   {id:1,name:'Javascript'},
   {id:2,name:'C++'},
   {id:3,name:'Java'},
] 
app.get('/about',(req,res)=>{
    res.send("we created an impact")
})

app.get('/contact',(req,res)=>{
    res.send("contact me on 6395600256")
})

app.get('/courses/:id',(req,res)=>{
    console.log(req.params.id)
    let course=courses.find(course => course.id===req.params.id)
    if(!course) res.status(404).send('not found')
    res.send(course)
})

const port=process.env.PORT || 3000

app.listen(port,()=>console.log(`${port}`))

app.get('/courses',(req,res)=>{
    res.send(courses)
})