const moment = require('moment')
var dateelem = document.getElementById('date');
var timeelem = document.getElementById('time');
dateelem.innerHTML = moment().format('MMMM Do')
timeelem.innerHTML = moment().format('h:mm a')
