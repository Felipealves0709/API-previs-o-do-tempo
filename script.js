
const key ='22c01d095af8b7de2322cd8edaf74250'

function colocardadosnatela(dados){
    console.log(dados)

    //tempo na cidade
    document.querySelector('.city').innerHTML = 'Tempo em ' + dados.name

    //temperatura
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp)+ ' C°' //ALT 0176 = °

    //previsão
    document.querySelector('.text-prev').innerHTML = dados.weather[0].description

    //umidade local
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'

    document.querySelector('.img-prev').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

//buscar city na API
async function searchcity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    colocardadosnatela(dados)

}
//ação ao clicar no botão
function clickbutton(){
    const city = document.querySelector('.input-city').value
    searchcity(city)
}