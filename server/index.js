const express = require("express");
const app = express();
const port = 3999;

app.use(express.json());

const db = require('./models');

// Routers
const animeRouter = require('./routes/Anime');
app.use("/anime", animeRouter);


db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});