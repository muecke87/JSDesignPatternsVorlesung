function Album(price) {
    this.price = price;

    // zu dekorieren (concrete component)
    this.getPrice = function() {
        return this.price;
    }
}

/*
 sicherste variante mit übergabe des contexts
 ohne context und via "this" würde folgender call fehlschlagen:
   var getPrice = sign(album.getPrice);
   console.log(getPrice());
 weil this jetzt "getPrice" ist und nicht album und dort existiert property "price" ("this.price") nicht.
 ohne context als parameter kann also this "alles" sein, jenachdem wie die function aufgerufen wird
 */
function sign(func, context) {
    return function() {
        return func.call(context) * 2;
    }
}

var album = new Album(20);
album.getPrice = sign(album.getPrice, album);
console.log(album.getPrice());

var album = new Album(30);
var getPrice = sign(album.getPrice, album);
console.log(getPrice());
