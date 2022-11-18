const mongoose=require('mongoose');


  mongoose.connect("mongodb+srv://admin:admin123@cluster0.uhatn5a.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>{console.log('connect')})
  .catch((err)=>{
      console.log(err);
  })

  mongoose.set('debug', true)

  module.exports=mongoose;