module.exports = function(app) {
      //ping route returns ping hehe
      app.get('/ping', function(reg, res){
            res.send('pong');
      });
}
