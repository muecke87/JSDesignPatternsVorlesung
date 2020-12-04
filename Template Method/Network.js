export {Network}

class Network {
    constructor(username, password, doLogin, doLogout, goSendData) {
        this.username = username;
        this.password = password;
        this.doLogin = doLogin;
        this.doLogout = doLogout;
        this.goSendData = goSendData;
    }

    post(message) {
        if (this.doLogin(this.username, this.password)) {
            this.goSendData(message);
            this.doLogout.call(this);
        }
    }
}



