const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send("Hi Folks.server is running fine").end();
});

    
//We have to start the server 
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`); 
    console.log("Use CTrl+C to exit");
})

    
  