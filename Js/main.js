$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

const productCard = document.getElementsByClassName('cardhome')
const priceInCart = document.getElementById('price')

Array.from(productCard).forEach(card => {
    card.addEventListener('click', function () {
        const price = +this.querySelector('.textprice').innerHTML.split('UAH')[0]
        priceInCart.innerHTML = +priceInCart.innerHTML + price

        console.log('Show');
        
        setInterval(function () {
            console.log('Close!!!!');
        }, 3000)
    })
});


const btnShow = document.querySelector('.btn-show'); 
const cards = document.querySelectorAll('.cardhome'); 

btnShow.addEventListener('click', function() {
    cards.forEach(card => { 
        card.style.display = 'flex';
    });
    btnShow.style.display = 'none'; 
});