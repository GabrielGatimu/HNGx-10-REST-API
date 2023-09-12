const notFound = (req, res, next) => {
  const error = new Error(`Route Not Found -  ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statuscode === 200 ? 500 : res.statusCode;
  let errorMessage = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    errorMessage = err.message;
  }

  res.status(statusCode).json({
    errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
