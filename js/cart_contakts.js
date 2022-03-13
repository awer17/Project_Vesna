
const cartContacts = document.querySelector('.wrap_consultation');

if(cartContacts){
    const contact = document.querySelector('.consultation ');
    contact.addEventListener("click", function(cont){
        cartContacts.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
}

if (cartContacts) {
    const constend = document.querySelector('.clic-cns', );
    constend.addEventListener("click", function(a){
        cartContacts.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
        
}

if (cartContacts) {
    const constendtwo = document.querySelector('.cancel');
    constendtwo.addEventListener("click", function(a){
        cartContacts.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
        
}

