window.onload = function(){
    var Menu = document.querySelectorAll(".link");
    var Articulos = document.querySelectorAll(".Diaa");

    Menu.forEach((dia)=>{
        dia.addEventListener("click", () =>{
            Articulos.forEach((dia)=>{
                dia.classList.add("not");
            })
            var idDia = dia.id;
            var comprobante = document.querySelector(".Diaa." + idDia);
            comprobante.classList.toggle("not");
        });
    });
};