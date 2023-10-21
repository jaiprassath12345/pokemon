const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const axios = require('axios');
const dotenv=require("dotenv").config()
const app=express()
app.use(cors()) 
app.use(express.json())
const PORT=process.env.PORT || 8080

//mongodb connection
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connect to database"))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.send("Server is Running")
})

app.listen(PORT,()=>console.log("server is running at port:" + PORT))
  

var DataSchema = mongoose.Schema({},{ strict: false });
var pokiSchema = mongoose.model('PokemonData', DataSchema);
var pokiDatas = new pokiSchema({ iAmNotInTheSchema: true });

  // Fetch data from an API and store it in MongoDB
  app.get('/FetchapiStore', async (req, res) => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      
      const data = response.data
        // const savedData =  pokiSchema.create(data);
        // res.json(savedData);
        console.log(savedData)
    } 
    catch (error)
     {
      console.error(error);
      res.status(500).json({ error: 'Error fetching and storing data' });
    }
  });

  //GET API
  app.get("/pokemon",async(req,res)=>{
    const data=await pokiSchema.find({})
    res.send(data)
    console.log(data)
})

//get api with id
app.get("/pokemon/:id",async(req,res)=>{
   const id=req.params.id;
  const data=await pokiSchema.findOne({'_id':"6533bba37553f79f15aef73e"})
  const sendData=await data.results;
  const singleObject=sendData[id-1];
  console.log(singleObject)
  res.send(singleObject)
})