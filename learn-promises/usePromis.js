var fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

// fs.readFile('../package.json', (err, file)=>{
//   console.log(file.toString())
// });

// console.log('after read file');

var readFile = () => {
  return new Promise((resolve, reject)=>{
    fs.readFile('../package.json', (err, file)=>{
      return err ? reject(err) : resolve(file.toString());
    });
  })
}

var logFile = ()=>{
  return readFile()
    .then(()=>{
      return readFile()
    });
}

var readAllFiles = ()=>{
  var promises = [readFile(), readFile(), readFile()];
  return Promise.all(promises); // not do until all promises finish
};

readAllFiles()
  .then((files)=>{
    console.log(files); // return array of promises value
  })

readFile()
  .then(logFile, (err)=>{

  })
  // .then(sendFile)
  // .then(callHome)
  // .catch(()=>{})


readFile()
  .then((file)=>{
    // console.log(file);
    return 'hey';
  })
  .then((word)=>{
    console.log(word)
  })
  .catch((err)=>{})
  // .finally()