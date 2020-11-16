var {Observable} = require('rxjs')

//创建一个observable
var observable = new Observable(
    function(subscriber) {
       subscriber.next('value');
       subscriber.error('error');
       subscriber.complete('complete');
       //可选return, 被subscriber.unsubscribe() 时触发
       return(
          function cu_unsubscribe() {
              clearInterval(intervalId);
              console.log('release resource');
          }
       )
       //
    }
)

//创建一个observer
var observer = {
    next: (value)=>{ console.log("next: ",value)},  //value 捕获的 subscriber.next(value)
    error: (error)=>{console.log("error: ",error)}, //err 捕获的 subscriber.error(error);
    complete:(done) => {console.log("complete: ",done)} //对应subscriber.complete()
}

//返回值是一个subscriber
var subscriber = observable.subscribe(observer);


////
var {Observable} = require('rxjs')

var observable = Observable.create(function subscribe(subscriber) {
  console.log(subscriber)
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // Is not delivered because it would violate the contract
});



var observer = {
    next: (r)=>{ console.log(r)},
    error: (err)=>{ console.log(err)},
    complete: (done)=> { console.log(done,'done');}
}

var subscriber = observable.subscribe(observer)






var ob = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});


console.log('just before subscribe');

ob.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');



var {Observable} = require('rxjs')

var ob = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // Is not delivered because it would violate the contract
});

var sub = ob.subscribe({
    next: (r)=>{ console.log(r)},
    error: (err)=>{ console.log(err)}, 
    complete: (done)=> { console.log(done,'done');} 
})



