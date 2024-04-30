"use strict";
function test1() {
 let a = 10;
 if (a > 5) {
 a = 7;
 }
 console.log("a = " + a);
}
test1();

"use strict";
function test2A() {
 if (1 == 1) {
 var a = 5;
 }
 console.log("a = " + a);
}
test2A();

"use strict";
function test2B() {
 if (1 == 1) {
 let a = 5;
 }
 console.log("a = " + a);
}
test2B();