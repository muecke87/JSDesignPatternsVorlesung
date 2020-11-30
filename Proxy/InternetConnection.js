import {RealInternet} from "./RealInternet.js";
import {RestrictedInternet} from "./RestrictedInternet.js";

export {InternetConnection}

class InternetConnection {
    static create() {
        return new Proxy(new RealInternet(), new RestrictedInternet());
    }
}

