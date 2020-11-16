const {
    Observable,
    pipe,
    of,
} = require('rxjs');


const {
    map,
    filter,
    first,
} = require('rxjs/operators');


function creat_discard$odd$then$double_operator() {
    return(
        pipe(
            filter(v => ! (v % 2)),
            map(v => v + v),
        )
    )
}

var op = creat_discard$odd$then$double_operator()
var obee = of(1,2,3,4,5,6)
obee = op(obee)
var sub = obee.subscribe(r=>{console.log(r)})


