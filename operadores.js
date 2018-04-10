document.write("operadores <br>");

var a = b = c = d = e = 100;

a += 5;
b -= 5;
c *= 5;
d /= 5;
e %= 5;

document.write("a: " + a + " <br>");
document.write("b: " + b + " <br>");
document.write("c: " + c + " <br>");
document.write("d: " + d + " <br>");
document.write("e: " + e + " <br>");

document.write("----- comparação ------<br>");

var z0 = 1;
var z1 = 2;
var z3 = "1";

document.write("z0==z1: " + (z0==z1) + " <br>");
document.write("z0==z3: " + (z0==z3) + " <br>");
document.write("z0===z3: " + (z0===z3) + " <br>");

document.write("z0!=z3: " + (z0!=z3) + " <br>");
document.write("z0!==z3: " + (z0!==z3) + " <br>");

document.write("z0>z1: " + (z0>z1) + " <br>");
document.write("z0>=z1: " + (z0>=z1) + " <br>");

document.write("z0 < z1: " + (z0 < z1) + " <br>");
document.write("z0<=z1: " + (z0<=z1) + " <br>");

var t = 10;
document.write("t++: " + (t++) + " <br>");
document.write("t: " + (t) + " <br>");

var x = 10;
document.write("++x: " + (++x) + " <br>");
document.write("x: " + (x) + " <br>");

document.write("BITWISE <br>");

var q = 10;
var w = 20;

document.write("q << w: " + (q<<w) + "<br>");

document.write("LÓGICOS <br>");
document.write("a > b && b > c: " + (a > b && b > c) + "<br>");
document.write("a > b || b > c: " + (a > b || b > c) + "<br>");

var l = a > b ? "MAIOR" : "MENOR"; //operador ternário
console.log (l);