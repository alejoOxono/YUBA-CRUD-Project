const server = require('./src/app.js');
const { connect } = require('./src/db.js');

connect.sync({ force: false }).then(() => {
  try{
    server.listen(3002, async() => {
      console.log('Listening at 3002');
    });
  }catch(err){
    console.log(err);
  }
});
