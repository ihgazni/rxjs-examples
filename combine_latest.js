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

function run(){
    // timerOne 在1秒时发出第一个值，然后每4秒发送一次
    var timerOne = timer(1000, 4000);
    // timerTwo 在2秒时发出第一个值，然后每4秒发送一次
    
    var timerTwo = timer(2000, 4000);
    // timerThree 在3秒时发出第一个值，然后每4秒发送一次
    var timerThree = timer(3000, 4000);
    
    // 当一个 timer 发出值时，将每个 timer 的最新值作为一个数组发出
    var combined = combineLatest(timerOne, timerTwo, timerThree);
    
    var now = parseInt((new Date()).getTime()/1000)
    console.log(now - now)
    var subscribe = combined.subscribe(latestValues => {
        let [timerValOne, timerValTwo, timerValThree] = latestValues;
        let curr = parseInt((new Date()).getTime()/1000);
        console.log(curr-now,[timerValOne, timerValTwo, timerValThree]);
        now = curr;
      }
    );
    return(subscribe)
}
var subscribe = run()
/*
0                  //初始                            1:剩余1秒发射  2:剩余2秒发射  3:剩余3秒发射

3 [ 0, 0, 0 ]      //3 秒后  3发射触发输出           1:剩余2秒发射  2:剩余3秒发射  3:剩余4秒发射
2 [ 1, 0, 0 ]      //2 秒后  1发射触发输出           1:剩余4秒发射  2:剩余1秒发射  3:剩余2秒发射
1 [ 1, 1, 0 ]      //1 秒后  2发射触发输出           1:剩余3秒发射  2:剩余4秒发射  3:剩余1秒发射
1 [ 1, 1, 1 ]      //1 秒后  3发射触发输出           1:剩余2秒发射  2:剩余3秒发射  3:剩余4秒发射
2 [ 2, 1, 1 ]      //2 秒后  1发射触发输出           1:剩余4秒发射  2:剩余1秒发射  3:剩余2秒发射
1 [ 2, 2, 1 ]      //1 秒后  2发射触发输出           1:剩余3秒发射  2:剩余4秒发射  3:剩余1秒发射
1 [ 2, 2, 2 ]      //1 秒后  3发射触发输出           1:剩余2秒发射  2:剩余3秒发射  3:剩余4秒发射
2 [ 3, 2, 2 ]
1 [ 3, 3, 2 ]
1 [ 3, 3, 3 ]
2 [ 4, 3, 3 ]
1 [ 4, 4, 3 ]
1 [ 4, 4, 4 ]
2 [ 5, 4, 4 ]
1 [ 5, 5, 4 ]
*/
subscribe.unsubscribe()



