let imagenMovil = "../images/image-product-mobile.jpg";
let imagenEscritorio = "../images/image-product-desktop.jpg";

const imagen = document.querySelector(".imagen");

window.addEventListener("resize", () => {

    console.log(window.innerWidth)
    
    if(window.innerWidth < 1040) {
        imagen.setAttribute("src", imagenMovil);
    } else {
        imagen.setAttribute("src", imagenEscritorio);
    }
    
});