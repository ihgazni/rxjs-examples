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
    mergeMap, 
    retry
} = require('rxjs/operators');


const rxop =  require('rxjs/operators')


//https://rxviz.com/examples/custom


// 每1秒发出值
var source = interval(1000);
var example = source.pipe(
  mergeMap(val => {
    // 抛出错误以进行演示
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
  // 出错的话可以重试2次
  retry(2)
);
/*
  输出:
  0..1..2..3..4..5..  //try
  0..1..2..3..4..5..   //retry
  0..1..2..3..4..5..   //retry
  "Error!: Retried 2 times then quit!"
*/
var sub = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: Retried 2 times then quit!`)
});



// 每1秒发出值
var source = interval(1000);
var example = source.pipe(
  mergeMap(val => {
    // 抛出错误以进行演示
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
);
/*
  输出:
  0..1..2..3..4..5..  //try
  "Error!: Retried 2 times then quit!"
*/
var sub = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: Retried 2 times then quit!`)
});


// 每1秒发出值
var source = interval(1000);
var example = source.pipe(
  mergeMap(val => {
    // 抛出错误以进行演示
    if (val > 5) {
      return throwError('Error!');
    }
    return of(val);
  }),
  retry(1)
);
/*
  输出:
  0..1..2..3..4..5..  //try
  0..1..2..3..4..5..  //retry
  "Error!: Retried 2 times then quit!"
*/
var sub = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: Retried 2 times then quit!`)
});
