import express from 'express';
const app = express();
const port = 8000;
import path from 'path';
import hbs from 'hbs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Oops Page Not Found!'
    });
});


app.listen(port, () => {
    console.log('listening on port 8000');
});