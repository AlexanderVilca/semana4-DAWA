var eventos = require('events')

var EmisoEventos = eventos.EventEmitter;
var ee = new EmisoEventos();

ee.on('datos', function (fecha) {
    console.log(fecha);
});
setInterval(function(){
    ee.emit('datos', Date.now());
}, 500);