const d = document;
const btn = d.querySelector('.btn');
const cardContainer = d.querySelector('.cardContainer');
const entrada = d.getElementById('entrada');
const validacion = d.querySelector('.val');
const horaCont = d.querySelector('.hora__cont');

let timeOut;

//Horario


const parrafo = d.createElement('p');
parrafo.className = 'horario';
parrafo.style.color = '#FFFCF7';

function Reloj(){
    const horario = new Date();
    parrafo.innerHTML  = horario.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: ''});
}
Reloj();
setInterval(Reloj, 1000);

horaCont.appendChild(parrafo);
  









































//Eventos
btn.addEventListener('click', MostrarTexto);
entrada.addEventListener('input', Validacion);

//Funcion para mostrar un mensaje de validacion cuando el text area este vacio
function Validacion(){

    validacion.innerHTML = 'Agregar texto';

    //Validación del textarea
    if(entrada.value.trim() !== ''){
        validacion.className = 'val';
        clearTimeout(timeOut); //Limpia el setTimeout si existe.
    }

    else{
        validacion.className = 'val__vis';
        clearTimeout(timeOut); //Limpia el setTimeout si existe.
        timeOut = setTimeout(() =>{
            validacion.className = 'val';
        }, 3000);
    }
}

//Funcion para mostar texto.
function MostrarTexto(){

    //VALIDACION
    if(entrada.value.trim() !== ''){
        //CAPTURO EL TEXTO DEL Textarea Y SE LO PASO A LA CARD.
        const texto = d.getElementById('entrada').value;
        d.getElementById('entrada').value = ''; //Dejar el textarea vacio.

        //Muestro el texto del input a la card
        const cards = d.createElement('div');
        cards.classList = 'cards';

        const nuevaCard = d.createElement('div');
        nuevaCard.classList = 'card';
        nuevaCard.innerHTML = texto;

        cards.appendChild(nuevaCard)
        cardContainer.appendChild(cards);

        //BOTON DE ELIMINAR.
        const btns = d.createElement('div');
        btns.classList = 'btns'

        const btnEliminar = d.createElement('a');
        btnEliminar.classList = 'btn__eliminar';
        btnEliminar.innerHTML = 'Eliminar';

        btns.appendChild(btnEliminar)
        cardContainer.appendChild(btns);

        btnEliminar.addEventListener('click', EliminarCard);

        //BOTON DE COMPLETADO.
        const btnCompletado = d.createElement('a');
        btnCompletado.classList = 'btn__completado';
        btnCompletado.innerHTML = 'Completado';
        
        btns.appendChild(btnCompletado)
        cardContainer.appendChild(btns);

        btnCompletado.addEventListener('click', CompletadoCard);

        
        //Funcion para eliminar card.
        function EliminarCard(){
            if(cards && cards.parentNode && btns && btns.parentNode){
                cards.parentNode.removeChild(cards);
                btns.parentNode.removeChild(btns);
            }
            else{
                console.log('El elemento no existe');
            }
        }

        //Funcion para marcar como completado.
        function CompletadoCard(){
            nuevaCard.classList.toggle('card__completado');
            btnCompletado.innerHTML = (btnCompletado.innerHTML === 'Completado') ? 'No completado' : 'Completado';
        }
    }
    else{
        return
    }

}


