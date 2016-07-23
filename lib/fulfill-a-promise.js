var promise = new Promise(executor);

function executor(fulfill, reject) {
    setTimeout( function() {
      fulfill('FULFILLED!')
    }, 300);
};

promise.then(function(value) { console.log(value) });
