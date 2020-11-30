export {RestrictedInternet}

class RestrictedInternet {
    bannedSites = ['abc.com', 'def.com', 'ijk.com', 'lmn.com']

    // intercept zugriff auf property, im falle von "connectTo" ist das eine function
    get(target, property) {
        const self = this;
        // intercept funktionsaufruf und leite an target weiter
        return function(...args) {
            if(self.bannedSites.includes(args[0])) {
                throw new Error('Acces denied');
            }
            target[property].call(target, args[0]);
        }
    }
}

