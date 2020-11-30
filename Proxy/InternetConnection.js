import {RealInternet} from "./RealInternet.js";

export {InternetConnection}

class InternetConnection {
    static create() {
        return new RealInternet();
    }
}

