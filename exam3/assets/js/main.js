$(document).ready(function () {

    $('.works-slider').slick({
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
    }
  ]
    });
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});


function initMap() {
    var map = new google.maps.Map(document.getElementById('google-map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        scrollwheel: false,
        zoom: 8
    });
}