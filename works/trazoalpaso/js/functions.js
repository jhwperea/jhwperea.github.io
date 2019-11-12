$(document).ready(function () {
    $('.sidebarCollapse').on('click', function () { $('#sidebar').toggleClass('active'); });
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})