const {
    Observable,
    Subject,
    BehaviorSubject,
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


var subject = new BehaviorSubject(0); // 0 is the initial value
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
//observerA: 0

subject.next(1);
//>observerA: 1
subject.next(2);
//>observerA: 2

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
//observerB: 2

subject.next(3);
//observerA: 3
//observerB: 3
