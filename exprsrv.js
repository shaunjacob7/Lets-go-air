const express=require("express");
const app=express();
const path=require('path')
const PORT=3000;
var mysql = require('mysql');  

app.use(express.static(path.join(__dirname, './')));



var mysqlConn = mysql.createConnection({  
    host: "localhost",  
    user: "airdb",  
    password: "airdb",  
    database: "airdb" 
    
    });


app.get("/", function(req,res){
    res.sendFile(__dirname+'/fbok.html')
});
app.get("/fbok", function(req,res){
    console.log(req.query.src);
    res.sendFile(__dirname+'/fbok.html')
});

app.get("/details", function(req,res){
    console.log(req.query.src);
    console.log(req.query.dest);
    res.sendFile(__dirname+'/details.html')
    
});

app.get("/flight_qry", function(req,res){
    console.log(req.query.src);
    console.log(req.query.dest);
    console.log(req.query.date);
    console.log(req.query.npsgr);
    var src=req.query.src;
    var dest=req.query.dest;
    mysqlConn.connect(function(err) {  
        if (err) throw err;  
        mysqlConn.query("SELECT flight_id,depart_date,depart_time,arrival_time,source_airport,destination_airport,ticket_price FROM flightchart where source_airport='"+src+"' and destination_airport='"+dest+"' order by flight_id", function (err, result) {  
        if (err) throw err;  
        console.log(result);
          /*  res.send({
                "src": "bombay",
                "key": "kochi"
             });*/
             res.setHeader('Content-Type', 'application/json');
             var data=JSON.stringify({data:result});
             console.log(data);
             
             res.end(data);
             //res.send(result);
             

        }); 
    });
    //res.sendFile(__dirname+'/details.html')
    
    
});

app.post("/details_submit", function(req,res){
    /*mysqlConn.connect(function(err) {  
        if (err) throw err;  
        mysqlConn.query("SELECT flight_id,depart_date,depart_time,arrival_time,source_airport,destination_airport,ticket_price FROM flightchart where source_airport='"+src+"' and destination_airport='"+dest+"' order by flight_id", function (err, result) {  
        if (err) throw err;  
        console.log(result);
           res.send({
                "src": "bombay",
                "key": "kochi"
             });
             res.setHeader('Content-Type', 'application/json');
             var data=JSON.stringify({data:result});
             console.log(data);
             
             res.end(data);
             //res.send(result);
             

        }); 
    });*/
    res.sendFile(__dirname+'/confirm.html')
});

app.listen(PORT,()=>{
    console.log("Server running....")
});
