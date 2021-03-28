(function(){

    const hamBtn = document.querySelector('.mobile_ham');
    const menu = document.querySelector('nav');

    // menu 숨기기

    hamBtn.addEventListener('click', () => {

        if(menu.className !== 'menu_on'){
            menu.classList.add('menu_on');
        }else {
            menu.classList.remove('menu_on');
        };
    });
}());