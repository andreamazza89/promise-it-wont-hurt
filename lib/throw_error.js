function parsePromised(json) {
  return new Promise(function(fulfill, reject) {
    try{
      var parsedInput = JSON.parse(json);
      fulfill(parsedInput)
    } catch(e) {
      reject(e)
    }
  });
};

parsePromised(process.argv[2]).catch(console.log);
