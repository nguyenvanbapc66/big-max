const startUtil = require('./BmApp/startUtil')
startUtil.startApp(function (err) {
  console.log(err);
  const ClassUser = require('./model/user');
  const user = new ClassUser();
  user.new({name: 'Sep Nam', yearOfBirth: 1988});

})