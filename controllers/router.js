var fs = require("fs");

module.exports = {
    loadRoutes :()=>{
        var routes={};
        fs.readdir("controllers",(err,files)=>{
            if(err){
                throw -1;
            }
            files.filter((n)=>n.indexOf("Controller")>-1).forEach((n,i,a)=>{
                routes[n.replace("Controller.js","")]=require(`./${n}`);
            })
        })
        return routes;
    },
    getController:(url="")=>{
        return url.split("/").filter((n)=>n)[0] || "/";
    },
    getAction:(url="")=>{
        return url.split("/").filter((n)=>n)[1] || "/";
    }
}