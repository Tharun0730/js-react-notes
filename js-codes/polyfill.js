// ============================================================
// 1. myMap()
// ============================================================

Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const arr1 = [1, 2, 3, 4];

console.log(
    arr1.myMap((item) => item * 2)
);

// [2, 4, 6, 8]


// ============================================================
// 2. myFilter()
// ============================================================

Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const arr2 = [1, 2, 3, 4, 5, 6];

console.log(
    arr2.myFilter((item) => item % 2 === 0)
);

// [2, 4, 6]


// ============================================================
// 3. myReduce()
// ============================================================

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(
            accumulator,
            this[i],
            i,
            this
        );
    }

    return accumulator;
};

const arr3 = [1, 2, 3, 4, 5];

console.log(
    arr3.myReduce((total, item) => total + item, 0)
);

// 15


// ============================================================
// 4. myCall()
// ============================================================

Function.prototype.myCall = function (context, ...args) {

    context = context || globalThis;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
};

const person1 = {
    name: "John"
};

function greet(age, city) {
    return `${this.name} is ${age} years old from ${city}`;
}

console.log(
    greet.myCall(person1, 25, "Chennai")
);

// John is 25 years old from Chennai


// ============================================================
// 5. myApply()
// ============================================================

Function.prototype.myApply = function (context, args) {

    context = context || globalThis;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...(args || []));

    delete context[uniqueKey];

    return result;
};

const person2 = {
    name: "John"
};

console.log(
    greet.myApply(person2, [25, "Chennai"])
);

// John is 25 years old from Chennai


// ============================================================
// 6. myBind()
// ============================================================

Function.prototype.myBind = function (context, ...args) {

    const originalFunction = this;

    return function (...newArgs) {
        return originalFunction.apply(
            context,
            [...args, ...newArgs]
        );
    };
};

const person3 = {
    name: "John"
};

const newGreet = greet.myBind(
    person3,
    25,
    "Chennai"
);

console.log(newGreet());

// John is 25 years old from Chennai
