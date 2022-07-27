$(document).ready(function(){
    var ir_a = $(".desplazar");
    ir_a.click(function(evento){
        evento.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 3000        
        );
    })

    var regresar = $("#ir_arriba");
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            regresar.addClass("visible");
        }else{
            regresar.removeClass("visible")
        }
    })
    regresar.on("click", function(evento){
        evento.preventDefault();
        $("body, html").animate({ scrollTop : 0 }, 500)
    })
    
    var backTo = $("#whatsapp");
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            backTo.addClass("to_visible");
        }else{
            backTo.removeClass("to_visible")
        }
    })
})

var goTo = document.getElementById("whatsapp");
goTo.addEventListener('click', function(){
    location.href="https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias"
});

var goTTo = document.getElementById("chatear");
goTTo.addEventListener('click', function(){
    location.href="https://wa.me/5215564770378?text=Hola%20Que%20tal.%20%20He%20visto%20su%20página%20Web%20de%20Healthic%20y%20me%20interesa%20contratar%20sus%20servicios%20de%20Esterilización%20y%20Desinfección.%20¿Podrían%20brindarme%20más%20información%20?%20Por%20favor%20y%20Gracias"
});
