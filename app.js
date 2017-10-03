var http = require("http");

var router = require("./controllers/router.js");
var routes = router.loadRoutes();

http.createServer((req,res)=>{
    console.log(routes)
    if(req.url !== "/"){
        if(routes[router.getController(req.url)][req.method][router.getAction(req.url)]){
            routes[router.getController(req.url)][req.method][router.getAction(req.url)](req,res);
        }else{
            res.write("Ooops, nothing to do here");
            res.end();
        }
    }else{
        res.write("Holaaa");
        res.end();
    }
}).listen("12345");