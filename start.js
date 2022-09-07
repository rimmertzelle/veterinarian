import express from 'express';
import indexRouter from './routes/index.js';

// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json());
app.use('/', indexRouter);

app.listen(3010, () => {
  console.log('Simple service started on port 3010');
});
