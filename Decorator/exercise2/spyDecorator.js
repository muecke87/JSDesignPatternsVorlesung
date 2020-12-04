'use strict'

// zu dekorieren
function login(username, password) {
    console.log("logging in with username: " + username);
}

// decorator
// todo: implementiere:
// der spy soll alle funktionsaufrufe von "login" im array "calls" speichern und die dabei mitgegebenen params
function spy() {
    function wrapper() {}
    wrapper.calls = [];
    return wrapper;
}

login = spy(login);
login('max', 's#fepw');
login('bob', '123')

for (let args of login.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}



