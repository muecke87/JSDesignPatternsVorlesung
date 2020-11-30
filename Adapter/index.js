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

    // führt zur runtime exception, SquarePeg hat keine Methode getRadius
    if (hole.fits(speg1)) {
        console.log('Square peg w2 fits round hole r5.');
    }

    // führt zur runtime exception, SquarePeg hat keine Methode getRadius
    if (!hole.fits(speg2)) {
        console.log('Square peg w20 does not fit round hole r5.');
    }

})();
