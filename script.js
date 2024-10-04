function alternar() {
    var b = document.getElementById("bt");
    var p = document.getElementById("p1");

    if (p.textContent == "Entre para Diversão") {
        p.textContent = "Enter for Fun";
        b.textContent = "PT/EN";
    } else {
        p.textContent = "Entre para Diversão";
        b.textContent = "EN/PT";
    }


} 