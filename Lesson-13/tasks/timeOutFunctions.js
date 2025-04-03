"use strict";

timeOutId = setTimeout(() => {
   alert('hello')
   
}, 3000);

setTimeout(() => {
   clearTimeout(timeOutId)
   console.log('stop' + timeOutId)
}, 7000);

let intervalId = setInterval(() => {
   alert('some new text')
}, 2000);

setTimeout(() => {
   clearInterval(intervalId)
}, 8000);
