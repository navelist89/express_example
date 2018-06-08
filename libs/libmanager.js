var express = require('express');
var fs = require('fs');
var path = require('path');

/*
function listdirs(dir, done) {
	let results = [];

	fs.readdir(dir, function(err, list) {
    if(err){ done(err);return;};
		list.forEach(function(file){
			file = path.resolve(dir, file);

			fs.stat(file, function(err, stat){
				// If directory, execute a recursive call
				if (stat && stat.isDirectory()) {
					results.push(file);
          if(done)
					done(null,file);
				}
			});

		});
	});
	return results;
};
*/

function listdirs(dir, done){

  var results = [];

fs.readdirSync(dir).forEach(function(file){
	file = path.resolve(dir, file);
	fs.stat(file, function(err, stat){
	if ( stat && stat.isDirectory()){
    results.push(file);
    if(done)
      done(null, file);
	}
	});
});

  return results;
}

module.exports.listdirs = listdirs;
