var {of} = require('rxjs');
var ob = of(1, 2, 3, 4, 5);
var sub = ob.subscribe(val => console.log(val));

var ob = of(
    { name: 'Brian' }, 
    [1, 2, 3], 
    function hello() {
        return 'Hello';
    }
);

var sub = ob.subscribe(val => console.log(val));

