$('.boton_play, .boton_play a, .boton_play img').on('click', function () {
    $('audio')[0].play();
});


var contrasena = 'arma futurama auto';
var correcto = false;


$('#texto').on('keyup', function () {

    if ($('#texto').val() == contrasena) {
        /*$('#mensaje').removeClass().addClass('verde').text('CORRECTO!');
        correcto = true;*/

        $('main').addClass('hidden');
        $('#video').removeClass('hidden');


    } else {
        $('#mensaje').removeClass().addClass('rojo').text('ERRONEO');
        correcto = false;
    };
});
