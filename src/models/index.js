const mongoose = require("mongoose")

const Postschema = mongoose.Schema({
    firstName :{ type: String, required: true},
    lastName :{ type: String, required: true},
    Email:{ type: String, required: true},
     age : {type: Number, required:true}
    


});



module.exports = mongoose.model("Demo", Postschema)

/* You can work with an existing database collection by specifying the name as"demo"*/