const {
    Observable,
    pipe,
    of,
} = require('rxjs');


const {
    map,
    first,
} = require('rxjs/operators');


const toUpperCase = () => source => Observable.create(subscriber => {
    const subscription = source.subscribe(
        value => { subscriber.next(value.toUpperCase()) },
        err =>  { subscriber.error(err) },
        () => { subscriber.complete()}
    )
    return subscription;
});

var op = toUpperCase()

var ob = of('a','b','c')
//ob = op(ob)
ob = const {
    Observable,
    pipe,
    of,
} = require('rxjs');


const {
    map,
    first,
} = require('rxjs/operators');


const toUpperCase = () => source => Observable.create(subscriber => {
    const subscription = source.subscribe(
        value => { subscriber.next(value.toUpperCase()) },
        err =>  { subscriber.error(err) },
        () => { subscriber.complete()}
    )
    return subscription;
});

var op = toUpperCase

var ob = of('a','b','c')
//  或 ob = op(ob)
ob = ob.pipe(op())
var sub = ob.subscribe(r=>{console.log(r)})


//operator 是个function
//    参数是一个 observable src_obee  被观察者
//        function(src_obee){...}
//    返回值也是一个 observable  new_ob
//        function(src_obee){
//            let new_obee = Observable.creat(FUNC)
//                FUNC 也是一个函数 参数是subscriber
//            return(new_obee)            
//        }
//        function(src_obee){
//            let new_obee = Observable.creat(
                  function(subscriber){
                      let src_ober = {
                          next:(value)=>{...使用subscriber.next...},
                          error:(err)=>{...使用subscriber.error...},
                          complete:()=>{...使用subscriber.complete...},
                      }
                      // 用src_ob subscribe 这个observer
                      src_obee.subscribe(src_oer);
                      //可选return 用于new_ob.unsubscribe
                      return(
                          function unsubscribe() {
                          }
                      )
                  }
//            )
//            return(new_obee)
//        }
//            FUNC 也是一个函数 参数是subscriber
   

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
    groupBy,
} = require('rxjs/operators');


var sqrt = function(src_obee) {
    let new_ob = Observable.create(
        (subscriber) => {
            //创建src observer  
            //里面调用subscriber
            let src_ober = {
                next: (value) => {
                  const result = Math.sqrt(value);
                  if (typeof value !== 'number' || isNaN(result)) {
                    subscriber.error(`Square root of ${value} doesn't exist`);
                  } else {
                    subscriber.next(result);
                  }
                },
                error: (err) => subscriber.error(err),
                complete: () => subscriber.complete()
            }
            let subscription = src_obee.subscribe(src_ober)
            return(
                function unsubscribe() {
                    console.log('unsubscribe')
                }
            )
        }
    )
    return(new_ob)
}

var obee = interval(1000).pipe(sqrt)

var sub = obee.subscribe(
    r=>{console.log(r)}
)

sub.unsubscribe()
