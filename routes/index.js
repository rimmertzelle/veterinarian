import express from 'express';
const router = express.Router();

router.get('/sayhi', (req, res, next) => {
  res.json('hi');
});

/**
 * Add options to 
*/
router.options('/appointment', (req, res, next) => {
  //set header before response
  res.header({
    allow: 'GET, HEAD, POST, OPTIONS',
    'Content-type': 'application/json',
    Data: Date.now(),
    'Content-length': 0,
  });
  //response
  res.sendStatus(200);
});

router.get('/appointment', (req, res, next) => {});
router.post('/appointment', (req, res, next) => {});
router.delete('/appointment', (req, res, next) => {});

export default router;
