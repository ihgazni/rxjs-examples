

function creat_observer(n,e,c) {
    let d = {
        next: n;
        error: e;
        complete:c;
    } 
    return(d)
}


//obee
//ober
//sub
/* 
    var obee = new Observable(
        sub => {
            try{
                sub.next(v0);
                sub.next(v1);
                sub.complete();
            } catch (err) {
                sub.error(err);
            }
        }
        //可选
        return(
            function unsubscribe() {
                //释放资源代码
            }
        )  
    )
*/
// var sub = obee.subscribe(ober)
//     sub.unsubscribe()
//     sub.complete()
//     sub.next()
