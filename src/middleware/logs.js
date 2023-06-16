const pathLog = (req, res, next) => {
  console.log(`API Hit from ${req.path}`);
  next();
};

module.exports = pathLog;
