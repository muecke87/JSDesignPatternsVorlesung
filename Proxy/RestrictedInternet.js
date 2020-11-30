export {RestrictedInternet}

class RestrictedInternet {
    // intercept zugriff auf property, im falle von "connectTo" ist das eine function
    get(target, property) {
        const bannedSites = ['abc.com', 'def.com', 'ijk.com', 'lmn.com'];
        // intercept funktionsaufruf und leite an target weiter
        return function(...args) {
            if(bannedSites.includes(args[0])) {
                throw 'Acces denied';
            }
            target[property].call(target, args[0]);
        }
    }
}

