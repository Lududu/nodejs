const express = require('express');
const app = express();
app.get('/',function(req,res)
{
   
    res.send('世界，你好！')  
})
app.listen(3000,function(){
    console.log('this is listening at port 3000')
})