'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

class EventEmitter {
  constructor() {
    this.funcList = {};
  }

  on(funcName, func) {
    if (this.funcList[funcName]) {
      this.funcList[funcName].push(func);
    } else {
      this.funcList[funcName] = [func];
    }
  }

  trigger(funcName, ...args) {
    if (this.funcList[funcName]) {
      this.funcList[funcName].forEach((func) => {
        func(...args);
      });
    }
  }
}

module.exports = EventEmitter;

// -- TESTING EventEmitter -- //
// const instance = new EventEmitter();
// let counter = 0;
// instance.on('increment', () => {
//   counter += 1;
// });
// console.log('counter: ', counter); // counter should be 0

// instance.trigger('increment');
// console.log('counter: ', counter); // counter should be 1

// instance.trigger('increment');
// console.log('counter: ', counter); // counter should be 2
