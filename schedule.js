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
    first,
    multicast,
    refCount,
    observeOn,
} = require('rxjs/operators');


var observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
})

observable = observable.pipe(
  observeOn(asyncScheduler)
);

var observer = {
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
     console.log('done');
  }
}








function run() {
    console.log('just before subscribe');
    observable.subscribe(observer);
    console.log('just after subscribe');
}
run()

/*
null	By not passing any scheduler, notifications are delivered synchronously and recursively. Use this for constant-time operations or tail recursive operations.
queueScheduler	Schedules on a queue in the current event frame (trampoline scheduler). Use this for iteration operations.
asapScheduler	Schedules on the micro task queue, which is the same queue used for promises. Basically after the current job, but before the next job. Use this for asynchronous conversions.
asyncScheduler	Schedules work with setInterval. Use this for time-based operations.
animationFrameScheduler	Schedules task that will happen just before next browser content repaint. Can be used to create smooth browser animations.
*/
