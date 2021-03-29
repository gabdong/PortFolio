(function(){

    const [red, green, blue] = [255, 255, 255];
    const body = document.querySelector('body');
    console.log(body);

    window.addEventListener('scroll', () => {

        let y = 1 + (window.scrollY || window.pageYOffset) / 2500;
        y = y < 1 ? 1 : y;
        const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);

        console.log(y, r, g, b);

        body.style.background = `rgb(${r}, ${g}, ${b})`;
    });
}());