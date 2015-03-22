Thread-js
----------
The library uses invoked Ajax or script tags marked with the class "tjs-script-include" and downloads them from the src or if marked with class "tjs-script-execute" and needs to get a unique id so the queue can keep track on it use a "data-tjs-pid" attribute and "data-tjs-priority" for setting its order inside the array. Take extra care since conflicting pid`s may overwrite a running thread.

And the same applies to the queue conflicting priority is overwritten with the last one passed unless the option no-queue-override is set in the object instantiation then the index is summed up 1 until it reaches a free position obs: this option is not recommended as it will run synchronously on larger queues it may impact performance.

---------

Note: to prevent the browser from running the JavaScript set its type attribute as anything that is not "text/javascript" e.g. "javascript/worker"s.

```javascript
var thread = new threadJs(maxThreads) //OR
var thread = new threadJs(maxThreads, any combination of the valid flags);
```
build with grunt.
DOES NOT REQUIRE jQuery or any other library.
avalable as a npm package
