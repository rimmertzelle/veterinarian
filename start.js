import express from 'express';
import indexRouter from './routes/index.js';

const app = express();

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

// if no route is found
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(3010, () => {
  console.log('Simple service started on port 3010');
});
