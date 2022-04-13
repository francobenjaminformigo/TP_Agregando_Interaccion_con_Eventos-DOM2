window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    
    
    /* -----------------------Parte 2------------------------ */
    
    function randomColor() {
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    }

    //Evento onmouseover para cambiar color
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = randomColor()
    })

    //Definimos estadoSecreto
    let estadoSecreto = 0;

    //Capturamos el input del título
    let titleInput = document.querySelector('#titulo');

    //Creamos el evento con toda su lógica
    titleInput.addEventListener('keyup', (e) => {
        switch(estadoSecreto){
            case 0:
                e.key == 's' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 1:
                e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 2:
                e.key == 'c' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 3:
                e.key == 'r' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 4:
                e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 5:
                e.key == 't' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 6:
                e.key == 'o' ? alert('Secreto Mágico') : (estadoSecreto = 0);
                break;
            default:
                break;
        }
        console.log(e.key, estadoSecreto)
    })

}