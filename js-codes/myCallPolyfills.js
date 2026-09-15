Function.prototype.myCall = function (context, ...args) {

    context = context || globalThis;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
};
