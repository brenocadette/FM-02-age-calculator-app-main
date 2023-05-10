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

        let dia = Math.floor(differenceDates / 60 /60 / 24 % 30) 
        console.log("dia" +dia)

        let months = Math.floor(differenceDates/ 60/ 60/ 24/ 30 %12)
        console.log("months" +months)

        let years = Math.floor(differenceDates / 60/ 60/ 24 /30 /12)
        console.log("years" +years)
        
        //writing data in screen

        const dateUpdate = document.querySelectorAll(".dateUpdate")
        console.log(dateUpdate) //ok
        //Criando array com a data segunds, minute, hour, dia
        let arrayDateFull = [years, months, dia, hour, minute, secunds]
        console.log("entrou" + dateUpdate[0].textContent)

        


setInterval( function() {   

    if(secunds == 0) {
        secunds = 60
        minute--
    }
    if(minute == 0) {
        minute = 60
        hour--
    }
    if (hour == 0){
        hour=24
        dia--
    }
    if(dia ==0) {
        dia =30
        months--
    }
    if(months ==0){
        months =365
        years--
    }
    secunds--
    
    arrayDateFull = [years, months, dia, hour, minute, secunds]

      
dateUpdate.forEach( (elemento, i) => elemento.textContent = arrayDateFull[i] )

}, 1000)
  


            
           

}

})

/*

s 10 01 00 60 00 60 00 60
m 10 10 10 09 00 60 00 60
h 10 10 10 10 02 01 00 24
d 10 10 10 10 10 10 02
m 10 10 10 10 10 10 10
a 10 10 10 10 10 10 10


*/
