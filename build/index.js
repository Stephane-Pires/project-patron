"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_import_1 = require("./test-import");
console.log('Hello World!');
var a = 3;
var b = 4;
function multiplyByTwo(number) {
    return number * 2;
}
multiplyByTwo(a);
multiplyByTwo(b);
console.log('CONST', test_import_1.CONST);
