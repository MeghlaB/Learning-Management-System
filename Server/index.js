
const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config();
const port = process.env.PORT


// MiddleWare
app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u2fu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coursesCollection = client.db('Ecademy').collection('Courses')
    const usersCollection= client.db('Ecademy').collection('users')


    // user api post 

    app.post('/users',async(req,res)=>{
      const userData= req.body
      const query= {email:userData.email}
      const exitingUser= await usersCollection.findOne(query)
      if(exitingUser){
        return res.send({message:'user already exits', instertedId: null})
      }

      const result = await usersCollection.insertOne(userData)
      res.send(result)
    })
app.get('/users',async(req,res)=>{
  const userfindData = usersCollection.find()
  const result= await userfindData.toArray()
  res.send(result)
})







// .......................................................................................!
    // courses api post 
    app.post('/courses', async (req, res) => {
      const coursesData = req.body
      const result = await coursesCollection.insertOne(coursesData)
      console.log(result)
      res.send(result)
    })

    app.get('/courses',async(req,res)=>{
      const coursesFindData = coursesCollection.find()
      const result = await coursesFindData.toArray()
      res.send(result)
    })

    app.get('/courses/:id' ,async (req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await coursesCollection.find(query).toArray()
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);









app.get('/', (req, res) => {
  res.send('Learning Management System')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
