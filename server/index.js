const express = require("express");
const app = express();
const port = process.env.PORT || 3999;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const animeRouter = require('./routes/Anime');
app.use("/anime", animeRouter);


db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});