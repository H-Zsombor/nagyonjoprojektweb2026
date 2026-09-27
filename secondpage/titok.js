let urlap=document.getElementById("urlap");
let eredmeny=document.getElementById("eredmeny");
// let eredmeny=document.getElementById("eredmeny-text");

const betolt=()=>{
    
    let autodiv=document.createElement("div");
    autodiv.className ="mb-3";

    let autolabel=document.createElement("label");
    autolabel.className="form-label";
    autolabel.innerHTML="Hány km-t utazol autóval hetente?";
    autolabel.htmlFor="auto";

    let autoinput=document.createElement("input");
    autoinput.type="number";
    autoinput.id="auto"
    autoinput.className="form-control";
    autoinput.min="0";

    autodiv.appendChild(autolabel);
    autodiv.appendChild(autoinput);
    urlap.appendChild(autodiv);

    let tomegdiv = document.createElement("div");
    tomegdiv.className = "mb-3";

    let tomeglabel = document.createElement("label");
    tomeglabel.className = "form-label";
    tomeglabel.innerHTML = "Hányszor használod a tömegközlekedést hetente?";
     tomeglabel.htmlFor="tomeg";

    let tomeginput = document.createElement("input");
    tomeginput.type = "number";
    tomeginput.id = "tomeg";
    tomeginput.className = "form-control";
    tomeginput.min = "0";

    tomegdiv.appendChild(tomeglabel);
    tomegdiv.appendChild(tomeginput);
    urlap.appendChild(tomegdiv);

    let eteldiv=document.createElement("div");
    eteldiv.className="mb-3";

    let etellabel = document.createElement("label");
    etellabel.className = "form-label";
    etellabel.innerHTML = "Hányszor rendelsz ételt házhoz vagy étteremben egy héten?";
    etellabel.htmlFor="etel";

    let etelinput = document.createElement("input");
    etelinput.type = "number";
    etelinput.id = "etel";
    etelinput.className = "form-control";
    etelinput.min ="0";

    eteldiv.appendChild(etellabel);
    eteldiv.appendChild(etelinput);
    urlap.appendChild(eteldiv);

    let husdiv = document.createElement("div");
    husdiv.className = "mb-3";

    let huslabel = document.createElement("label");
    huslabel.className = "form-label";
    huslabel.innerHTML = "Hányszor eszel húst egy héten?";
    huslabel.htmlFor="hus";

    let husinput = document.createElement("input");
    husinput.type = "number";
    husinput.id = "hus";
    husinput.className = "form-control";
    husinput.min ="0";

    husdiv.appendChild(huslabel);
    husdiv.appendChild(husinput);
    urlap.appendChild(husdiv);

    let ruhadiv=document.createElement("div");
    ruhadiv.className="mb-3"

    let ruhalabel=document.createElement("label");
    ruhalabel.className="form-label";
    ruhalabel.innerHTML="Hány új ruhát vásárolsz havonta?";
    ruhalabel.htmlFor="ruha";

    let ruhainput=document.createElement("input");
    ruhainput.type="number";
    ruhainput.id="ruha";
    ruhainput.className = "form-control";
    ruhainput.min="0";

    ruhadiv.appendChild(ruhalabel);
    ruhadiv.appendChild(ruhainput);
    urlap.appendChild(ruhadiv);

        let aramdiv=document.createElement("div");
    aramdiv.className="mb-3";

    let aramlabel = document.createElement("label");
    aramlabel.className="form-label";
    aramlabel.innerHTML="Hány órát használsz naponta elektronikai eszközöket?";
    aramlabel.htmlFor="aram"

    let araminput=document.createElement("input");
    araminput.type="number";
    araminput.id="aram";
    araminput.className="form-control";
    araminput.min="0";

    aramdiv.appendChild(aramlabel);
    aramdiv.appendChild(araminput);
    urlap.appendChild(aramdiv);

 urlap.innerHTML += `
    <div class="text-center">
        <button type="button" class="btn btn-success" id="gomb">
            Ökolábnyom kiszámítása
        </button>
    </div>`;


    let gomb=document.getElementById("gomb");
    gomb.addEventListener("click", szamol);
}

const szamol=()=>{
    let auto=document.getElementById("auto").value;
    let tomeg=document.getElementById("tomeg").value;
    let etel=document.getElementById("etel").value;
    let hus=document.getElementById("hus").value;
    let ruha=document.getElementById("ruha").value;
    let aram=document.getElementById("aram").value;

    if (auto < 0 || tomeg < 0 || etel < 0 ||
        hus < 0 || ruha < 0 || aram < 0) {

        alert("Nem adhatsz meg negatív számot!");
        return;
    }

    let pont=auto*0.15+hus*5+ruha*4+aram*3+etel*3-tomeg*2;
    window.name = Math.round(pont);
    window.location.href = "eredmeny.html";

}
if (eredmeny!=null) {
    let pont=Number(window.name);

    if (pont < 50) {
        eredmeny.innerHTML=`${pont} - alacsony ökolábnyom`;
        eredmeny.className="text-success";
    }
    else if (pont < 100) {
        eredmeny.innerHTML=`${pont} - közepes ökolábnyom`;
        eredmeny.className="text-warning";
    }
    else {
        eredmeny.innerHTML=`${pont} - magas ökolábnyom`;
        eredmeny.className="text-danger";
    }
}

window.addEventListener("load",betolt);