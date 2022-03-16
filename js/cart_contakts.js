
const cartContacts = document.querySelector('.con_on');

if(cartContacts){
    const contact = document.querySelector('.consultation ');
    contact.addEventListener("click", function(cont){
        cartContacts.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
}

if (cartContacts) {
    const constend = document.querySelector('.con_end_tou', );
    constend.addEventListener("click", function(a){
        cartContacts.classList.toggle('_active-cart');
        document.body.classList.toggle('_lock');
    })
        
}

if (cartContacts) {
    const constendtwo = document.querySelector('.con_end span');
    constendtwo.addEventListener("click", function(a){
        cartContacts.classList.toggle('_active-cart');
         document.body.classList.toggle('_lock');
    })
}

