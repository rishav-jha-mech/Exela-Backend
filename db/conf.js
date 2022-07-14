const mongoose = require('mongoose');
const db = "mongodb+srv://user:1234@exela.gqqpyie.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log(`Server connected with DATABASE`))
.catch(err=> console.log(err))