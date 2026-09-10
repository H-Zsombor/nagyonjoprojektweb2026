let urlap=document.getElementById("urlap");
let mezok = [
        ["nev", "Név", "text"],
        ["auto", "Autóval megtett km hetente", "number"],
        ["tomeg", "Tömegközlekedés alkalmak hetente", "number"],
        ["hus", "Húsos étkezések száma hetente", "number"],
        ["ruha", "Új ruhák száma havonta", "number"] ];

const betolt=()=>{
    for (const mezok of mezo) {
        let label=document.createElement("label");
        label.innerHTML=mezo[1];
    }
}
