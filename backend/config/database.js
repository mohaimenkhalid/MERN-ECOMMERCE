const mongoose = require('mongoose')

const DBConnection = () => {
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true,})
        .then(() => {
        console.log("Database connected...")
    })
}

module.exports = DBConnection
    // ,
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true
    // }
