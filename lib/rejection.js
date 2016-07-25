var promise = new Promise(executor);

function executor(fulfill, reject) {
    
  var err = new Error('REJECTED!');

  setTimeout(function() {
    reject(err);
  }, 300);
}

promise.then(function() {}, function(error) {console.log(error.message)});
