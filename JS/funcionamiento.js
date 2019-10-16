window.onload = function(){
    var Menu = document.querySelectorAll("a");
    var Articulos = document.querySelectorAll("article");

    Menu.forEach((dia)=>{
        dia.addEventListener("click", () =>{
            Articulos.forEach((dia)=>{
                dia.classList.add("not");
            })
            var idDia = dia.id;
            var comprobante = document.querySelector("." + idDia);
            comprobante.classList.toggle("not");
        });
    });
};