const timer = document.getElementById("pomodoro");

var min_de_trabajo = 25;//Minutos los cuales estaré trabajando
var min_de_descanzo = 5;//Minutos de descanzo
var segundos_totales = min_de_trabajo * 60;//Minutos a segundos

var descanso_audio = new Audio("descanzo.mp3");
var trabajo_audio = new Audio("trabajo.mp3");

var modo_timer = "trabajo";

function cuentraAtras(){
    let minutos_enteros = Math.floor(segundos_totales / 60);
    let segundos_enteros = segundos_totales % 60;
    
    if(segundos_enteros<10){
        segundos_enteros = "0" + segundos_enteros;
    }

    timer.innerHTML = `${minutos_enteros}:${segundos_enteros}`;
    segundos_totales--;

    if(modo_timer === "trabajo"){
        timer.classList.remove("contador_descanso");
        timer.classList.add("contador_trabajo");
        if(segundos_totales < 0){
            modo_timer = "descanso";
            segundos_totales = min_de_descanzo * 60;
            descanso_audio.play();
        }
    }else{
        timer.classList.remove("contador_trabajo");
        timer.classList.add("contador_descanso");
        if(segundos_totales < 0){
            modo_timer = "trabajo";
            segundos_totales = min_de_trabajo * 60;
            trabajo_audio.play();
        }
    }
}

setInterval(cuentraAtras,1000);