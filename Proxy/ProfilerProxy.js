let profiler = {
    countAccess: 0,
    get: function(target, property) {
        this.countAccess++;
        return target[property];
    },
    getCountAccess: function(){
      return this.countAccess
    }
}
let car = {brand: 'BMW'};
let carProxy = new Proxy(car, profiler);
for(let i=0; i< 25; i++) {
    console.log(carProxy.brand);
}
console.log(profiler.getCountAccess());
