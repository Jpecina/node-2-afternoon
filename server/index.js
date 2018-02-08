require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products = require('./products');

const app = express();


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    // console.log(dbInstance);
    // dbInstance.init_db();
    app.set('db',dbInstance);
    
});


app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000;

app.get('/api/products', products.getAll);
app.get('/api/product/:id', products.getOne);
app.put('/api/product/:id' ,products.update);
app.post('/api/product/:id',products.create);
app.delete('/api/product/:id',products.delete);
// app.put('api/products/:type' , products.update_product)

app.listen(port, ()=>{
    console.log(`server listening on ports ${port}`);
});


