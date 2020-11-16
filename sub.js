var {Observable} = require('rxjs')


var ob = new Observable(
    (sub) => {
        sub.next(1);
    }
)

var sub = ob.subscribe({
    next(r) {
        console.log(r)
    },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); } 
})


var ob2 = new Observable(
    (sub) => {
        sub.next(1);
        sub.complete();
    }
)

var sub2 = ob2.subscribe({
    next(r) {
        console.log(r)
    },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
})



/*
> sub.closed
false
> sub2.closed
true
> sub.complete()
done
undefined
> sub.closed
true
>

*/
