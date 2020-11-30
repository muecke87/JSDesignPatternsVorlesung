import {InternetConnection} from "./InternetConnection.js";

(function demo() {
    const internet = InternetConnection.create();
    internet.connectTo('ibw.com');
    internet.connectTo('abc.com');

})();
