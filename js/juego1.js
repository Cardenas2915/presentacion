var objetos = document.querySelectorAll('.cont_panel div');
var images = document.querySelectorAll('.fondo div');
cajaPistas = document.querySelector('.cajaPistas');

function mostrarPista(Array) {
    
                if(Array.length > 0){
                    mostrar = Array[Array.length - 1];
                    cajaPistas.style = `display:block;`
                    cajaPistas.innerHTML = "<h1> " + mostrar + " </h1>";
                    pistas.pop();
                    setTimeout(() => {
                        cajaPistas.style = `display:none;`
                    }, 2000);
            
                }else{
                    cajaPistas.innerHTML = "<h1>No hay Pistas</h1>";
                    cajaPistas.style = `display:block;
                    background: rgba(194, 84, 89, 0.514);
                    border: 3px solid rgb(192, 10, 10);
                    `
                    setTimeout(() => {
                        cajaPistas.style = `display:none;`
                    }, 5000);
                }
        }

pistas = ["La ratonera deberia estar al lado del raton?",
                "con este objeto podemos arreglar una cicla",
                "alguna vez has visto un objeto enjaulado",
                "los libros y el vino hacen buena combinacion",
                "con una sola granada podremos cubrir todo ese mundo"
            ];

            
            

            btnPistas = document.querySelector('.pista');

            btnPistas.addEventListener('click', function(){
            mostrarPista(pistas);
            })

images.forEach(function(element, index) {

    

    element.addEventListener('click', ()=>{
        
        let valor = element.classList.value;

        objetos.forEach(function(objeto, index){
            var texto = objeto

            if(texto.classList == "panel1" && valor == "img2"){
                element.classList.add('active');
                texto.classList.add('active-fondo');

                const index = pistas.indexOf("con este objeto podemos arreglar una cicla");
                    if (index !== -1) {
                        pistas.splice(index, 1);
                    }
                    
            }

            if(texto.classList == "panel2" && valor == "img1"){
                element.classList.add('active');
                texto.classList.add('active-fondo');

                const index = pistas.indexOf("con una sola granada podremos cubrir todo ese mundo");
                    if (index !== -1) {
                        pistas.splice(index, 1);
                    }
                    
            }

            if(texto.classList == "panel3" && valor == "img5"){
                element.classList.add('active');
                texto.classList.add('active-fondo');

                const index = pistas.indexOf("los libros y el vino hacen buena combinacion");
                    if (index !== -1) {
                        pistas.splice(index, 1);
                    }
                
            }

            if(texto.classList == "panel4" && valor == "img3"){
                element.classList.add('active');
                texto.classList.add('active-fondo');
                const index = pistas.indexOf("La ratonera deberia estar al lado del raton?");
                if (index !== -1) {
                    pistas.splice(index, 1);
                }
                
            }

            if(texto.classList == "panel5" && valor == "img4"){
                element.classList.add('active');
                texto.classList.add('active-fondo');
                const index = pistas.indexOf("alguna vez has visto un objeto enjaulado");
                    if (index !== -1) {
                        pistas.splice(index, 1);
                    }

            }

        })
        
    })
});





var tiempo = document.getElementById('temporizador');
var btn_tiempo = document.querySelector('.tiempo');

var segundos = 15;

function actualizarTemp(){
    

    tiempo.textContent = segundos;
    if(segundos == 0){
        clearInterval(temporizador)

        btn_tiempo.disabled = true;

        cajaPistas.innerHTML = "<h1>Preciona Reiniciar</h1>";
                    cajaPistas.style = `display:block;
                    background: rgba(255, 255, 255, 0.89);
                    color:black;
                    `
                    tiempo.style = `display:block;
                    background: #fff;
                    color:black;
                    `
                    
        alert('Se acabo el tiempo!');
    }else{
        segundos--;
    }
}

btn_tiempo.addEventListener('click', function iniciarTemporizador(){
    btn_tiempo =true;
    temporizador =setInterval(actualizarTemp,1000);
    
    tiempo.classList.add('contador_cambio');
    
});







