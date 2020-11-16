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
} = require('rxjs/operators');


//https://rxviz.com/examples/custom



var src1 = interval(1000);
src1 = src1.pipe(
    take(10),
    map(r=>'src1: '+r)
)
// 发出 4,5,6
var src2 = interval(2000);
src2 = src2.pipe(
    map(r=>'src2: '+r)
)


// 先发出 sourceOne 的值，当完成时订阅 sourceTwo
var example = src1.pipe(concat(src2));
// 输出: 1,2,3,4,5,6
var subscribe = example.subscribe(val =>
  console.log(val)
);
/*
> src1: 0
src1: 1
src1: 2
src1: 3
src1: 4
src1: 5
src1: 6
src1: 7
src1: 8
src1: 9
src2: 0
src2: 1
src2: 2
....
*/
