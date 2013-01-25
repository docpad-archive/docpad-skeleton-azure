console.log('VERSIONS:',process.versions);
console.log('ENV:',process.env);

var port = process.env.PORT || 1337;
console.log('PORT:',port);

var d = require('domain').create();
d.on('error', function(er) {
  console.error('Caught error!', er);
});
d.run(function() {
	module.exports = require(__dirname+'/node_modules/docpad/out/bin/docpad-server');
});