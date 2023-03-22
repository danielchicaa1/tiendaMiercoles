let infoProducto = JSON.parse(localStorage.getItem("producto"))
 export async function EjecutarApiTasa(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '074f02bb28msh1bbc96dbaa0f511p144e97jsn6913cd3a583f',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
    
    let response = await fetch('https://alpha-vantage.p.rapidapi.com/query?to_currency=USD&function=CURRENCY_EXCHANGE_RATE&from_currency=COP', options)
    let datos = await response.json()
    let tasa = datos ['Realtime Currency Exchange Rate']['5. Exchange Rate']
    console.log(tasa);
    ConvertirMoneda(tasa)

}

function ConvertirMoneda(tasa){
    let spanPrecio = document.getElementById("conversor")
    let precioUSD =  infoProducto.precioOculto * tasa * cantidad.value
    console.log(precioUSD);
    spanPrecio.textContent = "$ " + precioUSD.toFixed(2)


    let bandera = document.getElementById("bandera")
    bandera.src=""

}
 
export function traducirTexto(texto) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("from", "en");
    encodedParams.append("to", "es-co");
    encodedParams.append("text", texto);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '88bdb8caecmsh448d0ab30ef1311p11408ejsn7d53d16f1b9b',
            'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://translo.p.rapidapi.com/api/v3/translate', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}



