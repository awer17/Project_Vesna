const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
    const itemLeft = document.querySelector( '.item-left' );
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        itemLeft.classList.toggle('_active');
    })

}