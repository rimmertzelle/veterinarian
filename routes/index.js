import express from 'express';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/sayhi', (req, res, next) => {
  res.json('hi');
});

router.get('/', (req, res, next) => {
  res.json('Welcome to your local veterinarian 🐶');
});

router.get('corsenabled', cors(), (req, res, next) => {
  res.json('Wow this one is cors enabled');
});

/**
 * Add options to
 */
router.options('/appointments', (req, res, next) => {
  //set header before response
  res.header({
    allow: 'GET, POST, OPTIONS',
    'Content-type': 'application/json',
    Data: Date.now(),
    'Content-length': 0,
  });
  //response
  res.sendStatus(200);
});

router.get('/appointments', (req, res, next) => {
  res.header({
    'Content-type': 'application/json',
  });
  res.json({
    title: 'all appointments',
    url: 'nice url pointing to itself',
    query:
      Object.keys(req.query).length > 0 ? req.query : 'no query being used',
    appointments: [
      {
        url: 'nice url pointing to this appointment',
      },
      {
        url: 'nice url pointing to this appointment',
      },
    ],
  });
});

router.get('/appointments/:id', (req, res, next) => {
  res.json({
    client: `nice url to client with id ${req.params.id}`,
    date: '10-11-22',
    time: '10.10',
    url: 'nice url pointing to itself',
  });
});
router.post('/appointments', (req, res, next) => {
  const client = req.body.client;
  const date = req.body.date;
  const time = req.body.time;
  res.json({
    title: 'appointment added',
    message: `Appointment for ${client} is made on ${date} at ${time}`,
  });
});

router.delete('/appointments', (req, res, next) => {});

export default router;
