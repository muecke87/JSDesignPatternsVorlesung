function Album(price) {
    this.price = price;

    // zu dekorieren (concrete component)
    this.getPrice = function() {
        return this.price;
    }
}

// decorator
/**
 * todo: funktioniert nicht immer, weshalb?
 * verbessere die funktion
 */

function sign(func) {
    return function() {
        return func.call(this) * 2;
    }
}

// funktioniert
var album = new Album(20);
album.getPrice = sign(album.getPrice);
console.log(album.getPrice());

// funktioniert nicht
var album = new Album(30);
var getPrice = sign(album.getPrice);
console.log(getPrice());
