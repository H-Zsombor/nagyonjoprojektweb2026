let gomb=document.getElementById("gomb");
let velemenyek=document.getElementById("velemenyek")

const pluszegy=()=>{
    let nev=document.getElementById("nev");
    let csillag=document.getElementById("csillag");
    let szoveg=document.getElementById("szoveg");
     if (nev == "" || csillag == "" || szoveg == "" || csillag < 0 || csillag > 5) {
        alert("Kérlek, tölts ki minden mezőt!");
        return;
    }
    velemenyek+=`<div class="carousel-item">
                <div class="card mx-auto velemeny-kartya">
                    <div class="card-body">
                        <h5 class="card-title">${nev}</h5>
                        <p class="text-warning">★☆☆☆☆</p>
                        <p class="card-text">
                            ${szoveg}
                        </p>
                    </div>
                </div>
            </div>`

     return alert("Köszönjük, hogy megosztottad a véleményedet!");
}

gomb.addEventListener("click",pluszegy);