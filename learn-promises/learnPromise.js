// callback

// var action = (cb)=>{
//     setTimeout(()=>{
//         cb('hey', cb);
//     }, 5000);
// };

// action((arg)=>{
//     console.log(arg);
// })

//use Promise
var action = (cb)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			// resolve('hey');
			reject(new Error('noooo'));
	}, 5000);
	})
};

action()
	.then((word)=>{
		console.log(word)
	})
	.catch((err)=>{
		console.log(err);
	})

// var promise = action();
// promise.then()
