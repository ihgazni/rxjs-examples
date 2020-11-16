var {
    Observable
} = require('rxjs');


var ob = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
      console.log('running!!!') 
      subscriber.next('hi');
  }, 1000);
})

var sub = ob.subscribe({next:r=>{console.log(r)}})
sub.unsubscribe();
//still logging running


var {
    Observable
} = require('rxjs');

var ob = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
      console.log('running!!!')
      subscriber.next('hi');
  }, 1000);
  
  return(
      function cu_unsubscribe() {
           clearInterval(intervalId); 
           console.log('release resource');
      }      
  ) 

})

var sub = ob.subscribe({next:r=>{console.log(r)}})
sub.unsubscribe();// or sub.complete()


///////////////


var observable =  new Observable(
    function(subscriber) {
         ////具体功能
         let count = 0
         let interval = setInterval(
             function () {
                 let val = Math.floor(Math.random(20)*10)
                 if(val === 13) {
                     subscriber.error('thirteen');
                 } else {
                     subscriber.next(val);  
                 }
                 if(count === 100) {
                     subscriber.complete('finished');
                 } else {
                 }
                 count = count + 1; 
             },
             1000
         )
         ////自定义unsubscribe
         return(
             function unsubscribe() {
                 clearInterval(interval);
                 interval = null;
                 console.log('unsubscribed');
                 return('unsubscribed')
             }  
         )
    }
)

var observer = {
    next:(val)=>{console.log('next: '+val)},
    error:(err) => {console.log(err)},
    complete:(r) => {console.log(r)}
}


var subscription = observable.subscribe(observer);
var unsubscribe = subscription.unsubscribe()
var rslt = unsubscribe();



/*=======================*/

var {
    Observable
} = require('rxjs');




var observable =  new Observable(
    function(subscriber) {
         ////具体功能
         let count = 0
         let interval = setInterval(
             function () {
                 let val = Math.floor(Math.random(20)*10)
                 if(val === 13) {
                     subscriber.error('thirteen');
                 } else {
                     subscriber.next(val);
                 }
                 if(count === 100) {
                     subscriber.complete('finished');
                 } else {
                 }
                 count = count + 1;
             },
             1000
         )
         ////自定义unsubscribe
         return(
             function unsubscribe() {
                 clearInterval(interval);
                 interval = null;
                 console.log('--->unsubscribed--->');
                 return('unsubscribed')
             }
         )
    }
)

var observer = {
    next:(val)=>{console.log('next: '+val)},
    error:(err) => {console.log(err)},
    complete:(r) => {console.log(r)}
}


var subscription = observable.subscribe(observer);
subscription.unsubscribe()
