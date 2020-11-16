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
    timer,
    //fromEvent,
    combineLatest
} = require('rxjs');


const {
    take,
    concat,
    concatAll,
    combineAll,
    map,
    zip,
    first,
    multicast,
    refCount,
    observeOn,
    groupBy,
    delay,
} = require('rxjs/operators');


//https://rxviz.com/examples/custom



var obs1 = interval(1000).pipe(take(5));
var obs2 = interval(500).pipe(take(2));
var obs3 = interval(2000).pipe(take(1));
var source = of(obs1, obs2, obs3);
var example = source.pipe(concatAll());
var subscribe = example.subscribe(val => console.log(val));




var sourceOne = of(1, 2, 3);
var sourceTwo = of(4, 5, 6);
var sourceThree = sourceOne.pipe(delay(3000));
var example = sourceThree.pipe(concat(sourceTwo));
var subscribe = example.subscribe(val =>
  console.log('Example: Delayed source one:', val)
);
