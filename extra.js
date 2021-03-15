// export

// mod.js

exports.mod1 = '';
exports.mod2 = '';
exports.mod3 = '';

//module.export

module.exports = {
    mod1: '',
    mod2: '',
    mod3: ''
}

var mod = require('./mod'); // === {mod1, mod2, mod3}

mod.mod1
mod.mod2


module.exports = (nums)=>{};

require('./mod')([1,2,3]);

var func = require('./mod')