export function HttpMiddleware(req, res, next) {
  console.log(`http`);
  next();
}
