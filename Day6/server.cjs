const app = require("./app.cjs");
const { PORT } = require("./config/env.cjs");

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});