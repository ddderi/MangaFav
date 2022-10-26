const express = require('express');
const app = express();
const router = require('./app/router');
const cors = require('cors');


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//cors 

app.use(cors({
    origin: '*'
}));



// PORT 
const PORT = process.env.PORT || 1234;

// ROUTER
app.use(router)


//LISTEN
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})