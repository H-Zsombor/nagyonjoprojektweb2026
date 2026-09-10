let urlap=document.getElementById("urlap");
let eredmeny=document.getElementById("eredmeny");
let eredmenytext=document.getElementById("eredmeny-text");

const betolt=()=>{
    urlap.innerHTML = `
        <div class="mb-3">
            <label for="nev" class="form-label">Név:</label>
            <input type="text" id="nev" class="form-control">
        </div>
        <div class="mb-3">
            <label for="auto" class="form-label">
                Hány km-t utazol autóval hetente?
            </label>
            <input type="number" id="auto" class="form-control" min="0">
        </div>

        <div class="mb-3">
            <label for="tomeg" class="form-label">
                Hányszor használod a tömegközlekedést hetente?
            </label>
            <input type="number" id="tomeg" class="form-control" min="0">
        </div>

        <div class="mb-3">
            <label for="hus" class="form-label">
                Hányszor eszel húst egy héten?
            </label>
            <input type="number" id="hus" class="form-control" min="0">
        </div>

        <div class="mb-3">
            <label for="ruha" class="form-label">
                Hány új ruhát vásárolsz havonta?
            </label>
            <input type="number" id="ruha" class="form-control" min="0">
        </div>

        <div class="text-center">
            <button type="button" id="gomb" class="btn btn-success">
                Ökolábnyom kiszámítása
            </button>
        </div>
    `;
}

const szamol=()=>{
    let nev = document.getElementById("nev").value;
    let auto = Number(document.getElementById("auto").value);
    let tomeg = Number(document.getElementById("tomeg").value);
    let hus = Number(document.getElementById("hus").value);
    let ruha = Number(document.getElementById("ruha").value);
    let pont = auto * 0.2 + hus * 4 + ruha * 2 - tomeg;
    eredmeny.hidden=false;
    eredmenytext.innerHTML=`${nev} ökolábnyom pontszáma: ${Math.round(pont)}`;
}
window.addEventListener("load", betolt);
let gomb = document.getElementById("gomb");
gomb.addEventListener("click", szamol);