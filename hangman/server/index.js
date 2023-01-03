const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    const categories = fs.readFile('./categories.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const cat = JSON.parse(data);
        res.json(cat);
        });
    });
app.listen(3000, () => {console.log("Listening on port 3000")});