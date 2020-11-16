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
    combineLatest,
    forkJoin,   //类似promiseAll
} = require('rxjs');


const rxjs =  require('rxjs')


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


const rxop =  require('rxjs/operators')


//https://rxviz.com/examples/custom

var myPromise = val => 
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );


var example = forkJoin(
  of('Hello'),
  of('World').pipe(delay(1000)),
  interval(1000).pipe(take(1)),
  interval(1000).pipe(take(2)),
  myPromise('RESULT')
);
//输出: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]  5 秒
var subscribe = example.subscribe(val => console.log(val));
