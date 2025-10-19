// import the json server

const JSONServer = require('json-server') //returns an express server

// create server for running json file

const gadgets = JSONServer.create()

// 3. create middleware

const middleware=JSONServer.defaults()

//6.import db.json file

const router=JSONServer.router("db.json")

//4.defime port to run the server

const PORT=3000|| process.env.PORT
//5.use middleware

gadgets.use(middleware)
//7.use router

gadgets.use(router)

//8.tell the server to listen for the client

gadgets.listen(PORT,()=>{
    console.log(`resume builder starts at PORT number ${PORT}`);
    
})