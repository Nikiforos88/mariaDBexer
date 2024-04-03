const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());

const dataSource = require('./connect').dataSource
const userRoute = require('./routes/user.route')
const productRoute = require('./routes/product.route')


app.use('/api/users', userRoute);
app.use('/api/products', productRoute)

app.listen(port, ()=> {
    console.log(`Server is listening in port: ${port}`);
})