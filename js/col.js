
const coltel = document.querySelector('.col');

if(coltel){
    const coltelbtn = document.querySelector('.up_arrow ');
    coltelbtn.addEventListener("click", function(cont){
        coltel.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
}

if (coltel) {
    const constend = document.querySelector('.col_end', );
    constend.addEventListener("click", function(a){
        coltel.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
        
}

if (coltel) {
    const constendtwo = document.querySelector('.col_end_two');
    constendtwo.addEventListener("click", function(a){
        coltel.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
}