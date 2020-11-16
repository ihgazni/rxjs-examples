const {
    Observable,
    Subject,
    pipe,
    of,
    interval,
} = require('rxjs');


const {
    map,
    first,
} = require('rxjs/operators');




//不同的客户端接收处理函数,接收者编程自定义
var handler_a = {
    next:(val)=>{console.log('fst 收到通知: '+val)},//这里发送真正的 http 到前端
    error:(err) => {console.log(err)},
    complete:(r) => {console.log(r)}
}

var handler_b = {
    next:(val)=>{console.log('snd 收到通知: '+val)},  ////这里发送真正的 http 到前端
    error:(err) => {console.log(err)},
    complete:(r) => {console.log(r)}
}


//广播源头
var src =  new Subject()
//不同的客户端 注册到 广播源头
var client_a  =  src.subscribe(handler_a);
var client_b  =  src.subscribe(handler_b);
//广播消息通知
src.next('有用户 改变了 id=xxxx 的div ')
src.next('有用户 插入了一个 <script> ')




class Client {
    constructor(userid) {
        this.userid = userid;
        this.handler = {
            next:(val)=>{
                if(val.userid !== this.userid) {
                    console.log(this.userid + ' recv msg: '+val.data + 'from: ' + val.userid)
                }
            },
            error:(err) => {console.log(err)},
            complete:(r) => {console.log(r)}
        }
    }
    //加入频道
    join_channel(channel) {
        this.channel = channel
        this.channel.subscribe(this.handler)
    }
    send_msg(msg){
        //发送消息到控制中心
        msg = {
            userid:this.userid,
            data:msg
        }
        this.channel.next(msg);
    }
    recv_msg(){
        //处理收到的消息
        this.channel(this.handler)
    }
}

var channel = new Subject()

var tom = new Client('tom')
tom.join_channel(channel)


var jerry = new Client('jerry')
jerry.join_channel(channel)


tom.send_msg('hello jerry!')
jerry.send_msg('hello jerry!')




频道[可以把一个前端页面当作一个频道]
    用户[可以把每个页面的每个DOM元素 当作一个用户]   用户[]   用户[]

比如我有个页面是 叫首页main   main就是个频道
<html id="html-rrrr">
    <head id="自动生成的uuid head-xxxxx">
    </head>
    <body id="自动生成的uuid body-yyyyy">
        <div id="自动生成的uuid div-zzzzz">
    </body>
</html>

相当于 3个 用户  head   和  body  div 加入了 频道main 

靠uuid 区分     只要3个字段 就能平坦化   想速度快就多加字段

user            parent          left-sib        right-sib
head-xxxxx      html-rrrr       null            body-yyyyy
body-yyyyy      html-rrrr       head-xxxxx      null
div-zzzzz       body-yyyyy      null            null
