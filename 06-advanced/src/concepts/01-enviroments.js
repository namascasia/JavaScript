/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentComponents = ( element ) =>{
    console.log(import.meta.env);
    
    const html = `
        Dev: ${ import.meta.env.DEV} <br/>
    `;
    element.innerHTML = html;
}