const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};

 
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        width: 397,
        arrows: false,
        dots: false,
        infinite: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1220,
              settings: {
                dots: true,
                slidesToShow: 2
              }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 375,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    })
});

$('#btn-toggle').click(function() {
    $(this).find('i').toggleClass('bi-chevron-down bi-chevron-up');
});

$('#btn-toggle2').click(function() {
    $(this).find('i').toggleClass('bi-chevron-down bi-chevron-up');
});

$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});