let express=require('express');
let cors=require('cors');
const app=express();
const db=require('./db.js');
const authController=require('./controller/authController.js');
const port=process.env.PORT || 5000;

app.use(cors());
app.use('/api/auth',authController);

app.get('/',(req,res)=>{
    res.send("health ok");
})

app.listen(port,()=>{
    console.log(`listining to port ${port}`)
})