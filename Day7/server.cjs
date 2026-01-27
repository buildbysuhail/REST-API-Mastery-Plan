require('dotenv').config();
const app = require("./app.cjs");
const connectDB = require("./config/db.cjs");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});