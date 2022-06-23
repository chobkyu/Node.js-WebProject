const express = require('express')//민수야 공부하자

const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});
app.listen(8080, function(){
    console.log('server start on 8080');
});