const express = require("express");
const app = express();
const port = process.env.PORT || 3999;
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: ['https://www.omars-entertainmentopedia.yahia.space', 'https://omars-entertainmentopedia.yahia.space', 'http://localhost:3000']
}));

const db = require('./models');

// Routers
const animeRouter = require('./routes/Anime');
app.use("/anime", animeRouter);

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});