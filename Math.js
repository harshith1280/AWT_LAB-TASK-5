const { subscribe } = require("diagnostics_channel");

//Define functions
function add(a,b) {
    return a+b;
}

function Subtract(a,b) {
    return a-b;
}
//Export functions
module.exports(add,Subtract);
