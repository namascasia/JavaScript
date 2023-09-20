/**
 * Esta función pide una carta
 * @param {Array <String>} deck arreglo de cartas
 * @returns {String} -retorna una carta
 */
export const pedirCarta = ( deck ) => {

    if (!deck ||  deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
