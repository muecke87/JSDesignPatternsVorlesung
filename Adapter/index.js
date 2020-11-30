import {RoundPeg} from "./RoundPeg.js";
import {RoundHole} from "./RoundHole.js";
import {SquarePeg} from "./SquarePeg.js";

(function demo() {
    const hole = new RoundHole(5);
    const rpeg = new RoundPeg(5);
    const speg1 = new SquarePeg(2);
    const speg2 = new SquarePeg(20);

    if(hole.fits(rpeg)) {
        console.log('Round peg r5 fits round hole r5.')
    }

    // Füge Methode nur einer Instanz hinzu
    speg1.getRadius = function() {
        return (Math.sqrt(Math.pow((this.getWidth() / 2), 2) * 2));
    }

    // Füge Methode zum Prototype hinzu (alle Instanzen)
    SquarePeg.prototype.getRadius = function() {
        return Math.sqrt(Math.pow((this.getWidth() / 2), 2) * 2);
    }

    if (hole.fits(speg1)) {
        console.log('Square peg w2 fits round hole r5.');
    }

    if (!hole.fits(speg2)) {
        console.log('Square peg w20 does not fit round hole r5.');
    }

})();
