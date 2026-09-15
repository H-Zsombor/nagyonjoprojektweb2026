let urlap=document.getElementById("urlap");
let eredmeny=document.getElementById("eredmeny");
let eredmenytext=document.getElementById("eredmeny-text");

const betolt=()=>{
    let div = document.createElement("div");
    div.className = "mb-3";

    let nevlabel = document.createElement("label");
    nevlabel.className = "form-label";
    nevlabel.innerHTML = "Név:";

    let nevinput = document.createElement("input");
    nevinput.type = "text";
    nevinput.id = "nev";
    nevinput.className = "form-control";

    nevdiv.appendChild(nevlabel);
    nevdiv.appendChild(nevinput);
    urlap.appendChild(nevdiv);

    let autodiv = document.createElement("div");
    autodiv.className = "mb-3";

    let autolabel = document.createElement("label");
    autolabel.className = "form-label";
    autolabel.innerHTML = "Hány km-t utazol autóval hetente?";

    let autoinput = document.createElement("input");
    autoinput.type = "number";
    autoinput.id = "auto";
    autoinput.className = "form-control";
    autoinput.min = "0";

    autodiv.appendChild(autolabel);
    autodiv.appendChild(autoinput);
    urlap.appendChild(autodiv);


    let tomegdiv = document.createElement("div");
    tomegdiv.className = "mb-3";

    let tomeglabel = document.createElement("label");
    tomeglabel.className = "form-label";
    tomeglabel.innerHTML = "Hányszor használod a tömegközlekedést hetente?";

    let tomeginput = document.createElement("input");
    tomeginput.type = "number";
    tomeginput.id = "tomeg";
    tomeginput.className = "form-control";
    tomeginput.min = "0";

    tomegdiv.appendChild(tomeglabel);
    tomegdiv.appendChild(tomeginput);
    urlap.appendChild(tomegdiv);

    let husdiv = document.createElement("div");
    husdiv.className = "mb-3";

    let huslabel = document.createElement("label");
    huslabel.className = "form-label";
    huslabel.innerHTML = "Hányszor eszel húst egy héten?";

    let husinput = document.createElement("input");
    husinput.type = "number";
    husinput.id = "hus";
    husinput.className = "form-control";
    husinput.min = "0";

    husdiv.appendChild(huslabel);
    husdiv.appendChild(husinput);
    urlap.appendChild(husdiv);

    let ruhadiv = document.createElement("div");
    ruhadiv.className = "mb-3";

    let ruhalabel = document.createElement("label");
    ruhalabel.className = "form-label";
    ruhalabel.innerHTML = "Hány új ruhát vásárolsz havonta?";

    let ruhainput = document.createElement("input");
    ruhainput.type = "number";
    ruhainput.id = "ruha";
    ruhainput.className = "form-control";
    ruhainput.min = "0";

    ruhadiv.appendChild(ruhalabel);
    ruhadiv.appendChild(ruhainput);
    urlap.appendChild(ruhadiv);

   urlap.innerHTML+=`<div class="text-center">
           <button type="button" id="gomb" class="btn btn-success">
                Ökolábnyom kiszámítása
            </button>`

    gomb.addEventListener("click", szamol);
}

const szamol=()=>{
    let nev = document.getElementById("nev").value;
    let auto = Number(document.getElementById("auto").value);
    let tomeg = Number(document.getElementById("tomeg").value);
    let hus = Number(document.getElementById("hus").value);
    let ruha = Number(document.getElementById("ruha").value);
    let pont = auto * 0.2 + hus * 4 + ruha * 2 - tomeg;
    eredmenytext.innerHTML=`${nev} ökolábnyom pontszáma: ${Math.round(pont)}`;
    eredmeny.hidden=false;
}
window.addEventListener("load", betolt);
