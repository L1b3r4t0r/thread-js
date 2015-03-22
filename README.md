Thread-js
----------
The library uses a Ajax call to get the files using a url given by you or you can pass in a request to the api to load the file form a script tag src atribute.

Queue conflicting priority is overwritten with the last one passed unless the option no-queue-override is set in the object instantiation then the index is summed up 1 until it reaches a free position obs: this option is not recommended as it will run synchronously on larger queues it will impact performance.

---------

Note: to prevent the browser from running the JavaScript set its type attribute as anything that is not "text/javascript" e.g. "javascript/worker"s.

```javascript
var thread = new threadJs(maxThreads) //OR
var thread = new threadJs(maxThreads, any combination of the valid flags);
```
Just listen to the 'ThreadReady' event to wakeup your code.
build with grunt.
DOES NOT REQUIRE jQuery or any other library.
avalable as a npm package