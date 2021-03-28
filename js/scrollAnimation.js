(function(){

    const target = document.querySelectorAll('.scroll_animation');
    const windowHeight = window.innerHeight;

    function checkPosition(){

        for(let i = 0 ; i < target.length ; i++){

            let targetPosition = target[i].getBoundingClientRect().top;

            if(targetPosition - windowHeight <= 0){
                target[i].className = target[i].className.replace('scroll_animation', 'fade_in');
            };
        };
    };
    window.addEventListener('scroll', checkPosition);
}());