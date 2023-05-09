const form = document.querySelector("#form_date")

//Pensei em colocar todo o conteúdo do eveto submit dentro de uma função
function checkingDateFuture (){

}
form.addEventListener("submit", (event) => {
    let daySubmited = form.querySelector(".day input")
    let monthSumited = form.querySelector(".month input")
    let yearSumited = form.querySelector(".year input")
    let dateNow = new Date();
    const waringDiv = document.querySelector(".waring")

    console.log(daySubmited.value);
    console.log(monthSumited.value);
    console.log(yearSumited.value);

    let dateSubmited = monthSumited.value+"-"+daySubmited.value+"-"+yearSumited.value
    //O formato da data é mes/dia/ano, então precisei mudar a sequencia de concatenação
    dateSubmited = new Date(dateSubmited);
    console.log(dateSubmited);
    console.log(dateNow)

    if(dateSubmited < dateNow){

        console.log(waringDiv)
        waringDiv.innerText = "The date entered must be a future date"
        waringDiv.style.display = "block"
        console.log("Insira uma data no furuto")
        event.preventDefault(); // cancel page update

        
    }
    else   {
        event.preventDefault(); // cancel page update

        waringDiv.style.display = "none"
        console.log("dateSubmited.getTime()"+dateSubmited.getTime())
        console.log("dateNow.getTime()0"+ dateNow.getTime())
        let differenceDates = dateSubmited.getTime() - dateNow.getTime() // O getTime() retorna um valor em milisegundos que representa adiferença da data passata na variável que recebe o getTime() e o ano de 1970
        differenceDates = differenceDates/ 1000 // Dividi por 1000 pois a data está em milisegundos,  data x ms = data * 10^-3, ou seja, dividir por 1000
        let secunds = Math.floor(differenceDates % 60) // 
        console.log("segeundos" + secunds)

        let minute = Math.floor(differenceDates / 60 % 60)
        console.log("minute" +minute)

        let hour = Math.floor(differenceDates / 60 /60 % 24) 
        console.log("hour"+ hour)

        let dia = Math.floor(differenceDates / 60 /60 / 24) 
        console.log("dia" +dia)


        
    }

    
})

