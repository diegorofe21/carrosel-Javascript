const imgs = document.getElementById('img');
const img = document.querySelectorAll("#img img")




let idx = 0;

function carrosselOn() {
    idx ++;

    if(idx > img.length -1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function nextCarrossel() {
    clearInterval(intervaloCarrossel);
    console.log("carrossel em manual")
    idx ++;

    if(idx > img.length -1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function previousCarrossel() {
    clearInterval(intervaloCarrossel);
    console.log("carrossel em manual")
    idx --;
    
    if(idx == -1) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}


function pausarCarrossel(){
    console.log("carrossel pausado")
    clearInterval(intervaloCarrossel)

}

function playCarrossel(){
    console.log("carrossel reiniciado")
    intervaloCarrossel = setInterval(carrosselOn, 3000)
}

var intervaloCarrossel =  setInterval(carrosselOn, 3000);
console.log("carrossel em automatico")



