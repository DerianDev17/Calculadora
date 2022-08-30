/* Escuchamos cuando se carga el documento */
window.addEventListener('load', ()=> {
    /*creamos dos constantes y nos guardamos los elementos que necesitamos*/
    const display = document.querySelector('.calculadora-display');
    const keypadButttons = document.getElementsByClassName('keypad-button');

    /*creamos otra constante para convertir el HTMLCollection a Array */
    const keypadButttonsArray = Array.from(keypadButttons);


    /* iteramos por nuestro nuevo array de botones */
    keypadButttonsArray.forEach( (button) => {
        /* A cada boton le agregamos un listener*/ 
        button.addEventListener('click', ()=> {
           calculado(button, display);
        })
    })
});

function calculado(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML); /*toma el string, resuelve y guarda en el innerHTML del display */
}
function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML+= button.innerHTML;
}
function borrar(display){
    display.innerHTML = 0;
}