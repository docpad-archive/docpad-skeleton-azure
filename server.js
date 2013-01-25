console.log('ENV:',process.env);
var d = require('domain').create();
d.on('error', function(er) {
  console.error('Caught error!', er);
});
d.run(function() {
	module.exports = require(__dirname+'/node_modules/docpad/out/bin/docpad-server');
});