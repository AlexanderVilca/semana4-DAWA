const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('eventA', () => console.log('Listener 1 for eventA executed'));
myEmitter.on('eventA', () => console.log('Listener 2 for eventA executed'));

myEmitter.emit('eventA');
