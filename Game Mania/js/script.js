$(document).ready(function() {
    
    let slideAtual = 1;
    let listaSlides = ["banner-joystick", "banner-headset", "banner-chair"]

    setInterval(mudarSlide, 1500)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        // Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
        }

        // Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }
    }   
})

// jquery ---------------------------------------------------
 $("#barras").click(function() {

     $("#menu").toggleClass("menu-ativo");
    
     Toggle
     if( $("#menu").hasClass("menu-ativo") ) {
         $("#menu").removeClass("menu-ativo")
     } else {
         $("#menu").addClass("menu-ativo")
     }
 })

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert("Seu E-mail foi cadastrado com sucesso.\n Obrigado!")
    console.log(email)
}
const password = document.getElementById("password");
const username = document.getElementById("username");

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}