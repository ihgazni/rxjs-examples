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
    retry,
    timeout,
} = require('rxjs/operators');


const rxop =  require('rxjs/operators')


//https://rxviz.com/examples/custom



var src = of('msg').pipe(
    delay(5000),
    timeout(2000)
)


function callback(msg_or_err) {
    //自定义接收处理函数
    //错误和正常都是消息
    console.log(msg_or_err)
}

function send_msg(msg,tmout,callback) {
    let src = of(msg).pipe(
        delay(5000),                //模拟接收延迟
        map(msg=>"receved: "+msg),  //模拟http 返回结果
        timeout(tmout),             //实现自定义timeout
        catchError(error => of(error.toString()))
    )
    let sub = src.subscribe(callback)
    return(sub)
}


var sub = send_msg('somemsg',3000,callback)
//
var sub = send_msg('somemsg',6000,callback)
