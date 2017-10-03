module.exports = {
    GET:{
        "/":(req,res)=>{
            res.write("Meow");
            res.end();
        }
    }
}