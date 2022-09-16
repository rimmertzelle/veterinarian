export function myLogger(req, res, next) {
  if (req.query) {
    console.log(`I found these params: ${Object.keys(req.query)}`);
  }
  next();
}
