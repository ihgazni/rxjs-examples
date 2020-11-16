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

var source = rxjs.concat(of(1,2,3,48), of('This', 'Never', 'Runs'));
// 输出: 0,1,2,3,4....

// 输出: 0,1,2,3,4....
var subscribe = source.subscribe(val => console.log(val));

