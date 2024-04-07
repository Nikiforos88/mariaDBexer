const express = require('express');
const app = express();
const port = 4000;
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(express.json());

// Define Swagger configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'A documentation for your API',
    },
    servers: [
      {
        url: 'http://localhost:4000/api', // Update with your server URL
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const dataSource = require('./connect').dataSource;
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
