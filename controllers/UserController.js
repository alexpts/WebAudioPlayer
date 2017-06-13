module.exports = (app) => {
  app.route('/')
    .get(function(req, res){
      res.sendStatus(200);
    })
}
