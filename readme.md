## This problem has been resolved in Ver3.3.5.

link: https://jira.mongodb.org/browse/NODE-2267

## 参考

https://qiita.com/usabarashi/items/3854a1da0e47feb93ba0

## QuickStart

```
$ docker-compose up -d
$ docker-compose exec a mongo /tmp/conf/init.js
$ docker-compose exec node sh
$ npm i && npm run build
$ npm run start
> 0times
> waiting....
> { _id: 5db27454b77b210040f2f84e, id: 1, text: 'hogehoge' }
> 1times
> waiting....
> { _id: 5db27454b77b210040f2f84e, id: 1, text: 'hogehoge' }
> xtimes
> waiting....
> { _id: 5db27454b77b210040f2f84e, id: 1, text: 'hogehoge' }
-------------------
<open another terminal>
3 seconds after "waiting ...." is displayed

$ docker-compose restart a b c
------------------
> xtimes
> waiting....
> (node:4360) UnhandledPromiseRejectionWarning: MongoTimeoutError: Server selection timed out after 30000 ms
>     at Timeout.setTimeout [as _onTimeout] (/var/work/node_modules/mongodb/lib/core/sdam/topology.js:878:9)
>     at ontimeout (timers.js:436:11)
>     at tryOnTimeout (timers.js:300:5)
>     at listOnTimeout (timers.js:263:5)
>     at Timer.processTimers (timers.js:223:10)
> (node:4360) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an > async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
> (node:4360) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that 
> are not handled will terminate the Node.js process with a non-zero exit code.
```
