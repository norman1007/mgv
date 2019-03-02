const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const MONGODB_URI = 'mongodb://localhost/mgv';

const app = express();

const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

mongoose.connect(MONGODB_URI)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('berjaya diconnect pada pangkalan data');
}).then(result => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
    console.log(`berjaya dibuka pada port ${PORT}`);
}).catch(err => {
    console.log(err);
});