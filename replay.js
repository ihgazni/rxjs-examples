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


var subject = new ReplaySubject(3); 

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
/*
> subject.next(1);
observerA: 1
undefined
> subject.next(2);
observerA: 2
undefined
> subject.next(3);
observerA: 3
undefined
> subject.next(4);
observerA: 4

*/
> subject._events
[ 2, 3, 4 ]
>


subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
/*
observerB: 2
observerB: 3
observerB: 4
*/
subject.next(5);
/*
> subject.next(5);
observerA: 5
observerB: 5
undefined
>
*/
