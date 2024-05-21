const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

// linkPerfil.addEventListener("mouseover", ()=> {
//   navPerfil.style.display = "block"
// });

//Exibir o menu secundario pressionando  tecla 1 do teclado
document.addEventListener("keyup", (e) => {
  console.log("A tecla pressionada foi: ", e.key);
  console.log(" O código da tecla pressiona é: ", e.code);
 
  if(e.code === "Digit1"){
    console.log("Podemos abrir o menu secundaprio...")
    navPerfil.style.display = "block"
  }
  if(e.code === "Escape"){
    console.log("Podemos fechar o menu secundario...")
    navPerfil.style.display = "none"
  }
});