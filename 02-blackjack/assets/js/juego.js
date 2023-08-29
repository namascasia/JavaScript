//sintaxis del codigo para encapsulación

//Funcion anonima autoinvocadas 
(() => {
    'use strict';

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S']; 
    const especiales = ['A', 'J', 'Q', 'K']; 

    let puntosJugador = 0,
        puntosComputadora = 0;

    // Referencias de HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnDenter = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');

    const puntosHTML = document.querySelectorAll('small');

    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');

    //Esta funcion crea una nuevaa baraja
    const crearDeck = () => {

        for( let i = 2; i <= 10; i++ ){
            for( let tipo of tipos) {
                deck.push( i + tipo);
            }
        }
        
        for( let tipo of tipos ){
            for( let esp of especiales) {
                deck.push( esp + tipo);
            }
        }
        deck = _.shuffle( deck );
        return deck;
    }
    crearDeck();

    //Esta funcion me permite tomar una carta 
    const pedirCarta = () => {

        if( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        const carta = deck.pop();
        return carta;
    }

    const valorCarta = ( carta ) => {

        const valor = carta.substring(0, carta.length -1 );
        return ( isNaN( valor ) ) ? 
                ( valor === 'A') ? 11 : 10
                : valor * 1; 
    }

    //turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        
        do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta (carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD, 2C
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21 ) {
            break;
        }

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout( () => {
            if( puntosComputadora === puntosMinimos ){
                alert('Nadie gana :( ');
            }else if ( puntosMinimos > 21 ){
                alert('Computadora gana');
            }else if ( puntosComputadora > 21 ){
                alert('Jugador gana');
            } else {
                alert ('Computadora Gana');
            }
        }, 10 );
    }

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta (carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD, 2C
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        //puntos
        if ( puntosJugador > 21 ) {
            console.warn( 'Lo siento, perdiste');
            btnPedir.disabled = true;
            btnDenter.disabled = true; 
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21 genial');
            btnPedir.disabled = true;
            btnDenter.disabled = true; 
            turnoComputadora( puntosJugador );
        }
    });

    btnDenter.addEventListener('click', () => {
        btnPedir.disabled  = true;
        btnDenter.disabled = true; 

        turnoComputadora( puntosJugador );
    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        deck = [];
        deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = ''; 

        btnDenter.disabled = false; 
        btnPedir.disabled = false; 
    });
})();

