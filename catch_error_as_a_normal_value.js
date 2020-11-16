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
} = require('rxjs/operators');


const rxop =  require('rxjs/operators')


//https://rxviz.com/examples/custom

var myPromise = val => 
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );


var example = forkJoin(
  myPromise('RESULT'),
  throwError('mu error!!!!')
);
//
var subscribe = example.subscribe(val => console.log(val));

var example = forkJoin(
  myPromise('RESULT'),
  throwError('mu error!!!!')
).pipe(catchError(error => of(error)));
//
var subscribe = example.subscribe(val => console.log(val));



var example = forkJoin(
    of('tst delay msg').pipe(delay(5000)),     //模拟一个延迟5秒发送的消息
    throwError('test error!!!!').pipe(catchError(error => of(error)))   //模拟发生异常,但只把异常当作返回值
);
//
var subscribe = example.subscribe(val => console.log(val));
