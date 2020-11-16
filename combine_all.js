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







var obee = interval(1000).pipe(take(2));


obee = obee.pipe(
  map(
      val => {
          console.log("val: ",val)   //0,1
          let obee = interval(1000).pipe(
              map(i => `Result (${val}): ${i}`), 
              take(5)
          )
          return(obee)
      }
  )
);

var sub = obee.subscribe(r=>console.log(r))
/*
*/


var obee = interval(1000).pipe(take(2));
obee = obee.pipe(
  map(
      val => {
          console.log("val: ",val)   //0,1
          let obee = interval(1000).pipe(
              map(i => `Result (${val}): ${i}`), 
              take(5)
          )
          return(obee)
      }
  )
);




var combined = obee.pipe(combineAll());

var subscribe = combined.subscribe(val => {console.log(val);console.log('--------------------');});
