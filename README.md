# My PortFolio Page

[ViewSite](http://gabdong.dothome.co.kr)

***
현재 보고계신 포트폴리오 사이트입니다.

미디어쿼리를 사용하여 반응형으로 제작하였으며, Vanilla Js를 이용하여 부드러운 스크롤, 스크롤시 페이드인 효과를 구현하였습니다.

***

## Smooth Scroll

scrollAnimation 함수를 한든뒤 requestAnimationFrame()메서드를 이용하여 애니메이션을 구현하였습니다.

### scroll Animation Function
- 지속시간과 실행 시간을 구하여 실행시간이 지속시간보다 작다면 함수가 다시 실행되도록 하였습니다.
- window.scrollTo메서드를 이용하였고 ease function을 이용해 top값이 유동적으로 변할수 있게 하였습니다.

```javascript
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
```

***

## Scroll Animation

타겟의 높이값, 페이지의 기본높이값을 구한뒤 타겟의 높이 - 페이지 기본높이값이 0보다 작다면 scroll_animation클래스가 fade_in클래스로 변환되며
애니메이션이 실행되도록 하였습니다.

```javascript
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
```
