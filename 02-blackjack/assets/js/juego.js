//sintaxis del codigo para encapsulación

//Funcion anonima autoinvocadas 
const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K']; 

    let puntosJugadores = [];

    // Referencias de HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDenter = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];

        for ( let   i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDenter.disabled = false; 
        btnPedir.disabled = false; 
    }
    //Esta funcion crea una nueva baraja
    const crearDeck = () => {

        deck = [];
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
        return _.shuffle( deck );
    }

    //Esta funcion me permite tomar una carta 
    const pedirCarta = () => {
        if( deck.length === 0 ) {
            alert("No hay cartas en el deck");
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length -1 );
        return ( isNaN( valor ) ) ? 
                ( valor === 'A') ? 11 : 10
                : valor * 1; 
    }

    //Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta (carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    const crearCarta  = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD, 2C
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append ( imgCarta);
    }
    const determinarGanador = () => {
        
        const [puntosMinimos, puntosComputadora] = puntosJugadores; //Desestructuración de arreglos

        setTimeout( () => {
            if( puntosComputadora=== puntosMinimos ){
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
    //turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1); 

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        
        determinarGanador();
    }

    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

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
        
        turnoComputadora( puntosJugadores[0] );
    });

    return {
        nuevoJuego : inicializarJuego
    };
})();

