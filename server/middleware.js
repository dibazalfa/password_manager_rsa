class Middleware {
  async checkMasterKey(req, res, next) {
    let key = req.body.key;
    if (key == "test") {
      return next();
    } else {
      return res.status(400).send({
        code: 400,
        message: 'Invalid Master Key'
      });
    }
  }
}

export const middleware = new Middleware();