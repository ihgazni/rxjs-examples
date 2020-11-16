const {
    Observable,
    Subject,
    BehaviorSubject,
    ReplaySubject,
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
} = require('rxjs/operators');


var subject = new ReplaySubject(100, 500 /* windowTime */);
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
let i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
}, 1000);
 
