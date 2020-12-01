import {Network} from "./Network.js";

function demo() {
    const username = 'samu';
    const password = 'xyz';
    const message = 'Hi from me';

    const network = new Network(username, password, fb.login, fb.logOut, fb.sendData)
    network.post(message);
}

const fb = {
    login: function (username, password) {
        console.log('Checking user parameters');
        console.log('Name: ' + username);
        process.stdout.write('Password: ');
        for (let i = 0; i < password.length; i++) {
            process.stdout.write('*');
        }
        console.log('\nLogIn success on Facebook');
        return true;
    },

    sendData: function (message) {
        console.log("Message: '" + message + "' was posted on Facebook");
    },

    logOut: function () {
        console.log("User: '" + this.username + "' was logged out from Facebook");
    }
}

demo();
