function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function queryErrorHandler(err, req, res, next) {
  if (err.name === 'SequelizeUniqueConstraintError') {
    const { fields, parent } = err;
    res.status(400).json({
      fields: fields,
      message: parent.detail,
    });
  } else {
    next(err);
  }
}


module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  queryErrorHandler,
};
