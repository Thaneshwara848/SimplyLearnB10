var Demo1 = /** @class */ (function () {
    function Demo1() {
        console.log("Hi COnstrcutor ...!");
    }
    Demo1.prototype.abc = function () {
        console.log("Abc method...!");
    };
    return Demo1;
}());
var d = new Demo1();
d.abc();
