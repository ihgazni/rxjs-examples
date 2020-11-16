const {
    Observable,
    of,
} = require('rxjs');


const {
    map,
    first,
} = require('rxjs/operators');



var obee = of(10, 2, 3);
obee = obee.pipe(
    map(x=>x*x),
    first(),
)
var sub = obee.subscribe((v) => console.log(`value: ${v}`));

