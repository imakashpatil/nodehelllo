const express = require('express');
const app = express();
app.use(express.json());
app.listen(8000,()=>{console.log("listening on 8000")});
app.get('/',(req, res)=>{
    res.json({message : "server is running"})
})