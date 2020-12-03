'use strict'

// zu dekorieren
function login(username, password) {
    console.log("logging in with username: " + username);
}


function spy(func) {
    function wrapper(...args) {
        // using ...args instead of arguments to store "real" array in wrapper.calls
        wrapper.calls.push(args);
        return func(...args);
    }
    wrapper.calls = [];
    return wrapper;
}

login = spy(login);
login('max', 's#fepw');
login('bob', '123')

for (let args of login.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}



