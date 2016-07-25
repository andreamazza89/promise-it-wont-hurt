'use strict';

var promise = new Promise(executor);

function executor(fulfill, reject) {
  fulfill('I FIRED');
  let error = new Error('I DID NOT FIRE');
  reject(error);
};

promise.then(function(data) {console.log(data)}, function(error) {console.log(error.message)});
