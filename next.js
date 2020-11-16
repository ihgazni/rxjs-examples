var {Observable} = require('rxjs')

var ob = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4); // Is not delivered because it would violate the contract
});

var sub = ob.subscribe({
    next: (r)=>{ console.log(r)},
    error: (err)=>{ console.log(err)},
    complete: (done)=> { console.log(done,'done');}
})


sub.next(1000);
sub.next(2000);

sub.complete();
sub.next(3000);

var sub = ob.subscribe({
    next: (r)=>{ console.log(r)},
    error: (err)=>{ console.log(err)},
    complete: (done)=> { console.log(done,'done');}
})


sub.next(1000);
sub.next(2000);

sub.unsubscribe();
sub.next(3000);


/*
> var sub = ob.subscribe({
...     next: (r)=>{ console.log(r)},
...     error: (err)=>{ console.log(err)},
...     complete: (done)=> { console.log(done,'done');}
... })
1
2
3
4
undefined
>
>
> sub.next(1000);
1000
undefined
> sub.next(2000);
2000
undefined
>
> sub.complete();
undefined done
undefined
> sub.next(3000);
undefined
> var sub = ob.subscribe({
...     next: (r)=>{ console.log(r)},
...     error: (err)=>{ console.log(err)},
...     complete: (done)=> { console.log(done,'done');}
... })
1
2
3
4
undefined
>
>
> sub.next(1000);
1000
undefined
> sub.next(2000);
2000
undefined
>
> sub.unsubscribe();
undefined
> sub.next(3000);
undefined
>

*/
