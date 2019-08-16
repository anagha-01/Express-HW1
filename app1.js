const Express=require('express')
var app=new Express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{        //setting route
    res.render('home',{title:"HOME"}) 
})
app.get('/login',(req,res)=>{        
    res.render('login',{title:"LOGIN PAGE"})
})
app.get('/reg',(req,res)=>{        
    res.render('reg',{title:"REGISTRATION"})
})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})  //port number-3000