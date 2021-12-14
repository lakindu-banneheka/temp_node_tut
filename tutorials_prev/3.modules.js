// Modules

// CommonJS , every file is a module (by default)
// MOdules - Encapsulated code (only share minimem)

const names = require('./4.names');
const sayHi = require('./5.utils');
const data = require('./6.alternative-flavor');
require('./7.mide-grenade')

console.log(data)

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);



// Nodes build in modules
// OS module
// PATH module
// FS module
// HTTP module