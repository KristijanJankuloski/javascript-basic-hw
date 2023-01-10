const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    fs.readFile('./categories.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const cat = JSON.parse(data);
        res.json(cat);
        });
    });

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});