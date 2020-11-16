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
    throwError,
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
    catchError,
    merge,
    mergeAll,
    withLatestFrom,
} = require('rxjs/operators');


const rxop =  require('rxjs/operators')


//https://rxviz.com/examples/custom



// 每5秒发出值
var source = interval(5000);
// 每1秒发出值
var secondSource = interval(1000);
// withLatestFrom 的 observable 比源 observable 慢
var example = secondSource.pipe(
  // 两个 observable 在发出值前要确保至少都有1个值 (需要等待5秒)
  withLatestFrom(source),
  map(([first, second]) => {
    return `Source (1s): ${first} Latest From (5s): ${second}`;
  })
);
/*
  "Source (1s): 4 Latest From (5s): 0"
  "Source (1s): 5 Latest From (5s): 0"
  "Source (1s): 6 Latest From (5s): 0"
  ...
*/
var subscribe = example.subscribe(val => console.log(val));

subscribe.unsubscribe()


var source = interval(1000);
// 每1秒发出值
var secondSource = interval(5000);
// withLatestFrom 的 observable 比源 observable 慢
var example = secondSource.pipe(
  // 两个 observable 在发出值前要确保至少都有1个值 (需要等待5秒)
  withLatestFrom(source),
  map(([first, second]) => {
    return `Source (1s): ${first} Latest From (5s): ${second}`;
  })
);
/*
  "Source (1s): 4 Latest From (5s): 0"
  "Source (1s): 5 Latest From (5s): 0"
  "Source (1s): 6 Latest From (5s): 0"
  ...
*/
var subscribe = example.subscribe(val => console.log(val));

subscribe.unsubscribe()

0 1 2 3 4 | 5 6 7 8 9 | 
      <           <
