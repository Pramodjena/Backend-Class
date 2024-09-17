const logRequestDetails = (req, res, next) => {
  console.log(
    `${req.method} request for ${
      req.url
    } and visited time ${new Date().toLocaleTimeString()}`
  );
  next();
};

module.exports = logRequestDetails;
