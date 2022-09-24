const createCachedFunction = (func) => {
    const handler = {
        // cache where we store the arguments we already called and their result
        cache: {},

        // using apply-trap to intercept function call
        apply: function (target, that, args) {
            // we are assuming the function only takes one argument
            const argument = args[0];
            // we check if the function was already called with this argument

            if (this.cache.hasOwnProperty(argument)) {
                console.log('Returning cached result');
                return this.cache[argument];
            }

            // if the function was never called we call it and store the result in our cache
            this.cache[argument] = target(args);
            return this.cache[argument];
        }
    }

    // todo: return proxy instead of func
    return new Proxy(func, handler);
};


const slow = (arg) => {
    const promise = new Promise(function (resolve) {
        console.log('Slow function called');
        global.setTimeout(() => {
            resolve('called with: ' + arg);
        }, 3000);
    });
    return promise;
};

const cachedFunction = createCachedFunction(slow);

const main = async () => {
    let param = 'first';
    console.log('param: ' + param);
    console.log(await cachedFunction(param));

    param = 2;
    console.log('param: ' + param);
    console.log(await cachedFunction(param));

    console.log('param: ' + param);
    console.log(await cachedFunction(param));
}

main();
