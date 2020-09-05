// Q.3 Create a node js application and raise five different events and for every event there should be
// different listener and every event should raise after an interval of 5sec and after 10 sec remove all the
// listener for events. 

const EventEmitter = require('events');
const { exit } = require('process');

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter();

//Events listener to remove all events
emitter.on('removeData', ()=>{
    emitter.removeAllListeners();
    console.log('All Events have been removed!');
    exit();
})


//The beginning of listening to five events
emitter.on('event1', ()=>{
    console.log('Event 1 is called');
});

emitter.on('event2', ()=>{
    console.log('Event 2 is called: ');
});

emitter.on('event3', ()=>{
    console.log('Event 3 is called: ');
});

emitter.on('event4', ()=>{
    console.log('Event 4 is called: ');
});

emitter.on('event5', ()=>{
    console.log('Event 5 is called: ');
});
//The end of listening to five events

//The beginning of emitting five the five events for five seconds
setInterval(() => {
    emitter.emit('event1');
    emitter.emit('event2');
    emitter.emit('event3');
    emitter.emit('event4');
    emitter.emit('event5');
}, 5000);
//The end of emitting the five events for 5 seconds

//The beginning of removing all events within 10 seconds
setTimeout(()=>{
    emitter.emit('removeData')
}, 10000)
//The end of removing all events within 10 seconds
