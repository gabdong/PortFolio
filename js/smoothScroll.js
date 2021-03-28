function smoothScroll(id, duration){

    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const startPosition = window.pageYOffset - headerHeight;
    const target = document.querySelector('.' + id);
    const targetPosition = target.getBoundingClientRect().top;
    let startTime = null;
    
    // 버튼 클릭시 메뉴 숨기기
    if(window.innerWidth < 768){
        document.querySelector('nav').classList.remove('menu_on');
    };

    function scrollAnimation(){
        
        let currentTime = new Date().getTime();

        if(startTime === null){
            startTime = currentTime;
        };

        let timeElapsed = currentTime - startTime;
        const easeHeight = ease(timeElapsed, startPosition, targetPosition, duration);
        
        window.scrollTo(0, easeHeight);
        

        if(timeElapsed < duration){
            requestAnimationFrame(scrollAnimation);
        };
    };
    
    // https://www.crocus.co.kr/1622 참조
    function ease(t, b, c, d){
        t /= d;
        t--;
        return c*(t*t*t*t*t + 1) + b;
    };
    
    requestAnimationFrame(scrollAnimation);
};

const btn = document.querySelectorAll('.nav_btn');
const topBtn = document.querySelector('.top_button');
const getBtn = document.querySelector('.get_button');

for(let i = 0 ; i < btn.length ; i++){
    btn[i].addEventListener('click', (e) => {

        const id = e.target.getAttribute('id');
        smoothScroll(id, 2000);
    });
};

topBtn.addEventListener('click', () => {

    const id = topBtn.getAttribute('id');
    smoothScroll(id, 2000);
});

getBtn.addEventListener('click', () => {
    smoothScroll('contact', 2000);
});