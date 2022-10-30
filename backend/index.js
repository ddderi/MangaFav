const express = require('express');
const app = express();
const router = require('./app/router');
const cors = require('cors');

// const admin = require("firebase-admin")
// const credentials = require("./testfirebase.json")

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// const adminInit = admin.initializeApp({
//     credential: admin.credential.cert(credentials)
// })

app.use(cors({
    origin: '*'
}));



const PORT = process.env.PORT || 1234;
app.use(router)


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})