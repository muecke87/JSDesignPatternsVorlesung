const createCachedFunction = (func) => {
    const handler = {
        // cache where we store the arguments we already called and their result
        cache: {},
        /**
         * @todo:
         * - use apply-trap to intercept function call
         * - assume the function only takes one argument
         * - check if function was already called with given argument (hint: use 'hasOwnProperty')
         *   - if so, return stored ('cached') result
         *   - it not, call targeted function and store result in cache
         * - return new proxy object instead of function result
         **/
    }
    return func;
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
