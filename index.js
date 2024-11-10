const d = document;
const btn = d.querySelector('.btn');
const cardContainer = d.querySelector('.cardContainer');

//Eventos
btn.addEventListener('click', MostrarTexto);

//Funcion para mostar texto.
function MostrarTexto(){

    //CAPTURO EL TEXTO DEL Textarea Y SE LO PASO A LA CARD.
    const texto = d.getElementById('entrada').value;
    d.getElementById('entrada').value = ''; //Dejar el textarea vacio.

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


