export {SquarePeg}

class SquarePeg {
    constructor(width) {
    this.width = width
    }

    getWidth() {
        return this.width;
    }

    getSquare() {
        return Math.pow(this.width, 2);
    }
}
