const {
    Observable,
    of,
} = require('rxjs');


const {
    map,
    first,
} = require('rxjs/operators');



var obee = of(1, 2, 3);
obee = map(x => x * x)(obee);
var sub = obee.subscribe((v) => console.log(`value: ${v}`));

