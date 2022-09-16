import express from 'express';
import cors from 'cors';
const router = express.Router();
import { myLogger } from '../middleware/logger.js';

// routes
router.get('/sayhi', (req, res, next) => {
  res.json('hi');
});

// root level route
router.get('/', (req, res, next) => {
  res.json('Welcome to your local veterinarian 🐶');
});

router.get('/corsenabled', cors(), (req, res, next) => {
  res.json('Wow this one is cors enabled');
});

/**
 * all appointments routes
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

// get a collection of all the appointments and ou can use a query
router.get('/appointments', myLogger, (req, res, next) => {
  res.set({
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

// get an individual appointment
router.get('/appointments/:id', (req, res, next) => {
  res.json({
    client: `🐩 nice url to client with id ${req.params.id}`,
    date: '10-11-22',
    time: '10.10',
    url: 'nice url pointing to itself',
  });
});

// post a route using the middleware for reading the body
router.post('/appointments', (req, res, next) => {
  const client = req.body.client;
  const date = req.body.date;
  const time = req.body.time;
  if (client != undefined && date != undefined && time != undefined) {
    res.json({
      title: 'appointment added',
      message: `📅 Appointment for ${client} is made on ${date} at ${time}`,
    });
  } else {
    res.status(422);
    res.json({
      title: 'cannot add appointment',
      message: `You need to set client, date and time`,
    });
  }
});

// delete an individual appointment
router.delete('/appointments/:id', (req, res, next) => {
  const appointment = req.params.appointment;
  res.json({
    title: 'deleted',
    message: `oops ${appointment} was deleted accidentally 🥺`,
  });
});

export default router;
