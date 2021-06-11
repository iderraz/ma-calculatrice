let monFond =document.createElement("div");
document.body.appendChild(monFond);
monFond.setAttribute("class","container");

let macalculatrice = document.createElement("div");
monFond.appendChild(macalculatrice);
macalculatrice.setAttribute("class","input");
macalculatrice.style.width = "35%";
macalculatrice.style.height = "85%";
macalculatrice.style.backgroundColor = "grey";
macalculatrice.style.borderRadius = "3%";


let monInput = document.createElement("input");
macalculatrice.appendChild(monInput);
monInput.style.backgroundColor = "white";
monInput.style.height = "12%";
monInput.style.width = "80%";
monInput.style.marginLeft = "10%";
monInput.style.marginTop = "3%";
monInput.style.borderRadius = "3%";

// mes div contenant mes bouttons
let mesOpdiv = document.createElement("div");
macalculatrice.appendChild(mesOpdiv);
//Problème avec le css, du coups j'ai fait tout le style avec le .style en dom
mesOpdiv.style.height = "12%";
mesOpdiv.style.width = "80%";
mesOpdiv.style.borderRadius = "3%";
mesOpdiv.style.marginLeft = "11%";
mesOpdiv.style.marginTop = "3%";
mesOpdiv.style.fontSize = "150%";
mesOpdiv.style.display = "flex";
mesOpdiv.style.justifyContent = "space-between"; 
mesOpdiv.style.alignItems = "center";
mesOpdiv.addEventListener("click", (e) => {
    if(e.target.innerText == "+"){
        monInput.value += e.target.innerText
    }else if(e.target.innerText == "-"){
        monInput.value += e.target.innerText
    }else if(e.target.innerText == "/"){
        monInput.value += e.target.innerText
    }else if(e.target.innerText == "*"){
        monInput.value += e.target.innerText
    }
})

let meschiffres = document.createElement("div");
macalculatrice.appendChild(meschiffres);
//Problème avec le css, du coups j'ai fait tout le style avec le .style en dom
meschiffres.style.height = "10%";
meschiffres.style.width = "80%";
// meschiffres.style.backgroundColor = "blue"
meschiffres.style.borderRadius = "3%";
meschiffres.style.marginLeft = "11%";
meschiffres.style.marginTop = "3%";
meschiffres.style.fontSize = "150%";
meschiffres.style.display = "flex";
meschiffres.style.justifyContent = "space-around"; 
meschiffres.style.alignItems = "center";
meschiffres.addEventListener("click", (e) =>{
    if(e.target.innerText == "0"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "1"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "2"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "3"){
        monInput.value += parseInt(e.target.innerText);
};
});



let meschiffres1 = document.createElement("div");
macalculatrice.appendChild(meschiffres1);
//Problème avec le css, du coups j'ai fait tout le style avec le .style en dom
meschiffres1.style.height = "10%";
meschiffres1.style.width = "80%";
// meschiffres1.style.backgroundColor = "blue"
meschiffres1.style.borderRadius = "3%";
meschiffres1.style.marginLeft = "11%";
meschiffres1.style.marginTop = "3%";
meschiffres1.style.fontSize = "150px";
meschiffres1.style.display = "flex";
meschiffres1.style.justifyContent = "space-around"; 
meschiffres1.style.alignItems = "center";
meschiffres1.addEventListener("click", (e) =>{
    if(e.target.innerText == "4"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "5"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "6"){
        monInput.value += parseInt(e.target.innerText);
    }else if(e.target.innerText == "7"){
        monInput.value += parseInt(e.target.innerText);
};
})


let meschiffres2 = document.createElement("div");
macalculatrice.appendChild(meschiffres2);
//Problème avec le css, du coups j'ai fait tout le style avec le .style en dom
meschiffres2.style.height = "10%";
meschiffres2.style.width = "80%";
meschiffres2.style.borderRadius = "3%";
meschiffres2.style.marginLeft = "11%";
meschiffres2.style.marginTop = "3%";
meschiffres2.style.fontSize = "50px";
meschiffres2.style.display = "flex";
meschiffres2.style.justifyContent = "space-around"; 
meschiffres2.style.alignItems = "center";

meschiffres2.addEventListener("click", (e) => {
    if(e.target.innerText == "c"){
        monInput.value = "";
    }else if(e.target.innerText == "."){
        e.target.style.pointerEvent = "none";
    }
    else{
        monInput.value += parseInt(e.target.innerText);
    }
    console.log(e);
});

let monEgal = document.createElement("button");
macalculatrice.appendChild(monEgal);
//Problème avec le css, du coups j'ai fait tout le style avec le .style en dom
monEgal.style.height = "10%";
monEgal.style.width = "80%";
monEgal.style.backgroundColor = "red"
monEgal.style.borderRadius = "3%";
monEgal.style.marginLeft = "11%";
monEgal.style.marginTop = "3%";
monEgal.style.fontSize = "50px";
monEgal.textContent = "=";

// mes div contenant mes bouttons




// mes boucles pour ajouter mes bouttons
let tabOperator = ["+","-","/","*"];
let b = 0;
tabOperator.forEach(element => {
    element=document.createElement("button");
    element.style.height = "50px";
    element.style.width = "50px";
    element.style.backgroundColor = "#C2920A";
    mesOpdiv.appendChild(element);
    element.innerText = tabOperator[b];
    b++
});

let montab = ["0","1","2","3"];
let i = 0;
montab.forEach(element => {
    element=document.createElement("button");
    element.style.height = "50px";
    element.style.width = "50px";
    meschiffres.appendChild(element);
    element.innerText = montab[i];
    i++
});

let montab1 = ["4","5","6","7"];
let y = 0;
montab1.forEach(element => {
    element=document.createElement("button");
    element.style.height = "50px";
    element.style.width = "50px";
    meschiffres1.appendChild(element);
    element.innerText = montab1[y];
    y++
});

let montab2 = ["8","9","c","."];
let u = 0;
montab2.forEach(element => {
    element=document.createElement("button");
    element.style.height = "50px";
    element.style.width = "50px";
    element.style.borderRadius = "1%"
    meschiffres2.appendChild(element);
    element.innerText = montab2[u];
    u++
});
// mes boucles pour ajouter mes bouttons //















