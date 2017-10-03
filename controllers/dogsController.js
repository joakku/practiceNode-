module.exports = {
    GET:{
        "/":(req,res)=>{
            res.write("Woof");
            res.end();
        }
    }
}