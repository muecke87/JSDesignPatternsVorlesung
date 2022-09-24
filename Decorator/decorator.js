function double(func, context = this) {
    const factor = 2;
    return function(...params) {
        return func.call(context, ...params) * factor;

    }
}

let mySum = (a, b) => a+b;
console.log(mySum(5, 3));
console.log(double(mySum)(5, 3));

let myObject = {
    b: 5,
    addB: function(a) {
        return a+ this.b;
    }
}

console.log(double(myObject.addB, myObject)(5))