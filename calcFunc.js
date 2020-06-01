/* jshint esversion: 6 */

function zero(fn) { if (!!fn) { return parseInt(eval(`0${fn}`)); } else { return 0; } }
function one(fn) { if (!!fn) { return parseInt(eval(`1${fn}`)); } else { return 1; } }
function two(fn) { if (!!fn) { return parseInt(eval(`2${fn}`)); } else { return 2; } }
function three(fn) { if (!!fn) { return parseInt(eval(`3${fn}`)); } else { return 3; } }
function four(fn) { if (!!fn) { return parseInt(eval(`4${fn}`)); } else { return 4; } }
function five(fn) { if (!!fn) { return parseInt(eval(`5${fn}`)); } else { return 5; } }
function six(fn) { if (!!fn) { return parseInt(eval(`6${fn}`)); } else { return 6; } }
function seven(fn) { if (!!fn) { return parseInt(eval(`7${fn}`)); } else { return 7; } }
function eight(fn) { if (!!fn) { return parseInt(eval(`8${fn}`)); } else { return 8; } }
function nine(fn) { if (!!fn) { return parseInt(eval(`9${fn}`)); } else { return 9; } }

function plus(num) { return `+${num}`; }
function minus(num) { return `-${num}`; }
function times(num) { return `*${num}`; }
function dividedBy(num) { return num==0 ? 0 : `/${num}`; }

console.log(one(plus(two(two()))));
console.log(seven(times(five())), 35);
