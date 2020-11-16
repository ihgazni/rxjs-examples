const {
    Observable,
    Subject,
    pipe,
    of,
    from,
    interval,
} = require('rxjs');


const {
    map,
    first,
    multicast,
} = require('rxjs/operators');


var arr = [1, 2, 3]

var ovbervers = [
    {
      next: (v) => console.log(`observerA: ${v}`)
    },
    {
      next: (v) => console.log(`observerB: ${v}`)
    }
]






// This is, under the hood, `source.subscribe(subject)`:


function multi(arr,ovbervers) {
    var source = from(arr);
    var subject = new Subject();
    var multicasted = source.pipe(multicast(subject));
    ovbervers.forEach(
        ovberver => {
            multicasted.subscribe(ovberver)
        }
    )
    var sub = multicasted.connect();
    return(sub)
}

multi(arr,ovbervers)


