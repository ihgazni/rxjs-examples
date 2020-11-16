const {
    Observable,
    Subject,
    BehaviorSubject,
    ReplaySubject,
    AsyncSubject,
    asyncScheduler,
    queueScheduler,
    asapScheduler,
    animationFrameScheduler,
    pipe,
    of,
    from,
    interval,
} = require('rxjs');


const {
    map,
    zip,
    first,
    multicast,
    refCount,
    observeOn,
} = require('rxjs/operators');


const {
    TestScheduler,
} = require('rxjs/testing');


var timer$ = interval(1000);
var pieces$ = of('', '♞', '', '♞', '♘', '♞');
var columns$ = of('e', 'c', 'g', 'd', 'e', 'f');
var rows$ = of('4', '6', '4', '4', '2', '3');

var ob = timer$.pipe(
  zip(
    pieces$,
    columns$,
    rows$
  ),
  map(([_, piece, column, row]) => `${piece}${column}${row}`)
)

var sub = ob.subscribe(r=>{console.log(r)})
